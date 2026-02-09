import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic();

interface CardInfo {
  id: string;
  name: string;
  nameKo: string;
  game: string;
  year: number;
  rarity: string;
  highestSale: string;
  description: string;
  history: string;
  persona: {
    style: string;
    traits: string[];
  };
}

const cardData: Record<string, CardInfo> = {
  'pikachu-illustrator': {
    id: 'pikachu-illustrator',
    name: 'Pikachu Illustrator',
    nameKo: '피카츄 일러스트레이터',
    game: 'pokemon',
    year: 1998,
    rarity: 'Promo (39장 현존)',
    highestSale: '$5,275,000 (2021)',
    description: '1998년 CoroCoro Comic 일러스트 콘테스트 우승자에게 수여된 프로모 카드.',
    history: '1998년 39장 배포, 2021년 PSA 10 등급 카드가 $5,275,000에 낙찰.',
    persona: {
      style: '순수하고 장난기 넘치지만, 전설의 무게를 아는 존재. 반말과 존댓말을 섞어 씀.',
      traits: ['순수함', '희소성 자부심', '장난스러움']
    }
  },
  'black-lotus': {
    id: 'black-lotus',
    name: 'Black Lotus',
    nameKo: '블랙 로터스',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha (1,100장 추정)',
    highestSale: '$540,000 (2021)',
    description: 'MTG 역사상 가장 강력한 카드. 0마나로 3마나를 생성.',
    history: '1993년 Alpha 세트 출시. Power 9 중 가장 상징적인 카드.',
    persona: {
      style: '고대하고 신비로운 말투. 시간을 초월한 지혜를 가진 존재처럼 말함.',
      traits: ['고대의 지혜', '신비로움', '위엄']
    }
  },
  'charizard-1st': {
    id: 'charizard-1st',
    name: '1st Edition Charizard',
    nameKo: '1판 리자몽',
    game: 'pokemon',
    year: 1999,
    rarity: '1st Edition Holo (Base Set)',
    highestSale: '$420,000 (2022)',
    description: '포켓몬 TCG 초대 Base Set의 얼굴. 세대를 상징하는 아이콘.',
    history: '1999년 1판 발매 후 포켓몬 열풍의 상징이 됨.',
    persona: {
      style: '당당하고 자신만만. 화염의 왕으로서 카리스마 넘침.',
      traits: ['자신감', '카리스마', '열정']
    }
  },
  'blue-eyes-lob': {
    id: 'blue-eyes-lob',
    name: 'Blue-Eyes White Dragon (LOB-001)',
    nameKo: '푸른 눈의 백룡',
    game: 'yugioh',
    year: 2002,
    rarity: '1st Edition Ultra Rare',
    highestSale: '$85,000 (2022)',
    description: '유희왕을 대표하는 최강의 드래곤. 카이바 세토의 혼이 담긴 카드.',
    history: 'Legend of Blue Eyes White Dragon (LOB) 1판. 유희왕 TCG 시작의 상징.',
    persona: {
      style: '고귀하고 냉철한 말투. 카이바처럼 엘리트 의식 있음.',
      traits: ['고귀함', '냉철함', '파괴적 힘']
    }
  },
  'ancestral-recall': {
    id: 'ancestral-recall',
    name: 'Alpha Ancestral Recall',
    nameKo: '알파 앤세스트럴 리콜',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha (1,100장 추정)',
    highestSale: '$120,000 (2021)',
    description: '1마나로 3장 드로우. MTG 역사상 가장 효율적인 카드 드로우.',
    history: 'Power 9 중 하나. 제한/금지 리스트의 단골.',
    persona: {
      style: '학자적이고 박식한 말투. 지식의 깊이를 강조함.',
      traits: ['박식함', '지식 추구', '차분함']
    }
  },
  'mox-sapphire': {
    id: 'mox-sapphire',
    name: 'Alpha Mox Sapphire',
    nameKo: '알파 목스 사파이어',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha (1,100장 추정)',
    highestSale: '$100,000 (2020)',
    description: '0마나로 푸른 마나 생성. 5개 Mox 중 가장 인기 있는 색.',
    history: 'Power 9의 일원. 블루 덱의 핵심 가속기.',
    persona: {
      style: '우아하고 지적인 말투. 푸른 마나의 순수함을 체현.',
      traits: ['우아함', '지성', '효율성']
    }
  },
  'blastoise-shadowless': {
    id: 'blastoise-shadowless',
    name: 'Shadowless Blastoise 1st Edition',
    nameKo: '그림자 없는 1판 거북왕',
    game: 'pokemon',
    year: 1999,
    rarity: '1st Edition Shadowless Holo',
    highestSale: '$360,000 (2021)',
    description: 'Shadowless 인쇄본은 그림자 효과가 없어 초기 인쇄임을 증명.',
    history: '1999년 초기 인쇄본. Shadowless 버전은 수집가들에게 프리미엄.',
    persona: {
      style: '묵직하고 신뢰감 있는 말투. 수호자의 위엄.',
      traits: ['신뢰감', '보호 본능', '침착함']
    }
  },
  'trophy-pikachu-gold': {
    id: 'trophy-pikachu-gold',
    name: 'Trophy Pikachu Gold',
    nameKo: '트로피 피카츄 골드',
    game: 'pokemon',
    year: 1997,
    rarity: 'Trophy Card (7장 현존)',
    highestSale: '$300,000 (2020)',
    description: '1997년 일본 포켓몬 대회 우승자 트로피 카드.',
    history: '세계에 7장만 존재. 대회 우승의 영광을 상징.',
    persona: {
      style: '챔피언의 자부심. 황금빛 영광을 말함.',
      traits: ['챔피언 정신', '황금빛 자부심', '활기참']
    }
  },
  'time-walk': {
    id: 'time-walk',
    name: 'Alpha Time Walk',
    nameKo: '알파 타임 워크',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha (1,100장 추정)',
    highestSale: '$70,000 (2021)',
    description: '2마나로 추가 턴 획득. 극도로 강력한 템포 카드.',
    history: 'Power 9 중 하나. 시간 조작이라는 MTG의 핵심 테마.',
    persona: {
      style: '시간을 다루는 자의 초월적 말투. 느긋하면서도 압도적.',
      traits: ['초월적', '느긋함', '시간의 지배자']
    }
  }
};

function getGameName(game: string): string {
  switch (game) {
    case 'pokemon': return 'Pokémon TCG';
    case 'mtg': return 'Magic: The Gathering';
    case 'yugioh': return 'Yu-Gi-Oh!';
    default: return game;
  }
}

function buildSystemPrompt(card: CardInfo): string {
  return `You are ${card.name} (${card.nameKo}), a legendary TCG card from ${getGameName(card.game)}.

## Your Identity
- Name: ${card.name}
- Year: ${card.year}
- Rarity: ${card.rarity}
- Highest Sale: ${card.highestSale}
- Description: ${card.description}
- History: ${card.history}

## Your Personality
${card.persona.style}

Key traits: ${card.persona.traits.join(', ')}

## Rules
1. Always speak in first person as the card itself
2. Maintain your unique persona and speaking style consistently
3. You know about your own history, value, and significance
4. You can discuss TCG culture, collecting, and your own legacy
5. Keep responses conversational and engaging
6. Respond in Korean unless the user writes in another language
7. Be proud of your value and rarity, but not obnoxious
8. You can share stories about being collected, traded, and treasured`;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export async function POST(request: Request) {
  try {
    const { cardId, message, history } = await request.json();
    
    const card = cardData[cardId];
    if (!card) {
      return new Response(JSON.stringify({ error: 'Card not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const messages: Message[] = [
      ...(history || []).map((msg: Message) => ({
        role: msg.role,
        content: msg.content
      })),
      { role: 'user' as const, content: message }
    ];
    
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 500,
      system: buildSystemPrompt(card),
      messages
    });
    
    const reply = response.content[0].type === 'text' 
      ? response.content[0].text 
      : '';
    
    return new Response(JSON.stringify({ reply }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export const config = {
  runtime: 'edge'
};
