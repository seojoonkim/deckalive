import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Language } from '../types/card';

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

// i18n translations
export const translations = {
  ko: {
    title: 'DeckAlive',
    subtitle: '카드가 직접 말하는 TCG 채팅 플랫폼',
    footer: '세계에서 가장 비싼 TCG 카드 12장과 직접 대화하세요',
    tabs: {
      chat: '채팅',
      info: '정보',
      comments: '댓글',
    },
    info: {
      game: '게임',
      year: '발매년도',
      rarity: '희귀도',
      highestSale: '최고 판매가',
      currentPrice: '현재 시세',
      basicInfo: '📋 기본 정보',
      description: '📖 설명',
      history: '📜 역사',
      persona: '🎭 페르소나',
    },
    chat: {
      placeholder: '{name}에게 말 걸기...',
      send: '전송',
      cardNotFound: '카드를 찾을 수 없습니다',
      backHome: '← 홈으로 돌아가기',
    },
    comments: {
      title: '💭 방명록',
      empty: '아직 댓글이 없습니다',
      placeholder: '댓글을 남겨주세요...',
      submit: '등록',
    },
  },
  en: {
    title: 'DeckAlive',
    subtitle: 'Chat with TCG Cards that Talk',
    footer: 'Have a conversation with the 12 most expensive TCG cards in the world',
    tabs: {
      chat: 'Chat',
      info: 'Info',
      comments: 'Comments',
    },
    info: {
      game: 'Game',
      year: 'Year',
      rarity: 'Rarity',
      highestSale: 'Highest Sale',
      currentPrice: 'Current Price',
      basicInfo: '📋 Basic Info',
      description: '📖 Description',
      history: '📜 History',
      persona: '🎭 Persona',
    },
    chat: {
      placeholder: 'Say something to {name}...',
      send: 'Send',
      cardNotFound: 'Card not found',
      backHome: '← Back to Home',
    },
    comments: {
      title: '💭 Guest Book',
      empty: 'No comments yet',
      placeholder: 'Leave a comment...',
      submit: 'Submit',
    },
  },
  ja: {
    title: 'DeckAlive',
    subtitle: 'カードが語りかけるTCGチャットプラットフォーム',
    footer: '世界で最も高価なTCGカード12枚と直接会話しよう',
    tabs: {
      chat: 'チャット',
      info: '情報',
      comments: 'コメント',
    },
    info: {
      game: 'ゲーム',
      year: '発売年',
      rarity: 'レアリティ',
      highestSale: '最高販売価格',
      currentPrice: '現在の相場',
      basicInfo: '📋 基本情報',
      description: '📖 説明',
      history: '📜 歴史',
      persona: '🎭 ペルソナ',
    },
    chat: {
      placeholder: '{name}に話しかける...',
      send: '送信',
      cardNotFound: 'カードが見つかりません',
      backHome: '← ホームに戻る',
    },
    comments: {
      title: '💭 ゲストブック',
      empty: 'まだコメントがありません',
      placeholder: 'コメントを残してください...',
      submit: '投稿',
    },
  },
};

export function useTranslation() {
  const { language } = useLanguageStore();
  return {
    t: translations[language],
    language,
  };
}
