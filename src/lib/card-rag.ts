/**
 * DeckAlive 카드 RAG 시스템
 * 사용자 메시지에서 키워드를 감지하고 관련 카드 정보를 반환
 */

import * as fs from 'fs';
import * as path from 'path';

export interface KeywordCategory {
  keywords: string[];
  files: string[]; // 참조할 md 파일들
}

// 키워드 → 파일 매핑
const KEYWORD_MAP: Record<string, KeywordCategory> = {
  market: {
    keywords: [
      // 한국어
      '가격', '경매', '투자', '얼마', '비싸', '싸다', '시세', '거래', '매매', 
      '낙찰', '구매', '판매', '희소성', '등급', 'PSA', 'BGS', '그레이딩',
      // 영어
      'price', 'auction', 'invest', 'expensive', 'cheap', 'value', 'worth',
      'buy', 'sell', 'trade', 'grading', 'rare', 'market',
      // 일본어
      '値段', '価格', '投資', 'オークション', '取引'
    ],
    files: ['market.md']
  },
  history: {
    keywords: [
      // 한국어
      '역사', '탄생', '유래', '만들어진', '발매', '출시', '처음', '시작',
      '배경', '스토리', '유명', '기원', '과거', '연혁',
      // 영어
      'history', 'origin', 'created', 'release', 'launch', 'story', 'famous',
      'when', 'first', 'started', 'began',
      // 일본어
      '歴史', '誕生', '由来', '発売'
    ],
    files: ['history.md', 'card-history.md']
  },
  world: {
    keywords: [
      // 한국어
      '세계관', '배경', '포켓몬', 'MTG', '유희왕', '매직', '게임', '규칙',
      '진화', '타입', '세트', '에디션', '시리즈',
      // 영어
      'world', 'universe', 'pokemon', 'magic', 'yugioh', 'game', 'rules',
      'evolution', 'type', 'set', 'edition', 'series', 'kanto', 'alpha',
      // 일본어
      '世界観', 'ポケモン', 'マジック', '遊戯王'
    ],
    files: ['world.md']
  },
  character: {
    keywords: [
      // 한국어
      '캐릭터', '능력', '스펙', '공격력', '체력', 'HP', '스킬', '효과',
      '카드', '아티스트', '일러스트', '디자인', '스탯', '특성',
      // 영어
      'character', 'ability', 'stats', 'attack', 'health', 'power', 'skill',
      'effect', 'card', 'artist', 'illustrator', 'design', 'damage',
      // 일본어
      'キャラクター', '能力', 'ステータス', '攻撃力', 'イラスト'
    ],
    files: ['character.md']
  }
};

/**
 * 텍스트에서 매칭되는 카테고리 찾기
 */
export function findMatchingCategories(text: string): string[] {
  const lowerText = text.toLowerCase();
  const matched: string[] = [];
  
  for (const [category, config] of Object.entries(KEYWORD_MAP)) {
    for (const keyword of config.keywords) {
      if (lowerText.includes(keyword.toLowerCase())) {
        if (!matched.includes(category)) {
          matched.push(category);
        }
        break;
      }
    }
  }
  
  return matched;
}

/**
 * 카테고리에 해당하는 파일 목록 반환
 */
export function getFilesForCategories(categories: string[]): string[] {
  const files = new Set<string>();
  
  for (const category of categories) {
    const config = KEYWORD_MAP[category];
    if (config) {
      config.files.forEach(f => files.add(f));
    }
  }
  
  return Array.from(files);
}

/**
 * 카드의 md 파일 내용 읽기
 */
export function readCardFile(cardId: string, filename: string): string | null {
  const filePath = path.join(process.cwd(), 'dist', 'cards', cardId, filename);
  
  try {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf-8');
    }
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
  }
  
  return null;
}

/**
 * MD 컨텐츠에서 특정 언어 섹션 추출 (## 🇰🇷 한국어 등)
 */
export function extractLanguageSection(content: string, language: string): string {
  const langMarkers: Record<string, string[]> = {
    ko: ['🇰🇷', '한국어', 'Korean'],
    en: ['🇺🇸', 'English'],
    ja: ['🇯🇵', '日本語', 'Japanese']
  };
  
  const markers = langMarkers[language] || langMarkers.ko;
  const lines = content.split('\n');
  let capturing = false;
  let depth = 0;
  const result: string[] = [];
  
  for (const line of lines) {
    // 새 최상위 섹션 시작 (## 로 시작)
    if (line.startsWith('## ')) {
      if (capturing) {
        // 다른 최상위 섹션이 시작되면 캡처 종료
        break;
      }
      // 현재 언어 섹션인지 확인
      if (markers.some(marker => line.includes(marker))) {
        capturing = true;
        depth = 2;
        result.push(line);
        continue;
      }
    }
    
    if (capturing) {
      result.push(line);
    }
  }
  
  // 언어별 섹션이 없으면 전체 반환 (최대 2000자)
  if (result.length === 0) {
    return content.slice(0, 2000);
  }
  
  return result.join('\n');
}

/**
 * 컨텐츠 요약 (너무 길면 자르기)
 */
export function summarizeContent(content: string, maxLength: number = 1500): string {
  if (content.length <= maxLength) {
    return content;
  }
  
  // 문단 단위로 자르기
  const paragraphs = content.split('\n\n');
  let result = '';
  
  for (const para of paragraphs) {
    if (result.length + para.length > maxLength) {
      break;
    }
    result += para + '\n\n';
  }
  
  return result.trim() + '\n\n[... 더 많은 정보가 있습니다]';
}

/**
 * 메인 함수: 사용자 메시지 기반으로 관련 카드 컨텍스트 추출
 */
export function getRelevantCardContext(
  cardId: string,
  userMessage: string,
  language: string = 'ko'
): string {
  // 1. 키워드 매칭
  const categories = findMatchingCategories(userMessage);
  
  if (categories.length === 0) {
    return '';
  }
  
  // 2. 관련 파일 목록
  const files = getFilesForCategories(categories);
  
  // 3. 파일 내용 읽기 및 추출
  const contexts: string[] = [];
  
  for (const filename of files) {
    const content = readCardFile(cardId, filename);
    if (content) {
      const langSection = extractLanguageSection(content, language);
      const summarized = summarizeContent(langSection, 1200);
      
      if (summarized.trim()) {
        const fileLabel = filename.replace('.md', '').toUpperCase();
        contexts.push(`### 📄 ${fileLabel}\n${summarized}`);
      }
    }
  }
  
  if (contexts.length === 0) {
    return '';
  }
  
  // 4. 컨텍스트 포맷팅
  return `

---
## 🔍 이 질문과 관련된 상세 정보 (반드시 참고해서 답변하세요!)

${contexts.join('\n\n')}

---`;
}

/**
 * 모든 md 파일 내용을 한번에 로드 (캐싱용)
 */
export function loadAllCardFiles(cardId: string): Record<string, string> {
  const allFiles = ['market.md', 'history.md', 'card-history.md', 'world.md', 'character.md'];
  const result: Record<string, string> = {};
  
  for (const filename of allFiles) {
    const content = readCardFile(cardId, filename);
    if (content) {
      result[filename] = content;
    }
  }
  
  return result;
}
