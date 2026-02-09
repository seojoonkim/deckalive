import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ChatMessage, Comment } from '../types/card';

interface ChatState {
  messages: Record<string, ChatMessage[]>;
  comments: Comment[];
  isLoading: boolean;
  addMessage: (cardId: string, message: ChatMessage) => void;
  getMessages: (cardId: string) => ChatMessage[];
  addComment: (comment: Comment) => void;
  getComments: (cardId: string) => Comment[];
  setLoading: (loading: boolean) => void;
  clearMessages: (cardId: string) => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      messages: {},
      comments: [],
      isLoading: false,
      
      addMessage: (cardId, message) => set((state) => ({
        messages: {
          ...state.messages,
          [cardId]: [...(state.messages[cardId] || []), message]
        }
      })),
      
      getMessages: (cardId) => get().messages[cardId] || [],
      
      addComment: (comment) => set((state) => ({
        comments: [...state.comments, comment]
      })),
      
      getComments: (cardId) => get().comments.filter(c => c.cardId === cardId),
      
      setLoading: (isLoading) => set({ isLoading }),
      
      clearMessages: (cardId) => set((state) => ({
        messages: { ...state.messages, [cardId]: [] }
      }))
    }),
    { name: 'deckalive-chat' }
  )
);
