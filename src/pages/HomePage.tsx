import { Link } from 'react-router';
import { cards, getGameLabel, getGameColor } from '../data/cards';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Header */}
      <header className="py-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          DeckAlive
        </h1>
        <p className="mt-2 text-gray-400 text-lg">카드가 직접 말하는 TCG 채팅 플랫폼</p>
      </header>

      {/* Card Grid */}
      <main className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {cards.map((card) => (
            <Link
              key={card.id}
              to={`/card/${card.id}`}
              className="group block"
            >
              <div className="card-aspect card-hover relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700">
                {/* Card Image */}
                <img
                  src={card.imageUrl}
                  alt={card.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/252x352/1a1a1a/666?text=${encodeURIComponent(card.name)}`;
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                
                {/* Game Badge */}
                <div className={`absolute top-2 left-2 px-2 py-0.5 rounded text-xs font-medium text-white ${getGameColor(card.game)}`}>
                  {getGameLabel(card.game).split(':')[0]}
                </div>
                
                {/* Card Info */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="font-bold text-white text-sm md:text-base leading-tight truncate">
                    {card.nameKo}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 truncate">
                    {card.name}
                  </p>
                  <p className="text-xs text-yellow-400 mt-1 font-medium">
                    {card.highestSale}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        <p>세계에서 가장 비싼 TCG 카드 9장과 직접 대화하세요</p>
      </footer>
    </div>
  );
}
