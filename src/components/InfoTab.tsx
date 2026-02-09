import type { Card } from '../types/card';
import { getGameLabel, getBorderStyle } from '../data/cards';
import { useTranslation, useLanguageStore } from '../stores/language-store';

interface Props {
  card: Card;
}

export default function InfoTab({ card }: Props) {
  const { t } = useTranslation();
  const { language } = useLanguageStore();

  const getDescription = () => {
    switch (language) {
      case 'en': return card.descriptionEn || card.description;
      case 'ja': return card.descriptionJa || card.description;
      default: return card.description;
    }
  };

  const infoItems = [
    { label: t.info.game, value: getGameLabel(card.game, language) },
    { label: t.info.year, value: `${card.year}` },
    { label: t.info.rarity, value: card.rarity },
    { label: t.info.highestSale, value: card.highestSale, highlight: true },
    { label: t.info.currentPrice, value: card.currentPrice },
  ];

  return (
    <div className="p-4 space-y-6 pb-8">
      {/* Card Image */}
      <div className="flex justify-center">
        <div className={`w-56 md:w-72 card-aspect rounded-xl overflow-hidden ${getBorderStyle(card.borderStyle)} card-hologram`}>
          <img
            src={card.imageUrl}
            alt={card.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://placehold.co/256x358/1a1a1a/666?text=${encodeURIComponent(card.name)}`;
            }}
          />
        </div>
      </div>

      {/* Basic Info */}
      <div className="glass-dark rounded-2xl p-5 space-y-3">
        <h2 className="text-lg font-bold text-white mb-4">{t.info.basicInfo}</h2>
        {infoItems.map((item) => (
          <div key={item.label} className="flex justify-between items-center py-2 border-b border-gray-800/50 last:border-0">
            <span className="text-gray-400">{item.label}</span>
            <span className={item.highlight ? 'text-yellow-400 font-bold text-lg' : 'text-white font-medium'}>
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="glass-dark rounded-2xl p-5">
        <h2 className="text-lg font-bold text-white mb-3">{t.info.description}</h2>
        <p className="text-gray-300 leading-relaxed">{getDescription()}</p>
      </div>

      {/* History */}
      <div className="glass-dark rounded-2xl p-5">
        <h2 className="text-lg font-bold text-white mb-3">{t.info.history}</h2>
        <p className="text-gray-300 leading-relaxed">{card.history}</p>
      </div>

      {/* Persona */}
      <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-5 border border-purple-500/20">
        <h2 className="text-lg font-bold text-white mb-3">{t.info.persona}</h2>
        <p className="text-purple-200 mb-4 italic leading-relaxed">"{card.persona.style}"</p>
        <div className="flex flex-wrap gap-2">
          {card.persona.traits.map((trait) => (
            <span key={trait} className="px-3 py-1.5 bg-purple-800/40 rounded-full text-sm text-purple-200 border border-purple-600/30">
              {trait}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
