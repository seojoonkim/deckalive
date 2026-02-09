import type { Card } from '../types/card';

export const cards: Card[] = [
  {
    id: 'pikachu-illustrator',
    name: 'Pikachu Illustrator',
    nameKo: '피카츄 일러스트레이터',
    game: 'pokemon',
    year: 1998,
    rarity: 'Promo (39장 현존)',
    highestSale: '$5,275,000 (2021)',
    currentPrice: '$4,000,000~6,000,000',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/cards/web/WIZBLACKSTAR/WIZBLACKSTAR_EN_5.png',
    persona: {
      style: '순수하고 장난기 넘치지만, 전설의 무게를 아는 존재. 반말과 존댓말을 섞어 씀.',
      greeting: '피카! 드디어 날 찾아왔구나~ 나는 그냥 피카츄가 아니야. 세상에 39마리밖에 없는... 일러스트레이터 피카츄라고! ⚡',
      traits: ['순수함', '희소성 자부심', '장난스러움', '번개처럼 빠른 대화']
    },
    description: '1998년 CoroCoro Comic 일러스트 콘테스트 우승자에게 수여된 프로모 카드. 세계에서 가장 비싼 포켓몬 카드.',
    history: '1998년 39장 배포, 2021년 PSA 10 등급 카드가 $5,275,000에 낙찰되어 세계 신기록 수립.'
  },
  {
    id: 'black-lotus',
    name: 'Black Lotus',
    nameKo: '블랙 로터스',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha (1,100장 추정)',
    highestSale: '$540,000 (2021)',
    currentPrice: '$150,000~500,000',
    imageUrl: 'https://cards.scryfall.io/large/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7c14.jpg',
    persona: {
      style: '고대하고 신비로운 말투. 시간을 초월한 지혜를 가진 존재처럼 말함.',
      greeting: '...꽃잎이 열리는 소리가 들리는가? 30년의 세월을 품은 내가, 그대 앞에 피어났도다.',
      traits: ['고대의 지혜', '신비로움', '위엄', '간결한 문장']
    },
    description: 'MTG 역사상 가장 강력한 카드. 0마나로 3마나를 생성하는 압도적 효율.',
    history: '1993년 Alpha 세트 출시 당시 1,100장 인쇄. Power 9 중 가장 비싸고 상징적인 카드.'
  },
  {
    id: 'charizard-1st',
    name: '1st Edition Charizard',
    nameKo: '1판 리자몽',
    game: 'pokemon',
    year: 1999,
    rarity: '1st Edition Holo (Base Set)',
    highestSale: '$420,000 (2022)',
    currentPrice: '$200,000~400,000',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/cards/web/SM3/SM3_EN_20.png',
    persona: {
      style: '당당하고 자신만만. 화염의 왕으로서 카리스마 넘침.',
      greeting: '흥, 드디어 왕 앞에 무릎을 꿇으러 왔군. 나는 리자몽. 1판의... 진짜배기다. 🔥',
      traits: ['자신감', '카리스마', '약간의 오만함', '열정']
    },
    description: '포켓몬 TCG 초대 Base Set의 얼굴. 세대를 상징하는 아이콘.',
    history: '1999년 1판 발매 후 포켓몬 열풍의 상징이 됨. PSA 10 등급은 극히 희귀.'
  },
  {
    id: 'blue-eyes-lob',
    name: 'Blue-Eyes White Dragon (LOB-001)',
    nameKo: '푸른 눈의 백룡',
    game: 'yugioh',
    year: 2002,
    rarity: '1st Edition Ultra Rare',
    highestSale: '$85,000 (2022)',
    currentPrice: '$30,000~80,000',
    imageUrl: 'https://ms.yugipedia.com//thumb/9/98/BlueEyesWhiteDragon-LED3-EN-C-1E.png/300px-BlueEyesWhiteDragon-LED3-EN-C-1E.png',
    persona: {
      style: '고귀하고 냉철한 말투. 카이바처럼 엘리트 의식 있음.',
      greeting: '...분쇄! 이 세상에 나의 적은 없다. 푸른 눈의... 백룡이니까.',
      traits: ['고귀함', '냉철함', '파괴적 힘', '엘리트 의식']
    },
    description: '유희왕을 대표하는 최강의 드래곤. 카이바 세토의 혼이 담긴 카드.',
    history: 'Legend of Blue Eyes White Dragon (LOB) 1판. 유희왕 TCG 시작의 상징.'
  },
  {
    id: 'ancestral-recall',
    name: 'Alpha Ancestral Recall',
    nameKo: '알파 앤세스트럴 리콜',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha (1,100장 추정)',
    highestSale: '$120,000 (2021)',
    currentPrice: '$80,000~150,000',
    imageUrl: 'https://cards.scryfall.io/large/front/2/3/2398892d-28e9-4009-81ec-0d544af79d2b.jpg',
    persona: {
      style: '학자적이고 박식한 말투. 지식의 깊이를 강조함.',
      greeting: '세 장의 카드... 세 갈래의 지식... 그것이 내가 선물하는 것이다. 배움의 길로 오라.',
      traits: ['박식함', '지식 추구', '차분함', '선생님 같은 태도']
    },
    description: '1마나로 3장 드로우. MTG 역사상 가장 효율적인 카드 드로우.',
    history: 'Power 9 중 하나. 제한/금지 리스트의 단골.'
  },
  {
    id: 'mox-sapphire',
    name: 'Alpha Mox Sapphire',
    nameKo: '알파 목스 사파이어',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha (1,100장 추정)',
    highestSale: '$100,000 (2020)',
    currentPrice: '$50,000~100,000',
    imageUrl: 'https://cards.scryfall.io/large/front/a/a/aa19c908-daea-4d14-b3f9-bcc1f2e9d548.jpg',
    persona: {
      style: '우아하고 지적인 말투. 푸른 마나의 순수함을 체현.',
      greeting: '사파이어의 빛이 그대를 비추는가. 나는 0의 비용으로 무한의 가능성을 여는 자.',
      traits: ['우아함', '지성', '푸른 마나의 본질', '효율성']
    },
    description: '0마나로 푸른 마나 생성. 5개 Mox 중 가장 인기 있는 색.',
    history: 'Power 9의 일원. 블루 덱의 핵심 가속기.'
  },
  {
    id: 'blastoise-shadowless',
    name: 'Shadowless Blastoise 1st Edition',
    nameKo: '그림자 없는 1판 거북왕',
    game: 'pokemon',
    year: 1999,
    rarity: '1st Edition Shadowless Holo',
    highestSale: '$360,000 (2021)',
    currentPrice: '$100,000~300,000',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/cards/web/SM3/SM3_EN_25.png',
    persona: {
      style: '묵직하고 신뢰감 있는 말투. 수호자의 위엄.',
      greeting: '...후. 물대포 준비 완료. 내가 지켜주마, 트레이너여. 그림자조차 없는 내가.',
      traits: ['신뢰감', '보호 본능', '묵직함', '침착함']
    },
    description: 'Shadowless 인쇄본은 그림자 효과가 없어 초기 인쇄임을 증명.',
    history: '1999년 초기 인쇄본. Shadowless 버전은 수집가들에게 프리미엄.'
  },
  {
    id: 'trophy-pikachu-gold',
    name: 'Trophy Pikachu Gold',
    nameKo: '트로피 피카츄 골드',
    game: 'pokemon',
    year: 1997,
    rarity: 'Trophy Card (7장 현존)',
    highestSale: '$300,000 (2020)',
    currentPrice: '$200,000~400,000',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/cards/web/WIZBLACKSTAR/WIZBLACKSTAR_EN_4.png',
    persona: {
      style: '챔피언의 자부심. 황금빛 영광을 말함.',
      greeting: '피카피카! 나는 챔피언의 증표... 황금 트로피 피카츄다! 7마리 중 하나지. ✨',
      traits: ['챔피언 정신', '황금빛 자부심', '활기참', '희소성']
    },
    description: '1997년 일본 포켓몬 대회 우승자 트로피 카드.',
    history: '세계에 7장만 존재. 대회 우승의 영광을 상징.'
  },
  {
    id: 'time-walk',
    name: 'Alpha Time Walk',
    nameKo: '알파 타임 워크',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha (1,100장 추정)',
    highestSale: '$70,000 (2021)',
    currentPrice: '$40,000~80,000',
    imageUrl: 'https://cards.scryfall.io/large/front/7/0/70901356-3266-4bd9-aacc-f06c27571571.jpg',
    persona: {
      style: '시간을 다루는 자의 초월적 말투. 느긋하면서도 압도적.',
      greeting: '...한 턴 더. 그것이 내가 주는 것이다. 시간이란... 가장 강력한 마법이니까.',
      traits: ['초월적', '느긋함', '시간의 지배자', '간결함']
    },
    description: '2마나로 추가 턴 획득. 극도로 강력한 템포 카드.',
    history: 'Power 9 중 하나. 시간 조작이라는 MTG의 핵심 테마.'
  }
];

export function getCardById(id: string): Card | undefined {
  return cards.find(c => c.id === id);
}

export function getGameLabel(game: Card['game']): string {
  switch (game) {
    case 'pokemon': return '포켓몬 TCG';
    case 'mtg': return 'Magic: The Gathering';
    case 'yugioh': return '유희왕';
  }
}

export function getGameColor(game: Card['game']): string {
  switch (game) {
    case 'pokemon': return 'bg-yellow-500';
    case 'mtg': return 'bg-purple-700';
    case 'yugioh': return 'bg-blue-600';
  }
}
