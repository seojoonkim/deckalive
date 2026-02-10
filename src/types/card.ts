export type GameType = 'pokemon' | 'mtg' | 'yugioh';
export type BorderStyle = 'gold' | 'silver' | 'rainbow' | 'normal';

export interface CardPersona {
  style: string;
  greeting: string;
  greetingEn?: string;
  greetingJa?: string;
  traits: string[];
}

// WorldContext는 이제 worlds.ts의 GameWorld로 게임별 공용 사용
// 개별 카드는 character 정보만 가짐

export interface CharacterInfo {
  species?: string;        // 종족/타입
  abilities?: string[];    // 능력/기술
  story: string;           // 캐릭터 스토리
  storyEn?: string;
  storyJa?: string;
  relationships?: string[]; // 관계 (라이벌, 트레이너 등)
  trivia?: string[];       // 재미있는 사실
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
  // 캐릭터 정보 (세계관은 game 필드로 worlds.ts에서 참조)
  character?: CharacterInfo;
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
