import { getGameLabel, getGameColor } from '../data/cards';
import { useCardStore } from '../stores/card-store';
import { useTranslation, useLanguageStore } from '../stores/language-store';
import LanguageToggle from '../components/LanguageToggle';
import ParticleBackground from '../components/ParticleBackground';
import CardItem from '../components/CardItem';

export default function HomePage() {
  const { t } = useTranslation();
  const { language } = useLanguageStore();
  const cards = useCardStore((s) => s.cards);

  const getCardName = (card: typeof cards[0]) => {
    switch (language) {
      case 'en': return card.name;
      case 'ja': return card.nameJa || card.nameKo;
      default: return card.nameKo;
    }
  };

  return (
    <div className="min-h-screen relative bg-neutral-950">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10">
        {/* Header - Minimal */}
        <header className="pt-8 pb-12 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-16">
              {/* Logo */}
              <div className="flex items-center gap-2.5">
                <img src="/logo.svg" alt="DeckAlive" className="h-9 w-auto" />
                <span className="text-lg font-semibold text-white/90 tracking-tight">DeckAlive</span>
              </div>
              
              {/* Language Toggle - Compact */}
              <LanguageToggle />
            </div>
            
            {/* Hero Section - Refined */}
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                {t.title}
              </h1>
              
              <p className="mt-4 text-white/40 text-base md:text-lg font-light">
                {t.subtitle}
              </p>

              {/* Stats - Elegant inline */}
              <div className="mt-10 flex items-center justify-center gap-8 md:gap-12">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-semibold text-amber-400/90">{cards.length}</div>
                  <div className="text-[11px] uppercase tracking-widest text-white/30 mt-1">Cards</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-semibold text-white/80">3</div>
                  <div className="text-[11px] uppercase tracking-widest text-white/30 mt-1">Games</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-semibold text-white/80">$10M+</div>
                  <div className="text-[11px] uppercase tracking-widest text-white/30 mt-1">Value</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Card Grid */}
        <main className="max-w-6xl mx-auto px-4 pb-24">
          {/* Section Divider - Subtle */}
          <div className="mb-10 flex items-center gap-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/5" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-medium">
              Collection
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/5" />
          </div>

          {/* Grid - Generous spacing */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {cards.map((card) => (
              <CardItem
                key={card.id}
                id={card.id}
                name={card.name}
                nameLocalized={getCardName(card)}
                imageUrl={card.imageUrl}
                game={card.game}
                gameLabel={getGameLabel(card.game, language).split(':')[0]?.split(' ')[0] ?? ''}
                gameColor={getGameColor(card.game)}
                highestSale={card.highestSale}
                borderStyle={card.borderStyle}
                showEnglishName={language !== 'en'}
              />
            ))}
          </div>
        </main>

        {/* Footer - Minimal */}
        <footer className="py-16 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <img src="/logo.svg" alt="" className="h-6 w-auto opacity-40" />
                <span className="text-lg font-semibold text-white/40 tracking-tight">DeckAlive</span>
              </div>
              
              <p className="text-white/25 text-sm mt-4 max-w-md mx-auto font-light">
                {t.footer}
              </p>
              
              <p className="text-white/15 text-xs mt-6">
                © 2024 DeckAlive
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
