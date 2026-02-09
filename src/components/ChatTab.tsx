import { useState, useRef, useEffect } from 'react';
import type { Card, ChatMessage } from '../types/card';
import { useChatStore } from '../stores/chat-store';
import { useTranslation, useLanguageStore } from '../stores/language-store';
import ReactMarkdown from 'react-markdown';
import { getGameColor } from '../data/cards';

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

// 타이핑 애니메이션 버블
function TypingBubble({ 
  text, 
  onComplete,
  onProgress,
}: { 
  text: string;
  onComplete: () => void;
  onProgress?: () => void;
}) {
  const [visibleChars, setVisibleChars] = useState(0);
  const completedRef = useRef(false);

  useEffect(() => {
    if (visibleChars >= text.length) {
      if (!completedRef.current) {
        completedRef.current = true;
        onComplete();
      }
      return;
    }

    // 글자당 30~50ms (빠른 타이핑)
    const delay = 30 + Math.random() * 20;
    const timer = setTimeout(() => {
      setVisibleChars(c => c + 1);
      onProgress?.();
    }, delay);

    return () => clearTimeout(timer);
  }, [visibleChars, text.length, onComplete, onProgress]);

  return (
    <div className="chat-bubble-assistant px-4 py-3 text-gray-100 animate-bubble-in">
      <span>{text.slice(0, visibleChars)}</span>
      {visibleChars < text.length && (
        <span className="inline-block w-0.5 h-4 ml-0.5 bg-yellow-400 animate-pulse" />
      )}
    </div>
  );
}

export default function ChatTab({ card }: Props) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { getMessages, addMessage, isLoading, setLoading } = useChatStore();
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
      // 첫 인사말도 애니메이션 적용
      setAnimatingMessageId(greetingId);
      setTypingPhase('delay');
      const delay = 500 + Math.random() * 1000; // 0.5~1.5초 딜레이
      setTimeout(() => setTypingPhase('typing'), delay);
    }
  }, [card.id]);

  // 새 assistant 메시지에 애니메이션 적용
  const startMessageAnimation = (messageId: string) => {
    setAnimatingMessageId(messageId);
    setTypingPhase('delay');
    const delay = 1000 + Math.random() * 2000; // 1~3초 딜레이
    setTimeout(() => setTypingPhase('typing'), delay);
  };

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
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cardId: card.id,
          message: userMessage.content,
          history: messages.slice(-10),
          language
        })
      });
      
      if (!response.ok) throw new Error('API error');
      
      const data = await response.json();
      
      const assistantId = `assistant-${Date.now()}`;
      addMessage(card.id, {
        id: assistantId,
        role: 'assistant',
        content: data.reply,
        timestamp: Date.now()
      });
      
      // 애니메이션 시작
      startMessageAnimation(assistantId);
    } catch (error) {
      const assistantId = `assistant-${Date.now()}`;
      addMessage(card.id, {
        id: assistantId,
        role: 'assistant',
        content: getLocalResponse(card, language),
        timestamp: Date.now()
      });
      startMessageAnimation(assistantId);
    } finally {
      setLoading(false);
    }
  };

  const themeColor = getThemeColor();

  return (
    <div className="flex flex-col h-[calc(100vh-160px)]">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          const isAnimating = msg.id === animatingMessageId;
          const isCompleted = completedMessages.has(msg.id);
          const shouldAnimate = isAnimating && !isUser;
          
          // 사용자 메시지
          if (isUser) {
            return (
              <div key={msg.id} className="flex justify-end animate-bubble-in-user">
                <div className="max-w-[85%] px-4 py-3 chat-bubble-user text-white">
                  <ReactMarkdown className="prose prose-invert prose-sm max-w-none">
                    {msg.content}
                  </ReactMarkdown>
                </div>
              </div>
            );
          }
          
          // 어시스턴트 메시지 - 애니메이션 중
          if (shouldAnimate) {
            if (typingPhase === 'delay') {
              return (
                <div key={msg.id} className="flex justify-start animate-bubble-in">
                  <div className="chat-bubble-assistant px-4 py-3">
                    <TypingDots color={themeColor} />
                  </div>
                </div>
              );
            }
            
            if (typingPhase === 'typing') {
              return (
                <div key={msg.id} className="flex justify-start">
                  <TypingBubble
                    text={msg.content}
                    onComplete={() => handleTypingComplete(msg.id)}
                    onProgress={scrollToBottom}
                  />
                </div>
              );
            }
          }
          
          // 일반 메시지 (완료됨 또는 과거 메시지)
          return (
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
          );
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
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800/50 glass-dark">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.chat.placeholder.replace('{name}', getCardName())}
            className="flex-1 bg-gray-900/80 border border-gray-700/50 rounded-full px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all"
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
