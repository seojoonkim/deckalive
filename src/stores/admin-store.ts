import { create } from 'zustand';

interface AdminStore {
  selectedCardId: string | null;
  setSelectedCard: (id: string | null) => void;
}

export const useAdminStore = create<AdminStore>((set) => ({
  selectedCardId: null,
  setSelectedCard: (id) => set({ selectedCardId: id }),
}));
