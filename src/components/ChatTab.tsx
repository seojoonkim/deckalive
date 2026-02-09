import { useState, useRef, useEffect } from 'react';
import type { Card, ChatMessage, Language } from '../types/card';
import { useChatStore } from '../stores/chat-store';
import { useTranslation, useLanguageStore } from '../stores/language-store';
import ReactMarkdown from 'react-markdown';
import { getRAGContext } from '../lib/keyword-rag';

interface Props {
  card: Card;
}

// 타이핑 인디케이터
function TypingDots({ color }: { color: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="typing-dot w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
      <span className="typing-dot w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
      <span className="typing-dot w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
    </span>
  );
}

export default function ChatTab({ card }: Props) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { getMessages, addMessage, updateMessage, isLoading, setLoading } = useChatStore();
  const { t } = useTranslation();
  const { language } = useLanguageStore();
  
  const messages = getMessages(card.id);
  
  // 애니메이션 상태
  const [animatingMessageId, setAnimatingMessageId] = useState<string | null>(null);
  const [typingPhase, setTypingPhase] = useState<'delay' | 'typing' | 'done'>('done');
  const [completedMessages, setCompletedMessages] = useState<Set<string>>(new Set());
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages, typingPhase]);
  
  // 테마 컬러 가져오기
  const getThemeColor = () => {
    switch (card.game) {
      case 'pokemon': return '#EAB308'; // yellow-500
      case 'mtg': return '#7C3AED'; // purple-600
      case 'yugioh': return '#2563EB'; // blue-600
      default: return '#EAB308';
    }
  };
  
  // Get greeting based on language
  const getGreeting = () => {
    switch (language) {
      case 'en': return card.persona.greetingEn || card.persona.greeting;
      case 'ja': return card.persona.greetingJa || card.persona.greeting;
      default: return card.persona.greeting;
    }
  };

  const getCardName = () => {
    switch (language) {
      case 'en': return card.name;
      case 'ja': return card.nameJa || card.nameKo;
      default: return card.nameKo;
    }
  };
  
  // 첫 방문 시 인사말 추가
  useEffect(() => {
    if (messages.length === 0) {
      const greetingId = `greeting-${Date.now()}`;
      addMessage(card.id, {
        id: greetingId,
        role: 'assistant',
        content: getGreeting(),
        timestamp: Date.now()
      });
      // 첫 인사말은 바로 완료 상태로
      setCompletedMessages(prev => new Set(prev).add(greetingId));
    }
  }, [card.id]);

  const handleTypingComplete = (messageId: string) => {
    setCompletedMessages(prev => new Set(prev).add(messageId));
    setTypingPhase('done');
    setAnimatingMessageId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: input.trim(),
      timestamp: Date.now()
    };
    
    addMessage(card.id, userMessage);
    setInput('');
    setLoading(true);
    
    // 스트리밍용 assistant 메시지 미리 생성
    const assistantId = `assistant-${Date.now()}`;
    addMessage(card.id, {
      id: assistantId,
      role: 'assistant',
      content: '',
      timestamp: Date.now()
    });
    
    // 스트리밍 중 애니메이션 상태 설정
    setAnimatingMessageId(assistantId);
    setTypingPhase('typing');
    
    try {
      // RAG: 사용자 메시지에서 키워드 감지 → 관련 카드 정보 로드
      const ragContext = await getRAGContext(
        card.id,
        userMessage.content,
        language as Language
      );
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cardId: card.id,
          message: userMessage.content,
          history: messages.slice(-10),
          language,
          ragContext
        })
      });
      
      if (!response.ok) throw new Error('API error');
      
      // 스트리밍 응답 처리
      const reader = response.body?.getReader();
      if (!reader) throw new Error('No reader');
      
      const decoder = new TextDecoder();
      let fullText = '';
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');
        
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') break;
            
            try {
              const parsed = JSON.parse(data);
              if (parsed.text) {
                fullText += parsed.text;
                updateMessage(card.id, assistantId, fullText);
                scrollToBottom();
              }
            } catch {
              // JSON 파싱 실패 무시
            }
          }
        }
      }
      
      // 스트리밍 완료
      handleTypingComplete(assistantId);
    } catch (error) {
      // 에러 시 로컬 응답으로 대체
      updateMessage(card.id, assistantId, getLocalResponse(card, language));
      handleTypingComplete(assistantId);
    } finally {
      setLoading(false);
    }
  };

  const themeColor = getThemeColor();

  return (
    <div className="flex flex-col h-[calc(100vh-160px)]">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.flatMap((msg) => {
          const isUser = msg.role === 'user';
          const isAnimating = msg.id === animatingMessageId;
          const isCompleted = completedMessages.has(msg.id);
          const shouldAnimate = isAnimating && !isUser;
          
          // 사용자 메시지
          if (isUser) {
            return [(
              <div key={msg.id} className="flex justify-end animate-bubble-in-user">
                <div className="max-w-[85%] px-4 py-3 chat-bubble-user text-white">
                  <ReactMarkdown className="prose prose-invert prose-sm max-w-none">
                    {msg.content}
                  </ReactMarkdown>
                </div>
              </div>
            )];
          }
          
          // 어시스턴트 메시지 - 스트리밍/애니메이션 중
          if (shouldAnimate) {
            if (typingPhase === 'delay') {
              return [(
                <div key={msg.id} className="flex justify-start animate-bubble-in">
                  <div className="chat-bubble-assistant px-4 py-3">
                    <TypingDots color={themeColor} />
                  </div>
                </div>
              )];
            }
            
            if (typingPhase === 'typing') {
              // 스트리밍 중: 텍스트가 없으면 점 3개, 있으면 텍스트 + 커서
              return [(
                <div key={msg.id} className="flex justify-start">
                  <div className="chat-bubble-assistant px-4 py-3 text-gray-100 animate-bubble-in">
                    {msg.content ? (
                      <>
                        <span>{msg.content}</span>
                        <span className="inline-block w-0.5 h-4 ml-0.5 bg-yellow-400 animate-pulse" />
                      </>
                    ) : (
                      <TypingDots color={themeColor} />
                    )}
                  </div>
                </div>
              )];
            }
          }
          
          // 일반 메시지 (완료됨 또는 과거 메시지)
          // 문단(\n\n) 기준으로 버블 분리
          const paragraphs = msg.content.split('\n\n').filter(p => p.trim());
          
          // 문단이 1개면 그냥 표시, 여러 개면 각각 버블로
          if (paragraphs.length <= 1) {
            return [(
              <div
                key={msg.id}
                className={`flex justify-start ${isCompleted ? '' : 'animate-bubble-in'}`}
              >
                <div className="max-w-[85%] px-4 py-3 chat-bubble-assistant text-gray-100">
                  <ReactMarkdown className="prose prose-invert prose-sm max-w-none">
                    {msg.content}
                  </ReactMarkdown>
                </div>
              </div>
            )];
          }
          
          // 여러 문단: 각각 버블로 분리, 딜레이 애니메이션
          return paragraphs.map((para, idx) => (
            <div
              key={`${msg.id}-${idx}`}
              className="flex justify-start animate-bubble-in"
              style={{ animationDelay: `${idx * 350}ms` }}
            >
              <div className="max-w-[85%] px-4 py-3 chat-bubble-assistant text-gray-100">
                <ReactMarkdown className="prose prose-invert prose-sm max-w-none">
                  {para}
                </ReactMarkdown>
              </div>
            </div>
          ));
        })}
        
        {/* API 로딩 중 */}
        {isLoading && (
          <div className="flex justify-start animate-bubble-in">
            <div className="chat-bubble-assistant px-4 py-3">
              <TypingDots color={themeColor} />
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.chat.placeholder.replace('{name}', getCardName())}
            className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all backdrop-blur-sm"
            disabled={isLoading || typingPhase !== 'done'}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading || typingPhase !== 'done'}
            className="btn-primary px-6 py-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t.chat.send}
          </button>
        </div>
      </form>
    </div>
  );
}

// 로컬 폴백 응답
function getLocalResponse(card: Card, lang: string): string {
  const responses = {
    ko: [
      '흠... 흥미롭군.',
      `나에 대해 더 알고 싶다면, 정보 탭을 확인해봐.`,
      `${card.year}년부터 지금까지... 많은 것을 보아왔지.`,
      '내 가치를 아는 자만이 진정한 수집가다.',
    ],
    en: [
      'Hmm... Interesting.',
      'If you want to know more about me, check the Info tab.',
      `From ${card.year} until now... I have seen many things.`,
      'Only those who know my worth are true collectors.',
    ],
    ja: [
      'ふむ... 興味深い。',
      '私についてもっと知りたいなら、情報タブを確認して。',
      `${card.year}年から今まで... 多くのことを見てきた。`,
      '私の価値を知る者だけが真のコレクターだ。',
    ],
  };
  
  const langResponses = responses[lang as keyof typeof responses] || responses.ko;
  const idx = Math.floor(Math.random() * langResponses.length);
  return langResponses[idx] ?? '...';
}
