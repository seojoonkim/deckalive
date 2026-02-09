import type { Card } from '../types/card';
import { getGameLabel } from '../data/cards';

interface Props {
  card: Card;
}

export default function InfoTab({ card }: Props) {
  const infoItems = [
    { label: '게임', value: getGameLabel(card.game) },
    { label: '발매년도', value: `${card.year}년` },
    { label: '희귀도', value: card.rarity },
    { label: '최고 판매가', value: card.highestSale, highlight: true },
    { label: '현재 시세', value: card.currentPrice },
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Card Image */}
      <div className="flex justify-center">
        <div className="w-48 md:w-64 card-aspect rounded-xl overflow-hidden shadow-2xl">
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
      <div className="bg-gray-900 rounded-xl p-4 space-y-3">
        <h2 className="text-lg font-bold text-white mb-4">📋 기본 정보</h2>
        {infoItems.map((item) => (
          <div key={item.label} className="flex justify-between items-center py-2 border-b border-gray-800 last:border-0">
            <span className="text-gray-400">{item.label}</span>
            <span className={item.highlight ? 'text-yellow-400 font-bold' : 'text-white'}>
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="bg-gray-900 rounded-xl p-4">
        <h2 className="text-lg font-bold text-white mb-3">📖 설명</h2>
        <p className="text-gray-300 leading-relaxed">{card.description}</p>
      </div>

      {/* History */}
      <div className="bg-gray-900 rounded-xl p-4">
        <h2 className="text-lg font-bold text-white mb-3">📜 역사</h2>
        <p className="text-gray-300 leading-relaxed">{card.history}</p>
      </div>

      {/* Persona */}
      <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl p-4 border border-purple-800/50">
        <h2 className="text-lg font-bold text-white mb-3">🎭 페르소나</h2>
        <p className="text-purple-200 mb-3 italic">"{card.persona.style}"</p>
        <div className="flex flex-wrap gap-2">
          {card.persona.traits.map((trait) => (
            <span key={trait} className="px-3 py-1 bg-purple-800/50 rounded-full text-sm text-purple-200">
              {trait}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
