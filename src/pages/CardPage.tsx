import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { getCardById, getGameLabel, getGameColor } from '../data/cards';
import ChatTab from '../components/ChatTab';
import InfoTab from '../components/InfoTab';
import CommentsTab from '../components/CommentsTab';

type TabType = 'chat' | 'info' | 'comments';

export default function CardPage() {
  const { cardId } = useParams<{ cardId: string }>();
  const [activeTab, setActiveTab] = useState<TabType>('chat');
  
  const card = getCardById(cardId || '');
  
  if (!card) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-lg">카드를 찾을 수 없습니다</p>
          <Link to="/" className="text-blue-400 hover:underline mt-4 inline-block">
            ← 홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'chat', label: '채팅', icon: '💬' },
    { id: 'info', label: '정보', icon: '📋' },
    { id: 'comments', label: '댓글', icon: '💭' },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link to="/" className="text-gray-400 hover:text-white transition-colors">
            ←
          </Link>
          <img
            src={card.imageUrl}
            alt={card.name}
            className="w-10 h-14 object-cover rounded"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://placehold.co/40x56/1a1a1a/666?text=?`;
            }}
          />
          <div className="flex-1 min-w-0">
            <h1 className="font-bold text-white truncate">{card.nameKo}</h1>
            <p className="text-xs text-gray-400 truncate">{card.name}</p>
          </div>
          <span className={`px-2 py-1 rounded text-xs font-medium text-white ${getGameColor(card.game)}`}>
            {getGameLabel(card.game).split(':')[0]}
          </span>
        </div>
        
        {/* Tabs */}
        <div className="max-w-4xl mx-auto px-4 flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <span className="mr-1">{tab.icon}</span>
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500" />
              )}
            </button>
          ))}
        </div>
      </header>

      {/* Tab Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full">
        {activeTab === 'chat' && <ChatTab card={card} />}
        {activeTab === 'info' && <InfoTab card={card} />}
        {activeTab === 'comments' && <CommentsTab card={card} />}
      </main>
    </div>
  );
}
