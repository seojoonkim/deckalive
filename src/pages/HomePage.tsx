import { Link } from 'react-router';
import { cards, getGameLabel, getGameColor, getBorderStyle } from '../data/cards';
import { useTranslation, useLanguageStore } from '../stores/language-store';
import LanguageToggle from '../components/LanguageToggle';

export default function HomePage() {
  const { t } = useTranslation();
  const { language } = useLanguageStore();

  const getCardName = (card: typeof cards[0]) => {
    switch (language) {
      case 'en': return card.name;
      case 'ja': return card.nameJa || card.nameKo;
      default: return card.nameKo;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0d0d18] to-[#0a0a0f]">
      {/* Header */}
      <header className="py-8 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex-1" />
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text tracking-tight">
              {t.title}
            </h1>
            <p className="mt-3 text-gray-400 text-lg md:text-xl">
              {t.subtitle}
            </p>
          </div>
          <div className="flex-1 flex justify-end">
            <LanguageToggle />
          </div>
        </div>
      </header>

      {/* Card Grid */}
      <main className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card) => (
            <Link
              key={card.id}
              to={`/card/${card.id}`}
              className="group block"
            >
              <div 
                className={`card-aspect card-hover card-hologram relative overflow-hidden rounded-xl bg-gray-900 ${getBorderStyle(card.borderStyle)}`}
              >
                {/* Card Image */}
                <img
                  src={card.imageUrl}
                  alt={card.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/252x352/1a1a1a/666?text=${encodeURIComponent(card.name)}`;
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                
                {/* Game Badge */}
                <div className={`absolute top-2 left-2 px-2.5 py-1 rounded-lg text-xs font-bold text-white ${getGameColor(card.game)} shadow-lg`}>
                  {getGameLabel(card.game, language).split(':')[0].split(' ')[0]}
                </div>
                
                {/* Rarity Indicator */}
                {card.borderStyle === 'rainbow' && (
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                    ✨ ULTRA
                  </div>
                )}
                {card.borderStyle === 'gold' && (
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-gradient-to-r from-yellow-500 to-amber-600 text-black">
                    ★ RARE
                  </div>
                )}
                
                {/* Card Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-bold text-white text-sm md:text-base leading-tight line-clamp-2 drop-shadow-lg">
                    {getCardName(card)}
                  </h3>
                  {language !== 'en' && (
                    <p className="text-xs text-gray-300 mt-1 truncate">
                      {card.name}
                    </p>
                  )}
                  <p className="text-sm text-yellow-400 mt-2 font-bold tracking-wide pulse-glow">
                    {card.highestSale}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-gray-800/50">
        <p className="text-gray-500 text-sm">
          {t.footer}
        </p>
        <p className="text-gray-600 text-xs mt-2">
          © 2024 DeckAlive. All card images belong to their respective owners.
        </p>
      </footer>
    </div>
  );
}
