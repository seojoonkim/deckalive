export interface Card {
  id: string;
  name: string;
  nameKo: string;
  game: 'pokemon' | 'mtg' | 'yugioh';
  year: number;
  rarity: string;
  highestSale: string;
  currentPrice: string;
  imageUrl: string;
  persona: {
    style: string;
    greeting: string;
    traits: string[];
  };
  description: string;
  history: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface Comment {
  id: string;
  cardId: string;
  author: string;
  content: string;
  timestamp: number;
}
