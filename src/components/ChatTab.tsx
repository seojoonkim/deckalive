import { useState, useRef, useEffect } from 'react';
import type { Card, ChatMessage } from '../types/card';
import { useChatStore } from '../stores/chat-store';
import { useTranslation, useLanguageStore } from '../stores/language-store';
import ReactMarkdown from 'react-markdown';

interface Props {
  card: Card;
}

export default function ChatTab({ card }: Props) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { getMessages, addMessage, isLoading, setLoading } = useChatStore();
  const { t } = useTranslation();
  const { language } = useLanguageStore();
  
  const messages = getMessages(card.id);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
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
      addMessage(card.id, {
        id: `greeting-${Date.now()}`,
        role: 'assistant',
        content: getGreeting(),
        timestamp: Date.now()
      });
    }
  }, [card.id, language]);

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
      
      addMessage(card.id, {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.reply,
        timestamp: Date.now()
      });
    } catch (error) {
      // 에러 시 클라이언트 폴백
      addMessage(card.id, {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: getLocalResponse(card, language),
        timestamp: Date.now()
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-160px)]">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] px-4 py-3 ${
                msg.role === 'user'
                  ? 'chat-bubble-user text-white'
                  : 'chat-bubble-assistant text-gray-100'
              }`}
            >
              <ReactMarkdown className="prose prose-invert prose-sm max-w-none">
                {msg.content}
              </ReactMarkdown>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="chat-bubble-assistant px-4 py-3 text-gray-400">
              <span className="inline-flex gap-1">
                <span className="animate-bounce" style={{ animationDelay: '0ms' }}>●</span>
                <span className="animate-bounce" style={{ animationDelay: '150ms' }}>●</span>
                <span className="animate-bounce" style={{ animationDelay: '300ms' }}>●</span>
              </span>
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
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
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
  return langResponses[Math.floor(Math.random() * langResponses.length)];
}
