/**
 * DeckAlive Keyword RAG System
 * 사용자 메시지에서 키워드 감지 → 관련 카드 정보(MD 파일) 동적 주입
 */

export type KnowledgeCategory = 'market' | 'history' | 'world' | 'character';

export interface KeywordMapping {
  category: KnowledgeCategory;
  keywords: string[];
  file: string;
  description: string;
}

// 키워드 → MD 파일 매핑
const KEYWORD_MAPPINGS: KeywordMapping[] = [
  {
    category: 'market',
    keywords: [
      // 한국어
      '가격', '얼마', '시세', '경매', '투자', '판매', '구매', '비싸', '비싼',
      '달러', '원', '매매', '거래', '옥션', '낙찰', 'PSA', 'BGS', '그레이딩',
      '등급', '팔', '살', '사고', '팔고', '가치',
      // 영어
      'price', 'cost', 'value', 'auction', 'sale', 'buy', 'sell', 'worth',
      'expensive', 'investment', 'market', 'grading', 'grade',
      // 일본어
      '価格', '値段', 'オークション', '投資', '販売', '購入'
    ],
    file: 'market.md',
    description: '시장/가격/투자 정보'
  },
  {
    category: 'history',
    keywords: [
      // 한국어
      '역사', '탄생', '유래', '기원', '만들', '만든', '언제', '처음', '시작',
      '출시', '발매', '콘테스트', '대회', '우승', '수여',
      // 영어
      'history', 'origin', 'created', 'made', 'when', 'first', 'start', 'born',
      'release', 'contest', 'tournament', 'award', 'winner',
      // 일본어
      '歴史', '誕生', '由来', '起源', 'コンテスト', '大会'
    ],
    file: 'history.md',
    description: '역사/탄생/유래 정보'
  },
  {
    category: 'world',
    keywords: [
      // 한국어
      '세계관', '배경', '세계', '어디', '포켓몬', 'mtg', '매직', '유희왕',
      '게임', '설정', '스토리', '이야기',
      // 영어
      'world', 'universe', 'background', 'lore', 'story', 'setting',
      'pokemon', 'magic', 'yugioh', 'game',
      // 일본어
      '世界観', '背景', 'ポケモン', 'マジック', '遊戯王'
    ],
    file: 'world.md',
    description: '세계관/배경 정보'
  },
  {
    category: 'character',
    keywords: [
      // 한국어
      '캐릭터', '능력', '스펙', '스탯', 'HP', '공격', '데미지', '효과',
      '타입', '속성', '어떤', '무슨', '뭐', '아티스트', '작가',
      // 영어
      'character', 'ability', 'power', 'stats', 'effect', 'damage', 'attack',
      'type', 'attribute', 'what', 'artist', 'illustrator',
      // 일본어
      'キャラクター', '能力', 'スペック', '効果', 'タイプ', 'アーティスト'
    ],
    file: 'character.md',
    description: '캐릭터/능력/스펙 정보'
  }
];

/**
 * 메시지에서 매칭되는 카테고리 찾기
 */
export function detectCategories(message: string): KnowledgeCategory[] {
  const lowerMessage = message.toLowerCase();
  const matched = new Set<KnowledgeCategory>();
  
  for (const mapping of KEYWORD_MAPPINGS) {
    for (const keyword of mapping.keywords) {
      if (lowerMessage.includes(keyword.toLowerCase())) {
        matched.add(mapping.category);
        break;
      }
    }
  }
  
  return Array.from(matched);
}

/**
 * 카테고리에 해당하는 파일명 반환
 */
export function getCategoryFile(category: KnowledgeCategory): string {
  const mapping = KEYWORD_MAPPINGS.find(m => m.category === category);
  return mapping?.file ?? '';
}

/**
 * MD 콘텐츠에서 현재 언어에 맞는 섹션 추출
 */
export function extractLanguageSection(
  mdContent: string,
  language: 'ko' | 'en' | 'ja'
): string {
  const lines = mdContent.split('\n');
  const languageHeaders: Record<string, string[]> = {
    ko: ['🇰🇷', '한국어', 'Korean'],
    en: ['🇺🇸', 'English', '영어'],
    ja: ['🇯🇵', '日本語', 'Japanese', '일본어']
  };
  
  const targetHeaders = languageHeaders[language] ?? [''];
  let capturing = false;
  const result: string[] = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i] ?? '';
    
    // ## 레벨 헤더 감지
    if (line.startsWith('## ')) {
      // 현재 캡처 중이면 종료
      if (capturing) {
        break;
      }
      
      // 타겟 언어 헤더인지 확인
      const isTarget = targetHeaders.some(h => 
        line.toLowerCase().includes(h.toLowerCase())
      );
      
      if (isTarget) {
        capturing = true;
        continue; // 헤더 자체는 스킵
      }
    }
    
    if (capturing) {
      result.push(line);
    }
  }
  
  // 결과가 없으면 전체 반환 (언어 구분 없는 경우)
  if (result.length === 0) {
    return mdContent;
  }
  
  return result.join('\n').trim();
}

/**
 * 카드별 Knowledge 파일 로드
 */
export async function loadCardKnowledge(
  cardId: string,
  categories: KnowledgeCategory[]
): Promise<Record<string, string>> {
  const knowledge: Record<string, string> = {};
  
  for (const category of categories) {
    const filename = getCategoryFile(category);
    if (!filename) continue;
    
    try {
      const response = await fetch(`/cards/${cardId}/${filename}`);
      if (response.ok) {
        const content = await response.text();
        knowledge[category] = content;
      }
    } catch (error) {
      console.warn(`Failed to load ${cardId}/${filename}:`, error);
    }
  }
  
  return knowledge;
}

/**
 * RAG 컨텍스트 생성 - 메인 함수
 */
export async function getRAGContext(
  cardId: string,
  userMessage: string,
  language: 'ko' | 'en' | 'ja'
): Promise<string> {
  // 1. 키워드에서 카테고리 감지
  const categories = detectCategories(userMessage);
  
  if (categories.length === 0) {
    return '';
  }
  
  // 2. 해당 카테고리의 MD 파일 로드
  const knowledge = await loadCardKnowledge(cardId, categories);
  
  if (Object.keys(knowledge).length === 0) {
    return '';
  }
  
  // 3. 언어별 섹션 추출 및 컨텍스트 구성
  const sections: string[] = [];
  
  for (const [category, content] of Object.entries(knowledge)) {
    const extracted = extractLanguageSection(content, language);
    if (extracted.trim()) {
      const mapping = KEYWORD_MAPPINGS.find(m => m.category === category);
      sections.push(`### ${mapping?.description ?? category}\n${extracted}`);
    }
  }
  
  if (sections.length === 0) {
    return '';
  }
  
  // 4. 최종 컨텍스트 반환
  const contextLabel = {
    ko: '🔍 이 대화와 관련된 카드 정보 (반드시 참고해서 답변하세요!)',
    en: '🔍 Related card information (Use this to answer!)',
    ja: '🔍 この会話に関連するカード情報（必ず参考にして回答してください！）'
  };
  
  return `\n\n---\n## ${contextLabel[language]}\n\n${sections.join('\n\n')}`;
}

/**
 * 디버그용: 감지된 키워드와 카테고리 표시
 */
export function debugKeywordDetection(message: string): {
  categories: KnowledgeCategory[];
  files: string[];
} {
  const categories = detectCategories(message);
  const files = categories.map(getCategoryFile);
  return { categories, files };
}
