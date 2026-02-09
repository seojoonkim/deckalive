import { useState, useRef } from 'react';
import { useParams, Link } from 'react-router';
import { getCardById, getGameLabel, getGameColor, getBorderStyle } from '../data/cards';
import { useTranslation, useLanguageStore } from '../stores/language-store';
import LanguageToggle from '../components/LanguageToggle';
import ParticleBackground from '../components/ParticleBackground';
import ChatTab from '../components/ChatTab';
import InfoTab from '../components/InfoTab';
import CommentsTab from '../components/CommentsTab';

type TabType = 'chat' | 'info' | 'comments';

export default function CardPage() {
  const { cardId } = useParams<{ cardId: string }>();
  const [activeTab, setActiveTab] = useState<TabType>('chat');
  const { t } = useTranslation();
  const { language } = useLanguageStore();
  const cardImageRef = useRef<HTMLDivElement>(null);
  const [imageTransform, setImageTransform] = useState('');
  
  const card = getCardById(cardId || '');
  
  if (!card) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center relative">
        <ParticleBackground />
        <div className="text-center relative z-10 glass-card p-8 rounded-2xl">
          <span className="text-6xl mb-4 block">🔍</span>
          <p className="text-gray-400 text-lg">{t.chat.cardNotFound}</p>
          <Link 
            to="/" 
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 btn-primary rounded-xl"
          >
            <span>←</span>
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

  const handleCardMouseMove = (e: React.MouseEvent) => {
    if (!cardImageRef.current) return;
    const rect = cardImageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setImageTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
  };

  const handleCardMouseLeave = () => {
    setImageTransform('');
  };

  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'chat', label: t.tabs.chat, icon: '💬' },
    { id: 'info', label: t.tabs.info, icon: '📋' },
    { id: 'comments', label: t.tabs.comments, icon: '💭' },
  ];

  const getBorderGlow = () => {
    switch (card.borderStyle) {
      case 'rainbow':
        return 'shadow-[0_0_60px_rgba(147,51,234,0.4),0_0_100px_rgba(236,72,153,0.2)]';
      case 'gold':
        return 'shadow-[0_0_50px_rgba(255,215,0,0.3),0_0_80px_rgba(255,215,0,0.15)]';
      case 'silver':
        return 'shadow-[0_0_40px_rgba(192,192,192,0.25)]';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Header */}
      <header className="sticky top-0 z-50 glass-dark border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4">
          {/* Back Button */}
          <Link 
            to="/" 
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          
          {/* Card Thumbnail */}
          <div 
            ref={cardImageRef}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            className={`w-12 h-16 rounded-lg overflow-hidden ${getBorderStyle(card.borderStyle)} ${getBorderGlow()} transition-transform duration-200`}
            style={{ transform: imageTransform }}
          >
            <img
              src={card.imageUrl}
              alt={card.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://placehold.co/48x64/1a1a1a/666?text=?`;
              }}
            />
          </div>
          
          {/* Card Info */}
          <div className="flex-1 min-w-0">
            <h1 className="font-bold text-white truncate text-lg">{getCardName()}</h1>
            {language !== 'en' && (
              <p className="text-xs text-gray-400 truncate">{card.name}</p>
            )}
          </div>
          
          {/* Right Side */}
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <span className={`px-3 py-1.5 rounded-lg text-xs font-bold text-white ${getGameColor(card.game)} shadow-lg`}>
              {getGameLabel(card.game, language).split(':')[0].split(' ')[0]}
            </span>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex gap-1">
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
                  <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Tab Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full relative z-10">
        <div className="animate-fade-in-up" key={activeTab}>
          {activeTab === 'chat' && <ChatTab card={card} />}
          {activeTab === 'info' && <InfoTab card={card} />}
          {activeTab === 'comments' && <CommentsTab card={card} />}
        </div>
      </main>
    </div>
  );
}
