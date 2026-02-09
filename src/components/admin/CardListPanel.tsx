import { useState } from 'react';
import { useCardStore } from '../../stores/card-store';
import { useAdminStore } from '../../stores/admin-store';
import type { GameType } from '../../types/card';

const defaultPersona = {
  style: '',
  greeting: '',
  greetingEn: '',
  greetingJa: '',
  traits: [],
};

export default function CardListPanel() {
  const cards = useCardStore((s) => s.cards);
  const addCard = useCardStore((s) => s.addCard);
  const deleteCard = useCardStore((s) => s.deleteCard);
  const selectedCardId = useAdminStore((s) => s.selectedCardId);
  const setSelectedCard = useAdminStore((s) => s.setSelectedCard);
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCardId, setNewCardId] = useState('');
  const [newCardName, setNewCardName] = useState('');
  const [newCardGame, setNewCardGame] = useState<GameType>('pokemon');
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const handleAdd = () => {
    if (!newCardId.trim() || !newCardName.trim()) return;
    const id = newCardId.trim().toLowerCase().replace(/\s+/g, '-');
    addCard({
      id,
      name: newCardName.trim(),
      nameKo: newCardName.trim(),
      nameJa: '',
      game: newCardGame,
      year: new Date().getFullYear(),
      rarity: 'Unknown',
      highestSale: '$0',
      currentPrice: '$0',
      imageUrl: '',
      borderStyle: 'normal',
      persona: defaultPersona,
      description: '',
      descriptionEn: '',
      descriptionJa: '',
      history: '',
    });
    setSelectedCard(id);
    setShowAddForm(false);
    setNewCardId('');
    setNewCardName('');
  };

  const handleDelete = (cardId: string) => {
    deleteCard(cardId);
    setDeleteConfirm(null);
    if (selectedCardId === cardId) {
      setSelectedCard(null);
    }
  };

  const getGameBadgeColor = (game: GameType) => {
    switch (game) {
      case 'pokemon': return 'bg-yellow-500/20 text-yellow-400';
      case 'mtg': return 'bg-purple-500/20 text-purple-400';
      case 'yugioh': return 'bg-blue-500/20 text-blue-400';
    }
  };

  const getGameLabel = (game: GameType) => {
    switch (game) {
      case 'pokemon': return 'PKM';
      case 'mtg': return 'MTG';
      case 'yugioh': return 'YGO';
    }
  };

  return (
    <div className="w-72 bg-[#12121a] border-r border-gray-800 flex flex-col shrink-0">
      {/* Header */}
      <div className="p-3 border-b border-gray-800">
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="w-full py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium hover:from-purple-500 hover:to-pink-500 transition-all"
        >
          + 카드 추가
        </button>
      </div>

      {/* Add form */}
      {showAddForm && (
        <div className="p-3 border-b border-gray-800 space-y-2 bg-[#0d0d15]">
          <input
            type="text"
            value={newCardId}
            onChange={(e) => setNewCardId(e.target.value)}
            placeholder="ID (영문, 예: charizard-1st)"
            className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-sm text-white placeholder-gray-500 outline-none focus:border-purple-500"
          />
          <input
            type="text"
            value={newCardName}
            onChange={(e) => setNewCardName(e.target.value)}
            placeholder="이름 (예: 1판 리자몽)"
            className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-sm text-white placeholder-gray-500 outline-none focus:border-purple-500"
          />
          <select
            value={newCardGame}
            onChange={(e) => setNewCardGame(e.target.value as GameType)}
            className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-sm text-white outline-none focus:border-purple-500"
          >
            <option value="pokemon">포켓몬 TCG</option>
            <option value="mtg">Magic: The Gathering</option>
            <option value="yugioh">유희왕</option>
          </select>
          <div className="flex gap-2">
            <button
              onClick={handleAdd}
              disabled={!newCardId.trim() || !newCardName.trim()}
              className="flex-1 py-2 rounded-lg bg-purple-600 text-white text-xs font-medium disabled:opacity-40 hover:bg-purple-500 transition-colors"
            >
              추가
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className="flex-1 py-2 rounded-lg bg-gray-700 text-gray-300 text-xs font-medium hover:bg-gray-600 transition-colors"
            >
              취소
            </button>
          </div>
        </div>
      )}

      {/* Card count */}
      <div className="px-3 py-2 text-xs text-gray-500 border-b border-gray-800">
        총 {cards.length}개 카드
      </div>

      {/* Card list */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`flex items-center gap-3 px-3 py-3 cursor-pointer border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors ${
              selectedCardId === card.id ? 'bg-purple-900/20 border-l-2 border-l-purple-500' : ''
            }`}
            onClick={() => setSelectedCard(card.id)}
          >
            {/* Card image thumbnail */}
            <div className="w-10 h-14 rounded bg-gray-800 overflow-hidden shrink-0">
              {card.imageUrl ? (
                <img
                  src={card.imageUrl}
                  alt={card.nameKo}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-600 text-xs">
                  🃏
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-white truncate">
                {card.nameKo}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${getGameBadgeColor(card.game)}`}>
                  {getGameLabel(card.game)}
                </span>
                <span className="text-xs text-gray-500 truncate">
                  {card.year}
                </span>
              </div>
            </div>
            
            {/* Delete button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (deleteConfirm === card.id) {
                  handleDelete(card.id);
                } else {
                  setDeleteConfirm(card.id);
                  setTimeout(() => setDeleteConfirm(null), 3000);
                }
              }}
              className={`text-xs px-2 py-1 rounded shrink-0 transition-colors ${
                deleteConfirm === card.id
                  ? 'bg-red-500 text-white'
                  : 'text-gray-500 hover:text-red-400 hover:bg-red-500/10'
              }`}
            >
              {deleteConfirm === card.id ? '확인?' : '삭제'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
