import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { getCardById, getGameLabel, getGameColor, getBorderStyle } from '../data/cards';
import { useTranslation, useLanguageStore } from '../stores/language-store';
import LanguageToggle from '../components/LanguageToggle';
import ChatTab from '../components/ChatTab';
import InfoTab from '../components/InfoTab';
import CommentsTab from '../components/CommentsTab';

type TabType = 'chat' | 'info' | 'comments';

export default function CardPage() {
  const { cardId } = useParams<{ cardId: string }>();
  const [activeTab, setActiveTab] = useState<TabType>('chat');
  const { t } = useTranslation();
  const { language } = useLanguageStore();
  
  const card = getCardById(cardId || '');
  
  if (!card) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-lg">{t.chat.cardNotFound}</p>
          <Link to="/" className="text-blue-400 hover:underline mt-4 inline-block">
            {t.chat.backHome}
          </Link>
        </div>
      </div>
    );
  }

  const getCardName = () => {
    switch (language) {
      case 'en': return card.name;
      case 'ja': return card.nameJa || card.nameKo;
      default: return card.nameKo;
    }
  };

  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'chat', label: t.tabs.chat, icon: '💬' },
    { id: 'info', label: t.tabs.info, icon: '📋' },
    { id: 'comments', label: t.tabs.comments, icon: '💭' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-dark">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link to="/" className="text-gray-400 hover:text-white transition-colors text-xl">
            ←
          </Link>
          <div className={`w-12 h-16 rounded-lg overflow-hidden ${getBorderStyle(card.borderStyle)}`}>
            <img
              src={card.imageUrl}
              alt={card.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://placehold.co/48x64/1a1a1a/666?text=?`;
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-bold text-white truncate">{getCardName()}</h1>
            {language !== 'en' && (
              <p className="text-xs text-gray-400 truncate">{card.name}</p>
            )}
          </div>
          <LanguageToggle />
          <span className={`px-3 py-1.5 rounded-lg text-xs font-bold text-white ${getGameColor(card.game)} shadow-lg`}>
            {getGameLabel(card.game, language).split(':')[0].split(' ')[0]}
          </span>
        </div>
        
        {/* Tabs */}
        <div className="max-w-4xl mx-auto px-4 flex gap-1 border-t border-gray-800/50">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 text-sm font-medium transition-all relative ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <span className="mr-1.5">{tab.icon}</span>
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full" />
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
