import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'ko' | 'en' | 'ja';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'ko',
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: 'deckalive-language',
    }
  )
);

// Helper function to get localized text
export function getLocalizedText<T extends Record<Language, string>>(
  obj: T | string | undefined,
  language: Language
): string {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return obj[language] || obj['en'] || obj['ko'] || '';
}

// Helper for card names
export function getCardName(
  card: { name_en?: string; name_ko?: string; name_ja?: string; name?: string },
  language: Language
): string {
  switch (language) {
    case 'en':
      return card.name_en || card.name || '';
    case 'ko':
      return card.name_ko || card.name || '';
    case 'ja':
      return card.name_ja || card.name_en || card.name || '';
    default:
      return card.name_ko || card.name || '';
  }
}
