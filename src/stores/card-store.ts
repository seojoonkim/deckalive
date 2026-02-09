import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Card } from '../types/card';
import { cards as initialCards } from '../data/cards';

interface CardStore {
  cards: Card[];
  loadCards: () => void;
  addCard: (card: Omit<Card, 'id'> & { id?: string }) => void;
  updateCard: (id: string, updates: Partial<Card>) => void;
  deleteCard: (id: string) => void;
  resetToDefaults: () => void;
}

export const useCardStore = create<CardStore>()(
  persist(
    (set, get) => ({
      cards: initialCards,
      
      loadCards: () => {
        // Cards are already loaded via persist
      },
      
      addCard: (cardData) => {
        const id = cardData.id || cardData.name.toLowerCase().replace(/\s+/g, '-');
        const newCard: Card = {
          id,
          name: cardData.name,
          nameKo: cardData.nameKo,
          nameJa: cardData.nameJa,
          game: cardData.game,
          year: cardData.year,
          rarity: cardData.rarity,
          highestSale: cardData.highestSale,
          currentPrice: cardData.currentPrice,
          imageUrl: cardData.imageUrl,
          borderStyle: cardData.borderStyle,
          persona: cardData.persona,
          description: cardData.description,
          descriptionEn: cardData.descriptionEn,
          descriptionJa: cardData.descriptionJa,
          history: cardData.history,
        };
        set({ cards: [...get().cards, newCard] });
      },
      
      updateCard: (id, updates) => {
        set({
          cards: get().cards.map((card) =>
            card.id === id ? { ...card, ...updates } : card
          ),
        });
      },
      
      deleteCard: (id) => {
        set({ cards: get().cards.filter((card) => card.id !== id) });
      },
      
      resetToDefaults: () => {
        set({ cards: initialCards });
      },
    }),
    {
      name: 'deckalive-cards',
    }
  )
);
