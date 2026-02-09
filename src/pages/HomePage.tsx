import { Link } from 'react-router';
import { cards, getGameLabel, getGameColor, getBorderStyle } from '../data/cards';
import { useTranslation, useLanguageStore } from '../stores/language-store';
import LanguageToggle from '../components/LanguageToggle';
import ParticleBackground from '../components/ParticleBackground';
import CardItem from '../components/CardItem';

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
    <div className="min-h-screen relative">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Language Toggle - Top Right */}
            <div className="flex justify-end mb-6">
              <LanguageToggle />
            </div>
            
            {/* Title Section */}
            <div className="text-center">
              {/* Logo/Icon */}
              <div className="mb-4">
                <span className="text-5xl md:text-6xl animate-float inline-block">🃏</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold gradient-text tracking-tight">
                {t.title}
              </h1>
              
              <p className="mt-4 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                {t.subtitle}
              </p>

              {/* Stats Bar */}
              <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8">
                <div className="glass px-6 py-3 rounded-full">
                  <span className="text-yellow-400 font-bold">{cards.length}</span>
                  <span className="text-gray-400 ml-2">Legendary Cards</span>
                </div>
                <div className="glass px-6 py-3 rounded-full">
                  <span className="text-purple-400 font-bold">3</span>
                  <span className="text-gray-400 ml-2">TCG Games</span>
                </div>
                <div className="glass px-6 py-3 rounded-full">
                  <span className="text-pink-400 font-bold">$10M+</span>
                  <span className="text-gray-400 ml-2">Total Value</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Card Grid */}
        <main className="max-w-7xl mx-auto px-4 pb-20">
          {/* Section Title */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
            <h2 className="text-sm uppercase tracking-widest text-gray-500 font-medium">
              Collection
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
            {cards.map((card) => (
              <CardItem
                key={card.id}
                id={card.id}
                name={card.name}
                nameLocalized={getCardName(card)}
                imageUrl={card.imageUrl}
                game={card.game}
                gameLabel={getGameLabel(card.game, language).split(':')[0].split(' ')[0]}
                gameColor={getGameColor(card.game)}
                highestSale={card.highestSale}
                borderStyle={card.borderStyle}
                showEnglishName={language !== 'en'}
              />
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              {/* Footer Logo */}
              <div className="mb-4">
                <span className="text-3xl gradient-text font-bold">DeckAlive</span>
              </div>
              
              <p className="text-gray-500 text-sm max-w-md mx-auto">
                {t.footer}
              </p>
              
              <p className="text-gray-600 text-xs mt-4">
                © 2024 DeckAlive. All card images belong to their respective owners.
              </p>

              {/* Social Links Placeholder */}
              <div className="mt-6 flex justify-center gap-4">
                <a href="#" className="text-gray-600 hover:text-purple-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
