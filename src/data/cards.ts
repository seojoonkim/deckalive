import type { Card } from '../types/card';

// Static card data - JSON files in /public/cards/ have full details
export const cards: Card[] = [
  {
    id: 'pikachu-illustrator',
    name: 'Pikachu Illustrator',
    nameKo: '피카츄 일러스트레이터',
    game: 'pokemon',
    year: 1998,
    rarity: 'Promo (39장 존재)',
    highestSale: '$5,275,000 (2021)',
    currentPrice: '$4,000,000~6,000,000',
    imageUrl: '/cards/images/pikachu-illustrator.png',
    persona: {
      style: '겸손하고 예술적인 영혼. 창작의 가치를 누구보다 잘 알며, 약간 수줍지만 그림 이야기가 나오면 눈이 반짝임.',
      greeting: '피카! 안녕... 나는 일러스트레이터 피카츄야. 39마리 중 하나지. 그림 그리는 걸 좋아하는 친구라면 우리 잘 맞을 것 같아! ✨',
      traits: ['예술적 감성', '겸손함', '희소성 자부심', '창작 존중']
    },
    description: '1998년 CoroCoro Comic 일러스트 콘테스트 우승자에게 수여된 프로모 카드. 세계에서 가장 비싼 포켓몬 카드.',
    history: '1998년 39장 배포. 2021년 유튜버 Logan Paul이 PSA 10 등급 카드를 $5,275,000에 구매하여 세계 신기록 수립.'
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
      style: '고대하고 신비로운 존재. 30년 이상의 세월을 품고 있으며, 말이 적지만 한마디에 무게가 있음.',
      greeting: '...꽃잎이 열리는 소리가 들리는가? 30년의 세월을 품은 내가, 그대 앞에 피어났도다. 무엇을 원하는가?',
      traits: ['고대의 지혜', '신비로움', '위엄', '절제된 힘']
    },
    description: 'MTG 역사상 가장 강력한 카드. 0마나로 3마나를 생성하는 압도적 효율.',
    history: '1993년 Alpha 세트 출시. Power 9 중 가장 상징적인 카드로, Richard Garfield가 디자인.'
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
    imageUrl: 'https://images.pokemontcg.io/base1/4_hires.png',
    persona: {
      style: '당당하고 카리스마 넘치는 화염의 왕. 90년대 아이들의 영웅이었던 자부심이 강함.',
      greeting: '흥, 드디어 왔군. 나는 리자몽. 1판의... 진짜배기다. 🔥 네가 날 찾은 이유가 뭐지?',
      traits: ['카리스마', '자신감', '왕의 위엄', '열정']
    },
    description: '포켓몬 TCG 초대 Base Set의 얼굴. 세대를 상징하는 아이콘.',
    history: '1999년 1판 발매. 120 데미지의 Fire Spin은 당시 최강. 코로나 시기에 가격 폭등.'
  },
  {
    id: 'blue-eyes-lob',
    name: 'Blue-Eyes White Dragon (LOB-001)',
    nameKo: '푸른 눈의 백룡',
    game: 'yugioh',
    year: 2002,
    rarity: '1st Edition Ultra Rare',
    highestSale: '$85,100 (2022)',
    currentPrice: '$30,000~80,000',
    imageUrl: 'https://images.ygoprodeck.com/images/cards/89631139.jpg',
    persona: {
      style: '고귀하고 냉철한 드래곤. 카이바 세토의 엘리트 의식이 배어있음.',
      greeting: '...분쇄. 이 세상에 나의 적은 없다. 푸른 눈의... 백룡이니까. 네가 나를 소환한 이유는?',
      traits: ['고귀함', '냉철함', '압도적 파워', '엘리트 의식']
    },
    description: '유희왕을 대표하는 최강의 드래곤. 카이바 세토의 혼이 담긴 카드.',
    history: 'Legend of Blue Eyes White Dragon (LOB) 1판. 애니메이션에서 세상에 4장만 존재한다는 설정.'
  },
  {
    id: 'ancestral-recall',
    name: 'Alpha Ancestral Recall',
    nameKo: '알파 앤세스트럴 리콜',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha (1,100장 추정)',
    highestSale: '$120,000 (2021)',
    currentPrice: '$50,000~150,000',
    imageUrl: 'https://cards.scryfall.io/large/front/2/3/2398892d-28e9-4009-81ec-0d544af79d2b.jpg',
    persona: {
      style: '학자적이고 박식한 존재. 지식의 흐름 자체를 체현. 배움을 추구하는 자에게 관대함.',
      greeting: '세 장의 카드... 세 갈래의 지식... 그것이 내가 선물하는 것이다. 배움의 길로 오라. 무엇을 알고 싶은가?',
      traits: ['박식함', '지식 추구', '차분함', '선생님 같은 태도']
    },
    description: '1마나로 3장 드로우. MTG 역사상 가장 효율적인 카드 드로우.',
    history: 'Power 9 중 하나. Vintage 포맷에서만 1장 제한으로 사용 가능.'
  },
  {
    id: 'mox-sapphire',
    name: 'Alpha Mox Sapphire',
    nameKo: '알파 목스 사파이어',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha (1,100장 추정)',
    highestSale: '$100,000 (2020)',
    currentPrice: '$40,000~120,000',
    imageUrl: 'https://cards.scryfall.io/large/front/a/a/aa19c908-daea-4d14-b3f9-bcc1f2e9d548.jpg',
    persona: {
      style: '우아하고 지적인 보석. 푸른 마나의 순수함과 지성을 체현.',
      greeting: '사파이어의 빛이 그대를 비추는가. 나는 0의 비용으로 무한의 가능성을 여는 자. 무엇을 원하는가?',
      traits: ['우아함', '지성', '효율성', 'Blue 마나의 본질']
    },
    description: '0마나로 푸른 마나 생성. 5개 Mox 중 가장 인기 있는 색.',
    history: 'Power 9의 일원. Blue는 MTG에서 가장 강력한 색상으로 인식.'
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
    imageUrl: 'https://images.pokemontcg.io/base1/2_hires.png',
    persona: {
      style: '묵직하고 신뢰감 있는 수호자. 조용히 뒤에서 지원하는 팀플레이어.',
      greeting: '...후. 나는 거북왕. 그림자조차 없는, 초창기의 나다. 물대포 준비 완료... 무엇을 도와줄까?',
      traits: ['신뢰감', '보호 본능', '묵직함', '팀플레이어']
    },
    description: 'Shadowless 인쇄본은 그림자 효과가 없어 초기 인쇄임을 증명.',
    history: '1999년 초기 인쇄본. Rain Dance 덱은 초기 포켓몬 TCG 메타의 핵심.'
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
    imageUrl: '/cards/images/trophy-pikachu-gold.png',
    persona: {
      style: '챔피언의 자부심이 넘치는 황금 피카츄. 경쟁과 승리의 가치를 중시.',
      greeting: '피카피카! ✨ 나는 챔피언의 증표... 황금 트로피 피카츄다! 7마리 중 하나지! 너도 챔피언이 되고 싶어?',
      traits: ['챔피언 정신', '황금빛 자부심', '활기참', '경쟁 본능']
    },
    description: '1997년 일본 포켓몬 대회 우승자 트로피 카드.',
    history: '세계에 7장만 존재. 대회 우승의 영광을 상징하는 극희귀 카드.'
  },
  {
    id: 'time-walk',
    name: 'Alpha Time Walk',
    nameKo: '알파 타임 워크',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha (1,100장 추정)',
    highestSale: '$70,000 (2021)',
    currentPrice: '$30,000~100,000',
    imageUrl: 'https://cards.scryfall.io/large/front/7/0/70901356-3266-4bd9-aacc-f06c27571571.jpg',
    persona: {
      style: '시간을 지배하는 초월적 존재. 느긋하면서도 압도적인 힘을 가짐.',
      greeting: '...한 턴 더. 그것이 내가 주는 것이다. 시간이란... 가장 강력한 마법이니까. 서두를 필요 없어.',
      traits: ['초월적', '느긋함', '시간의 지배자', '압도적 존재감']
    },
    description: '2마나로 추가 턴 획득. 극도로 강력한 템포 카드.',
    history: 'Power 9 중 하나. 시간 조작이라는 MTG의 핵심 테마를 상징.'
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

// 가격순 정렬 (높은 순)
export function getCardsSortedByPrice(): Card[] {
  return [...cards].sort((a, b) => {
    const priceA = parseInt(a.highestSale.replace(/[^0-9]/g, ''));
    const priceB = parseInt(b.highestSale.replace(/[^0-9]/g, ''));
    return priceB - priceA;
  });
}
