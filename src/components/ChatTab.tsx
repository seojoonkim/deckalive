import { useState, useRef, useEffect } from 'react';
import type { Card, ChatMessage } from '../types/card';
import { useChatStore } from '../stores/chat-store';
import ReactMarkdown from 'react-markdown';

interface Props {
  card: Card;
}

export default function ChatTab({ card }: Props) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { getMessages, addMessage, isLoading, setLoading } = useChatStore();
  
  const messages = getMessages(card.id);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // 첫 방문 시 인사말 추가
  useEffect(() => {
    if (messages.length === 0) {
      addMessage(card.id, {
        id: `greeting-${Date.now()}`,
        role: 'assistant',
        content: card.persona.greeting,
        timestamp: Date.now()
      });
    }
  }, [card.id]);

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
          history: messages.slice(-10)
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
        content: getLocalResponse(card, userMessage.content),
        timestamp: Date.now()
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)]">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-100'
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
            <div className="bg-gray-800 rounded-2xl px-4 py-2 text-gray-400">
              <span className="animate-pulse">...</span>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`${card.nameKo}에게 말 걸기...`}
            className="flex-1 bg-gray-800 border border-gray-700 rounded-full px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-medium px-6 py-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
          >
            전송
          </button>
        </div>
      </form>
    </div>
  );
}

// 로컬 폴백 응답
function getLocalResponse(card: Card, _userMessage: string): string {
  const idx = Math.floor(Math.random() * 5);
  switch (idx) {
    case 0: return `흠... 흥미롭군.`;
    case 1: return `나에 대해 더 알고 싶다면, 정보 탭을 확인해봐.`;
    case 2: return `${card.year}년부터 지금까지... 많은 것을 보아왔지.`;
    case 3: return `내 가치를 아는 자만이 진정한 수집가다.`;
    default: return `API 연결이 필요해. 하지만 나는 여전히 여기 있어.`;
  }
}
