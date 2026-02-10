export type GameType = 'pokemon' | 'mtg' | 'yugioh';
export type BorderStyle = 'gold' | 'silver' | 'rainbow' | 'normal';

export interface CardPersona {
  style: string;
  greeting: string;
  greetingEn?: string;
  greetingJa?: string;
  traits: string[];
}

// 카드별 세계관 정보 (다국어 지원)
export interface WorldInfo {
  universe: string;        // 게임 세계관 (한국어)
  universeEn?: string;     // 게임 세계관 (영어)
  universeJa?: string;     // 게임 세계관 (일본어)
  setting: string;         // 배경 설정 (한국어)
  settingEn?: string;      // 배경 설정 (영어)
  settingJa?: string;      // 배경 설정 (일본어)
}

export interface CharacterInfo {
  species?: string;        // 종족/타입 (한국어)
  speciesEn?: string;      // 종족/타입 (영어)
  speciesJa?: string;      // 종족/타입 (일본어)
  abilities?: string[];    // 능력/기술 (한국어)
  abilitiesEn?: string[];  // 능력/기술 (영어)
  abilitiesJa?: string[];  // 능력/기술 (일본어)
  story: string;           // 캐릭터 스토리 (한국어)
  storyEn?: string;        // 캐릭터 스토리 (영어)
  storyJa?: string;        // 캐릭터 스토리 (일본어)
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
  // 세계관 정보 (카드별 커스텀)
  world?: WorldInfo;
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
