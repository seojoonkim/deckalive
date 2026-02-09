export type GameType = 'pokemon' | 'mtg' | 'yugioh';
export type BorderStyle = 'gold' | 'silver' | 'rainbow' | 'normal';

export interface CardPersona {
  style: string;
  greeting: string;
  greetingEn?: string;
  greetingJa?: string;
  traits: string[];
}

export interface Card {
  id: string;
  name: string;
  nameKo: string;
  nameJa?: string;
  game: GameType;
  year: number;
  rarity: string;
  highestSale: string;
  currentPrice: string;
  imageUrl: string;
  borderStyle?: BorderStyle;
  persona: CardPersona;
  description: string;
  descriptionEn?: string;
  descriptionJa?: string;
  history: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export type Language = 'ko' | 'en' | 'ja';

export interface Comment {
  id: string;
  cardId: string;
  author: string;
  content: string;
  timestamp: number;
}
