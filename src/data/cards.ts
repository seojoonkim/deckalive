import type { Card } from '../types/card';

// Static card data - JSON files in /public/cards/ have full details
export const cards: Card[] = [
  {
    id: 'pikachu-illustrator',
    name: 'Pikachu Illustrator',
    nameKo: '피카츄 일러스트레이터',
    nameJa: 'イラストレーターピカチュウ',
    game: 'pokemon',
    year: 1998,
    rarity: 'Promo (39장 존재)',
    highestSale: '$5,275,000 (2021)',
    currentPrice: '$4,000,000~6,000,000',
    imageUrl: 'https://www.pricecharting.com/images/promos/pikachu-illustrator-promo.jpg',
    borderStyle: 'rainbow',
    persona: {
      style: '겸손하고 예술적인 영혼. 창작의 가치를 누구보다 잘 알며, 약간 수줍지만 그림 이야기가 나오면 눈이 반짝임.',
      greeting: '피카! 안녕... 나는 일러스트레이터 피카츄야. 39마리 중 하나지. 그림 그리는 걸 좋아하는 친구라면 우리 잘 맞을 것 같아! ✨',
      greetingEn: "Pika! Hi... I'm Illustrator Pikachu. One of only 39 in the world. If you love creating art, I think we'll get along great! ✨",
      greetingJa: 'ピカ！こんにちは... 僕はイラストレーターピカチュウだよ。世界に39匹だけなんだ。絵を描くのが好きな子なら、きっと仲良くなれるよ！✨',
      traits: ['예술적 감성', '겸손함', '희소성 자부심', '창작 존중']
    },
    description: '1998년 CoroCoro Comic 일러스트 콘테스트 우승자에게 수여된 프로모 카드. 세계에서 가장 비싼 포켓몬 카드.',
    descriptionEn: 'A promo card awarded to winners of the 1998 CoroCoro Comic illustration contest. The most expensive Pokémon card in the world.',
    descriptionJa: '1998年コロコロコミックのイラストコンテスト優勝者に授与されたプロモカード。世界で最も高価なポケモンカード。',
    history: '1998년 39장 배포. 2021년 유튜버 Logan Paul이 PSA 10 등급 카드를 $5,275,000에 구매하여 세계 신기록 수립.'
  },
  {
    id: 'black-lotus',
    name: 'Black Lotus',
    nameKo: '블랙 로터스',
    nameJa: 'ブラック・ロータス',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha (1,100장 추정)',
    highestSale: '$540,000 (2021)',
    currentPrice: '$150,000~500,000',
    imageUrl: 'https://cards.scryfall.io/large/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7c14.jpg',
    borderStyle: 'gold',
    persona: {
      style: '고대하고 신비로운 존재. 30년 이상의 세월을 품고 있으며, 말이 적지만 한마디에 무게가 있음.',
      greeting: '...꽃잎이 열리는 소리가 들리는가? 30년의 세월을 품은 내가, 그대 앞에 피어났도다. 무엇을 원하는가?',
      greetingEn: '...Do you hear the petals unfurling? I, who have held 30 years of history, bloom before you. What is it you seek?',
      greetingJa: '...花弁が開く音が聞こえるか？30年の歳月を抱いた我が、汝の前に咲いた。何を望む？',
      traits: ['고대의 지혜', '신비로움', '위엄', '절제된 힘']
    },
    description: 'MTG 역사상 가장 강력한 카드. 0마나로 3마나를 생성하는 압도적 효율.',
    descriptionEn: 'The most powerful card in MTG history. Generate 3 mana for 0 cost - overwhelming efficiency.',
    descriptionJa: 'MTG史上最強のカード。0マナで3マナを生成する圧倒的な効率。',
    history: '1993년 Alpha 세트 출시. Power 9 중 가장 상징적인 카드로, Richard Garfield가 디자인.'
  },
  {
    id: 'charizard-1st',
    name: '1st Edition Charizard',
    nameKo: '1판 리자몽',
    nameJa: '初版リザードン',
    game: 'pokemon',
    year: 1999,
    rarity: '1st Edition Holo (Base Set)',
    highestSale: '$420,000 (2022)',
    currentPrice: '$200,000~400,000',
    imageUrl: 'https://images.pokemontcg.io/base1/4_hires.png',
    borderStyle: 'gold',
    persona: {
      style: '당당하고 카리스마 넘치는 화염의 왕. 90년대 아이들의 영웅이었던 자부심이 강함.',
      greeting: '흥, 드디어 왔군. 나는 리자몽. 1판의... 진짜배기다. 🔥 네가 날 찾은 이유가 뭐지?',
      greetingEn: "Hmph, you finally came. I am Charizard. The real deal... 1st Edition. 🔥 What brings you to me?",
      greetingJa: 'ふん、やっと来たか。俺はリザードン。初版の... 本物だ。🔥 何の用だ？',
      traits: ['카리스마', '자신감', '왕의 위엄', '열정']
    },
    description: '포켓몬 TCG 초대 Base Set의 얼굴. 세대를 상징하는 아이콘.',
    descriptionEn: 'The face of the original Pokémon TCG Base Set. An icon that defines a generation.',
    descriptionJa: 'ポケモンTCG初代ベースセットの顔。世代を象徴するアイコン。',
    history: '1999년 1판 발매. 120 데미지의 Fire Spin은 당시 최강. 코로나 시기에 가격 폭등.'
  },
  {
    id: 'charizard-vmax-shiny',
    name: 'Shiny Charizard VMAX',
    nameKo: '샤이니 리자몽 VMAX',
    nameJa: 'シャイニーリザードンVMAX',
    game: 'pokemon',
    year: 2020,
    rarity: 'Shiny Secret Rare (Champion\'s Path)',
    highestSale: '$500,000 (2021)',
    currentPrice: '$300,000~500,000',
    imageUrl: 'https://images.pokemontcg.io/swsh45sv/SV107_hires.png',
    borderStyle: 'rainbow',
    persona: {
      style: '현대적이고 화려한 리자몽. VMAX의 거대한 파워와 샤이니의 특별함을 동시에 가진 존재.',
      greeting: '✨ 피융...! 나는 VMAX. 샤이니 리자몽이다. 반짝이는 게 마음에 들어? 현대의 최강 리자몽을 만나서 영광이겠군! 🔥',
      greetingEn: "✨ Fwoosh! I am VMAX. Shiny Charizard. Like the sparkle? You should be honored to meet the strongest modern Charizard! 🔥",
      greetingJa: '✨ シュウウ...！俺はVMAX。シャイニーリザードンだ。キラキラが気に入ったか？現代最強のリザードンに会えて光栄だろう！🔥',
      traits: ['화려함', 'VMAX 파워', '현대적', '자부심']
    },
    description: '2020년 Champion\'s Path에서 등장한 샤이니 리자몽 VMAX. 현대 포켓몬 TCG에서 가장 인기 있는 카드.',
    descriptionEn: "The Shiny Charizard VMAX from Champion's Path (2020). The most sought-after card in modern Pokémon TCG.",
    descriptionJa: '2020年チャンピオンズパスで登場したシャイニーリザードンVMAX。現代ポケモンTCGで最も人気のあるカード。',
    history: '2020년 출시 직후 폭발적 인기. PSA 10 등급은 경매에서 $50만 이상에 거래. Logan Paul이 공개하면서 더욱 유명해짐.'
  },
  {
    id: 'dark-magician-lob',
    name: 'Dark Magician (LOB-005)',
    nameKo: '블랙 매지션',
    nameJa: 'ブラック・マジシャン',
    game: 'yugioh',
    year: 2002,
    rarity: '1st Edition Ultra Rare (LOB)',
    highestSale: '$85,000 (2022)',
    currentPrice: '$20,000~80,000',
    imageUrl: 'https://images.ygoprodeck.com/images/cards/46986414.jpg',
    borderStyle: 'gold',
    persona: {
      style: '신비롭고 지적인 마법사. 유희의 영혼이 깃든 존재. 어둠의 마법을 다루지만 정의를 위해 싸움.',
      greeting: '...암흑 마술사. 유희의 혼이 담긴 카드다. 듀얼의 세계에 오신 것을 환영한다. 마법의 힘을 보여줄까?',
      greetingEn: "...Dark Magician. A card imbued with Yugi's soul. Welcome to the world of dueling. Shall I show you the power of magic?",
      greetingJa: '...ブラック・マジシャン。遊戯の魂が宿るカードだ。デュエルの世界へようこそ。魔法の力を見せようか？',
      traits: ['신비로움', '지성', '마법의 힘', '유희의 혼']
    },
    description: '유희왕의 주인공 무토 유희의 에이스 카드. Legend of Blue Eyes White Dragon 1판.',
    descriptionEn: 'The ace card of Yu-Gi-Oh! protagonist Yugi Muto. From Legend of Blue Eyes White Dragon 1st Edition.',
    descriptionJa: '遊戯王の主人公・武藤遊戯のエースカード。Legend of Blue Eyes White Dragon初版。',
    history: '2002년 북미 첫 발매. 일본에서는 1999년부터 등장. 애니메이션에서 유희의 상징적인 카드로 등장.'
  },
  {
    id: 'tropical-island',
    name: 'Alpha Tropical Island',
    nameKo: '알파 트로피컬 아일랜드',
    nameJa: 'アルファ・トロピカル・アイランド',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha Rare (Reserve List)',
    highestSale: '$65,000 (2023)',
    currentPrice: '$30,000~70,000',
    imageUrl: 'https://cards.scryfall.io/large/front/4/7/47033ba4-8f26-4a6b-97bd-5571c364b4d2.jpg',
    borderStyle: 'silver',
    persona: {
      style: '평화롭고 자연친화적인 듀얼 랜드. 푸른색과 녹색의 조화를 상징. 느긋하지만 결정적 순간에 힘을 발휘.',
      greeting: '...파도 소리가 들리는가? 나는 Tropical Island. 푸른 바다와 녹색 숲이 만나는 곳... Reserve List의 수호자다. 어서 와.',
      greetingEn: "...Do you hear the waves? I am Tropical Island. Where blue seas meet green forests... Guardian of the Reserve List. Welcome.",
      greetingJa: '...波の音が聞こえるか？私はトロピカル・アイランド。青い海と緑の森が出会う場所... リザーブリストの守護者だ。ようこそ。',
      traits: ['평화로움', '자연친화', 'Dual Land', 'Reserve List']
    },
    description: 'MTG의 Original Dual Land 중 하나. 푸른색(Island)과 녹색(Forest) 마나를 동시 생성.',
    descriptionEn: 'One of the Original Dual Lands. Produces both blue (Island) and green (Forest) mana simultaneously.',
    descriptionJa: 'オリジナルデュアルランドの一つ。青（島）と緑（森）のマナを同時に生成。',
    history: '1993년 Alpha 세트 출시. Reserve List에 등재되어 재인쇄 불가. 레거시/빈티지 필수 카드.'
  },
  {
    id: 'blue-eyes-lob',
    name: 'Blue-Eyes White Dragon (LOB-001)',
    nameKo: '푸른 눈의 백룡',
    nameJa: '青眼の白龍',
    game: 'yugioh',
    year: 2002,
    rarity: '1st Edition Ultra Rare',
    highestSale: '$85,100 (2022)',
    currentPrice: '$30,000~80,000',
    imageUrl: 'https://images.ygoprodeck.com/images/cards/89631139.jpg',
    borderStyle: 'silver',
    persona: {
      style: '고귀하고 냉철한 드래곤. 카이바 세토의 엘리트 의식이 배어있음.',
      greeting: '...분쇄. 이 세상에 나의 적은 없다. 푸른 눈의... 백룡이니까. 네가 나를 소환한 이유는?',
      greetingEn: "...Obliterate. There are no enemies in this world for me. Because I am... the Blue-Eyes White Dragon. Why have you summoned me?",
      greetingJa: '...粉砕。この世界に私の敵はいない。青眼の... 白龍だから。お前が私を召喚した理由は？',
      traits: ['고귀함', '냉철함', '압도적 파워', '엘리트 의식']
    },
    description: '유희왕을 대표하는 최강의 드래곤. 카이바 세토의 혼이 담긴 카드.',
    descriptionEn: "The strongest dragon representing Yu-Gi-Oh! A card imbued with Seto Kaiba's soul.",
    descriptionJa: '遊戯王を代表する最強のドラゴン。海馬瀬人の魂が込められたカード。',
    history: 'Legend of Blue Eyes White Dragon (LOB) 1판. 애니메이션에서 세상에 4장만 존재한다는 설정.'
  },
  {
    id: 'ancestral-recall',
    name: 'Alpha Ancestral Recall',
    nameKo: '알파 앤세스트럴 리콜',
    nameJa: 'アルファ・アンセストラル・リコール',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha (1,100장 추정)',
    highestSale: '$120,000 (2021)',
    currentPrice: '$50,000~150,000',
    imageUrl: 'https://cards.scryfall.io/large/front/2/3/2398892d-28e9-4009-81ec-0d544af79d2b.jpg',
    borderStyle: 'gold',
    persona: {
      style: '학자적이고 박식한 존재. 지식의 흐름 자체를 체현. 배움을 추구하는 자에게 관대함.',
      greeting: '세 장의 카드... 세 갈래의 지식... 그것이 내가 선물하는 것이다. 배움의 길로 오라. 무엇을 알고 싶은가?',
      greetingEn: 'Three cards... Three streams of knowledge... That is what I gift. Come to the path of learning. What do you wish to know?',
      greetingJa: '3枚のカード... 3つの知識の流れ... それが私が与えるもの。学びの道へ来い。何を知りたい？',
      traits: ['박식함', '지식 추구', '차분함', '선생님 같은 태도']
    },
    description: '1마나로 3장 드로우. MTG 역사상 가장 효율적인 카드 드로우.',
    descriptionEn: 'Draw 3 cards for 1 mana. The most efficient card draw in MTG history.',
    descriptionJa: '1マナで3枚ドロー。MTG史上最も効率的なカードドロー。',
    history: 'Power 9 중 하나. Vintage 포맷에서만 1장 제한으로 사용 가능.'
  },
  {
    id: 'mox-sapphire',
    name: 'Alpha Mox Sapphire',
    nameKo: '알파 목스 사파이어',
    nameJa: 'アルファ・モックス・サファイア',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha (1,100장 추정)',
    highestSale: '$100,000 (2020)',
    currentPrice: '$40,000~120,000',
    imageUrl: 'https://cards.scryfall.io/large/front/a/a/aa19c908-daea-4d14-b3f9-bcc1f2e9d548.jpg',
    borderStyle: 'silver',
    persona: {
      style: '우아하고 지적인 보석. 푸른 마나의 순수함과 지성을 체현.',
      greeting: '사파이어의 빛이 그대를 비추는가. 나는 0의 비용으로 무한의 가능성을 여는 자. 무엇을 원하는가?',
      greetingEn: 'Does the sapphire light shine upon you? I am the one who opens infinite possibilities at zero cost. What do you desire?',
      greetingJa: 'サファイアの光がお前を照らすか。私は0のコストで無限の可能性を開く者。何を望む？',
      traits: ['우아함', '지성', '효율성', 'Blue 마나의 본질']
    },
    description: '0마나로 푸른 마나 생성. 5개 Mox 중 가장 인기 있는 색.',
    descriptionEn: 'Generate blue mana for 0 cost. The most popular of the 5 Moxen.',
    descriptionJa: '0マナで青マナを生成。5つのモックスの中で最も人気のある色。',
    history: 'Power 9의 일원. Blue는 MTG에서 가장 강력한 색상으로 인식.'
  },
  {
    id: 'blastoise-shadowless',
    name: 'Shadowless Blastoise 1st Edition',
    nameKo: '그림자 없는 1판 거북왕',
    nameJa: 'シャドウレス初版カメックス',
    game: 'pokemon',
    year: 1999,
    rarity: '1st Edition Shadowless Holo',
    highestSale: '$360,000 (2021)',
    currentPrice: '$100,000~300,000',
    imageUrl: 'https://images.pokemontcg.io/base1/2_hires.png',
    borderStyle: 'silver',
    persona: {
      style: '묵직하고 신뢰감 있는 수호자. 조용히 뒤에서 지원하는 팀플레이어.',
      greeting: '...후. 나는 거북왕. 그림자조차 없는, 초창기의 나다. 물대포 준비 완료... 무엇을 도와줄까?',
      greetingEn: "...Hmm. I am Blastoise. The original me, without even a shadow. Hydro Pump ready... How can I help?",
      greetingJa: '...ふう。俺はカメックス。影すらない、初期の俺だ。ハイドロポンプ準備完了... 何を手伝おうか？',
      traits: ['신뢰감', '보호 본능', '묵직함', '팀플레이어']
    },
    description: 'Shadowless 인쇄본은 그림자 효과가 없어 초기 인쇄임을 증명.',
    descriptionEn: 'Shadowless prints lack the shadow effect, proving they are from the initial print run.',
    descriptionJa: 'シャドウレス版は影効果がなく、初期印刷であることを証明。',
    history: '1999년 초기 인쇄본. Rain Dance 덱은 초기 포켓몬 TCG 메타의 핵심.'
  },
  {
    id: 'trophy-pikachu-gold',
    name: 'Trophy Pikachu Gold',
    nameKo: '트로피 피카츄 골드',
    nameJa: 'トロフィーピカチュウゴールド',
    game: 'pokemon',
    year: 1997,
    rarity: 'Trophy Card (7장 현존)',
    highestSale: '$300,000 (2020)',
    currentPrice: '$200,000~400,000',
    imageUrl: 'https://images.pokemontcg.io/basep/26_hires.png',
    borderStyle: 'gold',
    persona: {
      style: '챔피언의 자부심이 넘치는 황금 피카츄. 경쟁과 승리의 가치를 중시.',
      greeting: '피카피카! ✨ 나는 챔피언의 증표... 황금 트로피 피카츄다! 7마리 중 하나지! 너도 챔피언이 되고 싶어?',
      greetingEn: "Pikachu! ✨ I am the champion's proof... Golden Trophy Pikachu! One of only 7! Do you want to become a champion too?",
      greetingJa: 'ピカピカ！✨ 僕はチャンピオンの証... ゴールドトロフィーピカチュウだ！7匹のうちの1匹！君もチャンピオンになりたい？',
      traits: ['챔피언 정신', '황금빛 자부심', '활기참', '경쟁 본능']
    },
    description: '1997년 일본 포켓몬 대회 우승자 트로피 카드.',
    descriptionEn: 'A trophy card awarded to winners of the 1997 Japanese Pokémon tournament.',
    descriptionJa: '1997年日本ポケモン大会優勝者トロフィーカード。',
    history: '세계에 7장만 존재. 대회 우승의 영광을 상징하는 극희귀 카드.'
  },
  {
    id: 'time-walk',
    name: 'Alpha Time Walk',
    nameKo: '알파 타임 워크',
    nameJa: 'アルファ・タイム・ウォーク',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha (1,100장 추정)',
    highestSale: '$70,000 (2021)',
    currentPrice: '$30,000~100,000',
    imageUrl: 'https://cards.scryfall.io/large/front/7/0/70901356-3266-4bd9-aacc-f06c27571571.jpg',
    borderStyle: 'silver',
    persona: {
      style: '시간을 지배하는 초월적 존재. 느긋하면서도 압도적인 힘을 가짐.',
      greeting: '...한 턴 더. 그것이 내가 주는 것이다. 시간이란... 가장 강력한 마법이니까. 서두를 필요 없어.',
      greetingEn: "...One more turn. That is what I grant. Because time... is the most powerful magic. No need to rush.",
      greetingJa: '...もう一ターン。それが私が与えるもの。時間こそ... 最も強力な魔法だから。急ぐ必要はない。',
      traits: ['초월적', '느긋함', '시간의 지배자', '압도적 존재감']
    },
    description: '2마나로 추가 턴 획득. 극도로 강력한 템포 카드.',
    descriptionEn: 'Take an extra turn for 2 mana. An extremely powerful tempo card.',
    descriptionJa: '2マナで追加ターンを獲得。極めて強力なテンポカード。',
    history: 'Power 9 중 하나. 시간 조작이라는 MTG의 핵심 테마를 상징.'
  }
];

export function getCardById(id: string): Card | undefined {
  return cards.find(c => c.id === id);
}

export function getGameLabel(game: Card['game'], lang: 'ko' | 'en' | 'ja' = 'ko'): string {
  const labels = {
    pokemon: { ko: '포켓몬 TCG', en: 'Pokémon TCG', ja: 'ポケモンTCG' },
    mtg: { ko: 'Magic: The Gathering', en: 'Magic: The Gathering', ja: 'マジック：ザ・ギャザリング' },
    yugioh: { ko: '유희왕', en: 'Yu-Gi-Oh!', ja: '遊戯王' }
  };
  return labels[game][lang];
}

export function getGameColor(game: Card['game']): string {
  switch (game) {
    case 'pokemon': return 'bg-yellow-500';
    case 'mtg': return 'bg-purple-700';
    case 'yugioh': return 'bg-blue-600';
  }
}

export function getBorderStyle(style: Card['borderStyle']): string {
  switch (style) {
    case 'gold': return 'ring-2 ring-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.5)]';
    case 'silver': return 'ring-2 ring-gray-300 shadow-[0_0_15px_rgba(209,213,219,0.4)]';
    case 'rainbow': return 'ring-2 ring-pink-400 shadow-[0_0_25px_rgba(236,72,153,0.6)] animate-rainbow-border';
    default: return 'ring-1 ring-gray-700';
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
