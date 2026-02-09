import { useEffect } from 'react';
import { Link } from 'react-router';
import { useCardStore } from '../../stores/card-store';
import { useAdminStore } from '../../stores/admin-store';
import CardListPanel from './CardListPanel';
import CardEditForm from './CardEditForm';

export default function AdminLayout() {
  const cards = useCardStore((s) => s.cards);
  const selectedCardId = useAdminStore((s) => s.selectedCardId);
  const setSelectedCard = useAdminStore((s) => s.setSelectedCard);
  const resetToDefaults = useCardStore((s) => s.resetToDefaults);

  const selectedCard = cards.find((c) => c.id === selectedCardId) ?? null;

  // Auto-select first card
  useEffect(() => {
    if (!selectedCardId && cards.length > 0) {
      setSelectedCard(cards[0]!.id);
    }
  }, [cards, selectedCardId, setSelectedCard]);

  return (
    <div className="h-screen flex flex-col bg-[#0a0a0f]">
      {/* Top bar */}
      <header className="bg-[#12121a] border-b border-gray-800 px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🃏</span>
          <h1 className="text-lg font-bold gradient-text">
            DeckAlive Admin
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              if (confirm('모든 카드를 기본값으로 초기화하시겠습니까?')) {
                resetToDefaults();
              }
            }}
            className="text-sm text-gray-400 hover:text-red-400 transition-colors"
          >
            초기화
          </button>
          <Link
            to="/"
            className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            메인으로 돌아가기 →
          </Link>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <CardListPanel />

        {/* Content area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {selectedCard ? (
            <div className="p-6 max-w-4xl">
              <CardEditForm card={selectedCard} />
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              왼쪽에서 카드를 선택하세요
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
