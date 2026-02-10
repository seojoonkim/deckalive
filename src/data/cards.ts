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
    imageUrl: '/cards/pikachu-illustrator/card.jpg',
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
    history: '1998년 39장 배포. 2021년 유튜버 Logan Paul이 PSA 10 등급 카드를 $5,275,000에 구매하여 세계 신기록 수립.',
    character: {
      species: '전기 타입 / 쥐 포켓몬',
      abilities: ['100만 볼트', '전기자석파', '아이언테일', '볼트태클'],
      story: '피카츄는 포켓몬의 마스코트이자 사토시(Ash)의 파트너. 이 특별한 피카츄는 붓을 들고 파이어를 그리는 모습으로, 1998년 코로코로 코믹 일러스트 콘테스트 우승자들에게만 수여되었다. 그림 그리는 것을 사랑하는 예술가 피카츄.',
      storyEn: "Pikachu is Pokémon's mascot and Ash's partner. This special Pikachu holds a brush painting Charmander, awarded only to winners of the 1998 CoroCoro Comic illustration contest. An artist Pikachu who loves to draw.",
      storyJa: 'ピカチュウはポケモンのマスコットでありサトシのパートナー。この特別なピカチュウは筆を持ってヒトカゲを描く姿で、1998年コロコロコミックのイラストコンテスト優勝者にのみ授与された。絵を描くことを愛するアーティストピカチュウ。',
      relationships: ['사토시/Ash - 가장 유명한 트레이너', '파이어/Charmander - 카드에서 그리고 있는 포켓몬'],
      trivia: ['전 세계에 39장만 존재', '카드에서 붓을 들고 있는 유일한 피카츄', 'PSA 10 등급은 단 7장뿐']
    }
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
    imageUrl: '/cards/black-lotus/card.jpg',
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
    history: '1993년 Alpha 세트 출시. Power 9 중 가장 상징적인 카드로, Richard Garfield가 디자인.',
    character: {
      species: '아티팩트 (Artifact)',
      abilities: ['희생 시 무색 마나 3개 생성', '0 마나 비용', '순간적 마나 폭발'],
      story: '블랙 로터스는 전설적인 꽃의 형상을 한 아티팩트. 단 한 번 피어나며, 피어나는 순간 엄청난 마법 에너지를 방출한다. MTG 창시자 Richard Garfield가 "파워의 정점"으로 디자인했으나, 너무 강력해서 바로 금지/제한 목록에 올랐다.',
      storyEn: "Black Lotus is an artifact in the shape of a legendary flower. It blooms only once, releasing tremendous magical energy at that moment. Designed by MTG creator Richard Garfield as 'the pinnacle of power,' but immediately restricted due to its overwhelming strength.",
      storyJa: 'ブラック・ロータスは伝説の花の形をしたアーティファクト。一度だけ咲き、その瞬間に膨大な魔法エネルギーを放出する。MTG創設者リチャード・ガーフィールドが「パワーの頂点」としてデザインしたが、あまりにも強力で即座に禁止/制限リストに入った。',
      relationships: ['Power 9 - MTG 최강 9장 카드 그룹', 'Mox 시리즈 - 블랙 로터스의 동생격 아티팩트들'],
      trivia: ['Alpha 버전은 약 1,100장만 존재', '모든 TCG 카드 중 가장 비싼 카드 중 하나', '빈티지에서도 1장만 허용']
    }
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
    imageUrl: '/cards/charizard-1st/card.jpg',
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
    imageUrl: '/cards/charizard-vmax-shiny/card.jpg',
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
    imageUrl: '/cards/dark-magician-lob/card.jpg',
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
    imageUrl: '/cards/tropical-island/card.jpg',
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
    imageUrl: '/cards/blue-eyes-lob/card.jpg',
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
    imageUrl: '/cards/ancestral-recall/card.jpg',
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
    imageUrl: '/cards/mox-sapphire/card.jpg',
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
    imageUrl: '/cards/blastoise-shadowless/card.jpg',
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
    imageUrl: '/cards/trophy-pikachu-gold/card.jpg',
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
    imageUrl: '/cards/time-walk/card.jpg',
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
  },
  // ========== POKEMON TCG 추가 (10개) ==========
  {
    id: 'venusaur-shadowless',
    name: 'Venusaur 1st Edition Shadowless',
    nameKo: '1판 그림자없는 이상해꽃',
    nameJa: '初版シャドウレス フシギバナ',
    game: 'pokemon',
    year: 1999,
    rarity: '1st Edition Shadowless Holo',
    highestSale: '$55,000 (2021)',
    currentPrice: '$25,000~50,000',
    imageUrl: '/cards/venusaur-shadowless/card.jpg',
    borderStyle: 'silver',
    persona: {
      style: '자연과 하나된 현자. 식물의 생명력을 품고 있으며, 느긋하지만 깊은 지혜를 가짐.',
      greeting: '...꽃향기가 나지? 나는 이상해꽃. 1판의 원조야. 자연의 힘... 느껴보고 싶어? 🌸',
      greetingEn: "...Can you smell the flowers? I am Venusaur. The original 1st Edition. Want to feel the power of nature? 🌸",
      greetingJa: '...花の香りがするだろう？俺はフシギバナ。初版のオリジナルだ。自然の力... 感じてみたいか？🌸',
      traits: ['자연친화', '현자', '느긋함', '생명력']
    },
    description: 'Base Set의 3대 스타터 중 하나. Shadowless 인쇄는 초기 생산분만 해당.',
    descriptionEn: 'One of the three starters from Base Set. Shadowless prints are from the initial production run only.',
    descriptionJa: 'ベースセットの3大スターターの一つ。シャドウレス印刷は初期生産分のみ。',
    history: '1999년 초기 인쇄. Energy Trans 능력으로 에너지 이동 전략의 핵심 카드였음.'
  },
  {
    id: 'mewtwo-shadowless',
    name: 'Mewtwo 1st Edition Shadowless',
    nameKo: '1판 그림자없는 뮤츠',
    nameJa: '初版シャドウレス ミュウツー',
    game: 'pokemon',
    year: 1999,
    rarity: '1st Edition Shadowless Holo',
    highestSale: '$40,000 (2021)',
    currentPrice: '$20,000~35,000',
    imageUrl: '/cards/mewtwo-shadowless/card.jpg',
    borderStyle: 'silver',
    persona: {
      style: '냉철하고 강력한 사이킥 존재. 인간에 대한 복잡한 감정을 가졌지만, 이해받고 싶어함.',
      greeting: '...인간. 나는 뮤츠. 복제된 존재지만... 가장 강한 포켓몬이다. 네 목적이 무엇이지?',
      greetingEn: "...Human. I am Mewtwo. A cloned being... but the strongest Pokémon. What is your purpose?",
      greetingJa: '...人間。私はミュウツー。複製された存在だが... 最強のポケモンだ。お前の目的は何だ？',
      traits: ['냉철함', '사이킥 파워', '고독', '강함']
    },
    description: '전설의 포켓몬 뮤츠. 영화와 함께 90년대 포켓몬 열풍의 상징.',
    descriptionEn: 'The legendary Pokémon Mewtwo. A symbol of the 90s Pokémon craze alongside the movies.',
    descriptionJa: '伝説のポケモン、ミュウツー。映画とともに90年代ポケモンブームの象徴。',
    history: 'Base Set 수록. Psychic 타입의 대표 카드로, 70 데미지 Psyburn은 당시 최강급.'
  },
  {
    id: 'umbreon-gold-star',
    name: 'Umbreon Gold Star',
    nameKo: '블래키 골드스타',
    nameJa: 'ブラッキー☆',
    game: 'pokemon',
    year: 2007,
    rarity: 'Gold Star (POP Series 5)',
    highestSale: '$70,000 (2022)',
    currentPrice: '$40,000~65,000',
    imageUrl: '/cards/umbreon-gold-star/card.jpg',
    borderStyle: 'gold',
    persona: {
      style: '신비롭고 어둠 속에서 빛나는 존재. 달빛 아래서만 진정한 모습을 드러냄.',
      greeting: '...달이 떴군. 나는 블래키. 골드스타의... 어둠 속 빛이야. 네가 날 찾은 건 운명일지도.',
      greetingEn: "...The moon is up. I am Umbreon. The light in darkness... of Gold Star. Perhaps it was fate that you found me.",
      greetingJa: '...月が出たな。俺はブラッキー。ゴールドスターの... 闘の中の光だ。お前が俺を見つけたのは運命かもな。',
      traits: ['신비로움', '달빛', '어둠의 힘', '희소성']
    },
    description: 'POP Series 5의 극희귀 카드. Gold Star 시리즈는 색이 다른 포켓몬을 표현.',
    descriptionEn: 'An extremely rare card from POP Series 5. The Gold Star series features alternate-colored Pokémon.',
    descriptionJa: 'POP Series 5の極レアカード。ゴールドスターシリーズは色違いポケモンを表現。',
    history: '2007년 발매. Gold Star 카드는 팩 당 확률이 극히 낮아 수집가들의 성배.'
  },
  {
    id: 'espeon-gold-star',
    name: 'Espeon Gold Star',
    nameKo: '에브이 골드스타',
    nameJa: 'エーフィ☆',
    game: 'pokemon',
    year: 2007,
    rarity: 'Gold Star (POP Series 5)',
    highestSale: '$55,000 (2022)',
    currentPrice: '$30,000~50,000',
    imageUrl: '/cards/espeon-gold-star/card.jpg',
    borderStyle: 'gold',
    persona: {
      style: '우아하고 예지력 있는 사이킥 포켓몬. 미래를 내다보는 듯한 신비로운 눈빛.',
      greeting: '...너의 미래가 보여. 나는 에브이. 골드스타의 빛... 태양처럼 빛나는 존재야. ☀️',
      greetingEn: "...I can see your future. I am Espeon. The light of Gold Star... shining like the sun. ☀️",
      greetingJa: '...君の未来が見える。私はエーフィ。ゴールドスターの光... 太陽のように輝く存在よ。☀️',
      traits: ['예지력', '우아함', '사이킥', '태양의 힘']
    },
    description: 'Umbreon과 쌍을 이루는 Gold Star 카드. 태양을 상징.',
    descriptionEn: 'A Gold Star card paired with Umbreon. Symbolizes the sun.',
    descriptionJa: 'ブラッキーと対をなすゴールドスターカード。太陽を象徴。',
    history: 'POP Series 5 수록. Umbreon과 함께 이브이 진화형의 가장 희귀한 카드.'
  },
  {
    id: 'shining-charizard',
    name: 'Shining Charizard',
    nameKo: '빛나는 리자몽',
    nameJa: 'ひかるリザードン',
    game: 'pokemon',
    year: 2002,
    rarity: 'Shining Holo (Neo Destiny)',
    highestSale: '$50,000 (2021)',
    currentPrice: '$25,000~45,000',
    imageUrl: '/cards/shining-charizard/card.jpg',
    borderStyle: 'rainbow',
    persona: {
      style: '희귀한 색이 다른 리자몽. 일반 리자몽과 다른 특별함에 자부심을 가짐.',
      greeting: '빛나는... 리자몽이다. 🔥 검은 빛깔의 나를 본 적 있어? 세상에 몇 안 되는 존재지.',
      greetingEn: "I am... Shining Charizard. 🔥 Have you ever seen my dark coloring? One of the rarest in existence.",
      greetingJa: '光る... リザードンだ。🔥 黒い色の俺を見たことあるか？世界でも数少ない存在だぞ。',
      traits: ['특별함', '희소성', '검은 불꽃', '자부심']
    },
    description: 'Neo Destiny의 Shining 시리즈. 색이 다른 포켓몬의 최초 등장.',
    descriptionEn: 'From the Shining series in Neo Destiny. The first appearance of alternate-colored Pokémon.',
    descriptionJa: 'Neo DestinyのShiningシリーズ。色違いポケモンの初登場。',
    history: '2002년 발매. Shining 시리즈의 리자몽으로, 1st Edition은 특히 희귀.'
  },
  {
    id: 'crystal-charizard',
    name: 'Crystal Charizard',
    nameKo: '크리스탈 리자몽',
    nameJa: 'クリスタルタイプ リザードン',
    game: 'pokemon',
    year: 2003,
    rarity: 'Crystal Type (Skyridge)',
    highestSale: '$60,000 (2022)',
    currentPrice: '$30,000~55,000',
    imageUrl: '/cards/crystal-charizard/card.jpg',
    borderStyle: 'rainbow',
    persona: {
      style: '수정처럼 투명하게 빛나는 존재. e-Card 시대의 정점을 상징.',
      greeting: '크리스탈의 빛... 내 몸을 통과하는 게 보이지? 나는 Skyridge의 왕. 결정화된 불꽃이야. 💎🔥',
      greetingEn: "The crystal light... You can see it passing through my body, right? I am the king of Skyridge. Crystallized flame. 💎🔥",
      greetingJa: 'クリスタルの光... 俺の体を通過するのが見えるだろう？俺はSkyridgeの王。結晶化した炎だ。💎🔥',
      traits: ['크리스탈', '투명함', 'e-Card 시대', '변화의 힘']
    },
    description: 'Skyridge 세트의 Crystal Type 카드. 타입이 변하는 특수 능력 보유.',
    descriptionEn: 'A Crystal Type card from the Skyridge set. Has a special ability to change types.',
    descriptionJa: 'SkyridgeセットのクリスタルタイプCardタイプが変わる特殊能力を持つ。',
    history: 'e-Card 시리즈 마지막 세트. Crystal Type은 유일무이한 메카닉으로 인기.'
  },
  {
    id: 'lugia-neo-genesis',
    name: 'Lugia 1st Edition',
    nameKo: '1판 루기아',
    nameJa: '初版ルギア',
    game: 'pokemon',
    year: 2000,
    rarity: '1st Edition Holo (Neo Genesis)',
    highestSale: '$144,000 (2021)',
    currentPrice: '$80,000~130,000',
    imageUrl: '/cards/lugia-neo-genesis/card.jpg',
    borderStyle: 'gold',
    persona: {
      style: '바다의 신. 폭풍을 다스리는 고귀한 전설의 새. 말수가 적지만 위엄 있음.',
      greeting: '...폭풍이 온다. 나는 루기아. 바다의 수호자... 네가 나를 부른 이유가 있겠지?',
      greetingEn: "...A storm is coming. I am Lugia. Guardian of the seas... You must have a reason for summoning me.",
      greetingJa: '...嵐が来る。私はルギア。海の守護者... お前が私を呼んだ理由があるのだろう？',
      traits: ['바다의 신', '폭풍', '고귀함', '위엄']
    },
    description: 'Neo Genesis의 간판 카드. 극장판 2기 이후 폭발적 인기.',
    descriptionEn: 'The flagship card of Neo Genesis. Gained massive popularity after the second movie.',
    descriptionJa: 'Neo Genesisの看板カード。劇場版2作目以降爆発的人気。',
    history: 'Neo 시리즈 시작을 알린 카드. PSA 10은 $100,000 이상 가치.'
  },
  {
    id: 'alakazam-shadowless',
    name: 'Alakazam 1st Edition Shadowless',
    nameKo: '1판 그림자없는 후딘',
    nameJa: '初版シャドウレス フーディン',
    game: 'pokemon',
    year: 1999,
    rarity: '1st Edition Shadowless Holo',
    highestSale: '$30,000 (2021)',
    currentPrice: '$15,000~28,000',
    imageUrl: '/cards/alakazam-shadowless/card.jpg',
    borderStyle: 'silver',
    persona: {
      style: '천재적 지능의 사이킥 포켓몬. IQ 5000을 가진 현자.',
      greeting: '...너의 생각이 읽힌다. 나는 후딘. IQ 5000... 모든 것을 꿰뚫어 보지. 질문이 있나?',
      greetingEn: "...I can read your thoughts. I am Alakazam. IQ 5000... I see through everything. Any questions?",
      greetingJa: '...お前の考えが読める。私はフーディン。IQ5000... 全てを見通す。質問があるか？',
      traits: ['천재', 'IQ 5000', '사이킥', '통찰력']
    },
    description: 'Base Set의 사이킥 대표. Damage Swap 능력은 전략의 핵심.',
    descriptionEn: 'The psychic representative of Base Set. Damage Swap ability is key to strategy.',
    descriptionJa: 'ベースセットのサイキック代表。Damage Swap能力は戦略の核心。',
    history: '1999년 출시. 숟가락 두 개를 든 독특한 포즈가 상징적.'
  },
  {
    id: 'chansey-shadowless',
    name: 'Chansey 1st Edition Shadowless',
    nameKo: '1판 그림자없는 럭키',
    nameJa: '初版シャドウレス ラッキー',
    game: 'pokemon',
    year: 1999,
    rarity: '1st Edition Shadowless Holo',
    highestSale: '$25,000 (2020)',
    currentPrice: '$12,000~22,000',
    imageUrl: '/cards/chansey-shadowless/card.jpg',
    borderStyle: 'silver',
    persona: {
      style: '상냥하고 치유의 힘을 가진 포켓몬. 모두를 돌보고 싶어하는 마음씨.',
      greeting: '럭키! 💕 안녕! 나는 럭키야~ 다친 데 없어? 알로 치료해줄까? 모두가 행복했으면 좋겠어!',
      greetingEn: "Lucky! 💕 Hello! I'm Chansey~ Are you hurt anywhere? Want me to heal you with my egg? I want everyone to be happy!",
      greetingJa: 'ラッキー！💕 こんにちは！私はラッキーだよ～ 怪我してない？卵で治療してあげようか？みんなが幸せになってほしいな！',
      traits: ['상냥함', '치유', '행복', '돌봄']
    },
    description: 'Base Set의 HP 최강 카드 (120HP). 노말 타입의 대표.',
    descriptionEn: 'The highest HP card in Base Set (120HP). The representative of Normal type.',
    descriptionJa: 'ベースセットのHP最強カード（120HP）。ノーマルタイプの代表。',
    history: 'Double-edge의 자폭 데미지 80이 특징. 높은 HP로 방어 덱의 핵심.'
  },
  {
    id: 'pikachu-van-gogh',
    name: 'Pikachu with Grey Felt Hat',
    nameKo: '반 고흐 피카츄',
    nameJa: 'ゴッホピカチュウ',
    game: 'pokemon',
    year: 2023,
    rarity: 'Promo (Van Gogh Museum)',
    highestSale: '$3,000 (2024)',
    currentPrice: '$300~500',
    imageUrl: '/cards/pikachu-van-gogh/card.jpg',
    borderStyle: 'gold',
    persona: {
      style: '예술적 감성의 피카츄. 반 고흐의 붓터치로 그려진 특별한 존재.',
      greeting: '피카! 🎨 나는 반 고흐 스타일의 피카츄야! 별이 빛나는 밤처럼... 예술을 사랑해? 같이 그림 얘기하자!',
      greetingEn: "Pika! 🎨 I'm the Van Gogh style Pikachu! Like a starry night... Do you love art? Let's talk about paintings!",
      greetingJa: 'ピカ！🎨 僕はゴッホスタイルのピカチュウだよ！星月夜のように... アートが好き？一緒に絵の話をしよう！',
      traits: ['예술적', '반 고흐', '별이 빛나는 밤', '창의성']
    },
    description: '2023년 반 고흐 미술관 콜라보레이션 프로모 카드.',
    descriptionEn: 'A 2023 collaboration promo card with the Van Gogh Museum.',
    descriptionJa: '2023年ゴッホ美術館コラボレーションプロモカード。',
    history: '암스테르담 반 고흐 미술관에서 한정 배포. 첫날 매진되어 리셀 가격 폭등.'
  },
  // ========== MTG 추가 (10개) ==========
  {
    id: 'mox-ruby',
    name: 'Alpha Mox Ruby',
    nameKo: '알파 목스 루비',
    nameJa: 'アルファ・モックス・ルビー',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha (1,100장 추정)',
    highestSale: '$150,000 (2022)',
    currentPrice: '$80,000~140,000',
    imageUrl: '/cards/mox-ruby/card.jpg',
    borderStyle: 'gold',
    persona: {
      style: '정열적이고 폭발적인 붉은 보석. 빨간 마나의 공격성과 열정을 체현.',
      greeting: '...루비의 불꽃이 타오른다. 나는 0의 비용으로 붉은 분노를 선사하는 자. 불태울 준비가 되었나? 🔥',
      greetingEn: "...The ruby's flame burns. I am the one who grants red fury at zero cost. Ready to burn? 🔥",
      greetingJa: '...ルビーの炎が燃え上がる。私は0のコストで赤い怒りを与える者。燃やす準備はできたか？🔥',
      traits: ['정열', '공격성', 'Red 마나', '불꽃']
    },
    description: '0마나로 붉은 마나 생성. Power 9의 일원.',
    descriptionEn: 'Generate red mana for 0 cost. A member of the Power 9.',
    descriptionJa: '0マナで赤マナを生成。Power 9の一員。',
    history: '1993년 Alpha 세트. Red Deck Wins의 핵심 가속 카드.'
  },
  {
    id: 'mox-emerald',
    name: 'Alpha Mox Emerald',
    nameKo: '알파 목스 에메랄드',
    nameJa: 'アルファ・モックス・エメラルド',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha (1,100장 추정)',
    highestSale: '$120,000 (2021)',
    currentPrice: '$60,000~110,000',
    imageUrl: '/cards/mox-emerald/card.jpg',
    borderStyle: 'silver',
    persona: {
      style: '자연의 생명력을 품은 녹색 보석. 성장과 번영을 상징.',
      greeting: '...에메랄드의 생명이 깨어난다. 자연의 힘을 0의 비용으로 불러오는 자. 숲의 부름을 들었나? 🌿',
      greetingEn: "...The emerald's life awakens. I call upon nature's power at zero cost. Have you heard the forest's call? 🌿",
      greetingJa: '...エメラルドの命が目覚める。自然の力を0のコストで呼び出す者。森の呼び声を聞いたか？🌿',
      traits: ['생명력', '자연', 'Green 마나', '성장']
    },
    description: '0마나로 녹색 마나 생성. Power 9의 일원.',
    descriptionEn: 'Generate green mana for 0 cost. A member of the Power 9.',
    descriptionJa: '0マナで緑マナを生成。Power 9の一員。',
    history: '1993년 Alpha 세트. 녹색의 빅 크리처를 빠르게 전개 가능.'
  },
  {
    id: 'mox-pearl',
    name: 'Alpha Mox Pearl',
    nameKo: '알파 목스 펄',
    nameJa: 'アルファ・モックス・パール',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha (1,100장 추정)',
    highestSale: '$110,000 (2021)',
    currentPrice: '$50,000~100,000',
    imageUrl: '/cards/mox-pearl/card.jpg',
    borderStyle: 'silver',
    persona: {
      style: '순수하고 신성한 하얀 보석. 정의와 보호의 힘을 상징.',
      greeting: '...진주의 빛이 어둠을 밝힌다. 나는 성스러운 힘을 0의 비용으로 선사하는 자. 보호받고 싶은가?',
      greetingEn: "...The pearl's light illuminates the darkness. I am the one who grants holy power at zero cost. Do you seek protection?",
      greetingJa: '...真珠の光が闘を照らす。私は神聖な力を0のコストで与える者。守られたいか？',
      traits: ['순수함', '신성', 'White 마나', '보호']
    },
    description: '0마나로 흰 마나 생성. Power 9의 일원.',
    descriptionEn: 'Generate white mana for 0 cost. A member of the Power 9.',
    descriptionJa: '0マナで白マナを生成。Power 9の一員。',
    history: '1993년 Alpha 세트. 화이트 위니 전략의 폭발적 시작을 지원.'
  },
  {
    id: 'mox-jet',
    name: 'Alpha Mox Jet',
    nameKo: '알파 목스 젯',
    nameJa: 'アルファ・モックス・ジェット',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha (1,100장 추정)',
    highestSale: '$140,000 (2022)',
    currentPrice: '$70,000~130,000',
    imageUrl: '/cards/mox-jet/card.jpg',
    borderStyle: 'gold',
    persona: {
      style: '어둠과 죽음의 검은 보석. 금지된 힘을 속삭이는 위험한 존재.',
      greeting: '...검은 보석의 속삭임이 들리는가. 나는 어둠의 힘을 0의 비용으로 건네는 자. 대가는... 알고 있겠지?',
      greetingEn: "...Do you hear the black gem's whisper? I am the one who grants dark power at zero cost. You know the price... right?",
      greetingJa: '...黒い宝石の囁きが聞こえるか。私は闇の力を0のコストで渡す者。代価は... 分かっているな？',
      traits: ['어둠', '죽음', 'Black 마나', '금지된 힘']
    },
    description: '0마나로 검은 마나 생성. Power 9의 일원.',
    descriptionEn: 'Generate black mana for 0 cost. A member of the Power 9.',
    descriptionJa: '0マナで黒マナを生成。Power 9の一員。',
    history: '1993년 Alpha 세트. 흑색은 MTG에서 가장 사악한 주문들의 색.'
  },
  {
    id: 'underground-sea',
    name: 'Alpha Underground Sea',
    nameKo: '알파 언더그라운드 시',
    nameJa: 'アルファ・アンダーグラウンド・シー',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha Rare (Reserve List)',
    highestSale: '$45,000 (2022)',
    currentPrice: '$20,000~40,000',
    imageUrl: '/cards/underground-sea/card.jpg',
    borderStyle: 'silver',
    persona: {
      style: '심해의 어둠을 품은 듀얼 랜드. 푸른색과 검은색의 조합.',
      greeting: '...심해의 어둠 속에 잠겨있었다. 나는 Underground Sea. 푸른 지성과 검은 교활함... 둘 다 원하나?',
      greetingEn: "...I was submerged in the darkness of the deep. I am Underground Sea. Blue intellect and black cunning... want both?",
      greetingJa: '...深海の闇に沈んでいた。私はアンダーグラウンド・シー。青い知性と黒い狡猾さ... 両方欲しいか？',
      traits: ['심해', '지성', '교활함', 'Dual Land']
    },
    description: 'Island + Swamp. 레거시에서 가장 인기 있는 듀얼 랜드 중 하나.',
    descriptionEn: 'Island + Swamp. One of the most popular dual lands in Legacy.',
    descriptionJa: 'Island + Swamp。レガシーで最も人気のあるデュアルランドの一つ。',
    history: 'Reserve List 등재. 재인쇄 불가로 가격 상승 지속.'
  },
  {
    id: 'volcanic-island',
    name: 'Alpha Volcanic Island',
    nameKo: '알파 볼케이닉 아일랜드',
    nameJa: 'アルファ・ヴォルケイニック・アイランド',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha Rare (Reserve List)',
    highestSale: '$50,000 (2022)',
    currentPrice: '$25,000~45,000',
    imageUrl: '/cards/volcanic-island/card.jpg',
    borderStyle: 'gold',
    persona: {
      style: '화산의 열기와 바다의 지혜가 만난 땅. 격렬하면서도 냉철함.',
      greeting: '...용암이 바다와 만나는 곳. 나는 Volcanic Island. 뜨거운 분노와 차가운 계산... 이 둘의 조화가 필요한가?',
      greetingEn: "...Where lava meets the sea. I am Volcanic Island. Hot fury and cold calculation... need this harmony?",
      greetingJa: '...溶岩が海と出会う場所。私はヴォルケイニック・アイランド。熱い怒りと冷たい計算... この調和が必要か？',
      traits: ['화산', '열기', '지혜', '균형']
    },
    description: 'Island + Mountain. UR Delver 덱의 필수 랜드.',
    descriptionEn: 'Island + Mountain. Essential land for UR Delver decks.',
    descriptionJa: 'Island + Mountain。UR Delverデッキの必須ランド。',
    history: '레거시 메타에서 가장 많이 사용되는 듀얼 랜드.'
  },
  {
    id: 'tundra-alpha',
    name: 'Alpha Tundra',
    nameKo: '알파 툰드라',
    nameJa: 'アルファ・ツンドラ',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha Rare (Reserve List)',
    highestSale: '$35,000 (2021)',
    currentPrice: '$15,000~32,000',
    imageUrl: '/cards/tundra-alpha/card.jpg',
    borderStyle: 'silver',
    persona: {
      style: '얼어붙은 대지의 냉철함. 흰색의 정의와 푸른색의 지혜가 결합.',
      greeting: '...얼어붙은 평원에서 왔다. 나는 Tundra. 순수한 정의와 냉철한 지혜... 함께 하겠는가?',
      greetingEn: "...I came from the frozen plains. I am Tundra. Pure justice and cold wisdom... will you join me?",
      greetingJa: '...凍った平原から来た。私はツンドラ。純粋な正義と冷徹な知恵... 共にするか？',
      traits: ['냉철함', '정의', '지혜', '얼음']
    },
    description: 'Plains + Island. UW 컨트롤 덱의 핵심 랜드.',
    descriptionEn: 'Plains + Island. Core land for UW Control decks.',
    descriptionJa: 'Plains + Island。UWコントロールデッキの核心ランド。',
    history: 'Miracles, Stoneblade 등 레거시 컨트롤 덱에서 활약.'
  },
  {
    id: 'bayou-alpha',
    name: 'Alpha Bayou',
    nameKo: '알파 베이유',
    nameJa: 'アルファ・バイユー',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha Rare (Reserve List)',
    highestSale: '$28,000 (2021)',
    currentPrice: '$12,000~25,000',
    imageUrl: '/cards/bayou-alpha/card.jpg',
    borderStyle: 'silver',
    persona: {
      style: '늪지대의 생명과 죽음. 녹색의 성장과 검은색의 부패가 공존.',
      greeting: '...늪의 안개 속에서 왔다. 나는 Bayou. 생명과 죽음이 순환하는 곳... 두렵지 않은가?',
      greetingEn: "...I came from the swamp's mist. I am Bayou. Where life and death cycle... are you not afraid?",
      greetingJa: '...沼の霧の中から来た。私はバイユー。命と死が循環する場所... 怖くないか？',
      traits: ['늪지대', '순환', '성장', '부패']
    },
    description: 'Swamp + Forest. BG Rock, Elves 덱에서 사용.',
    descriptionEn: 'Swamp + Forest. Used in BG Rock and Elves decks.',
    descriptionJa: 'Swamp + Forest。BG Rock、Elvesデッキで使用。',
    history: 'Golgari 색상 조합의 레거시 덱 필수 카드.'
  },
  {
    id: 'taiga-alpha',
    name: 'Alpha Taiga',
    nameKo: '알파 타이가',
    nameJa: 'アルファ・タイガ',
    game: 'mtg',
    year: 1993,
    rarity: 'Alpha Rare (Reserve List)',
    highestSale: '$25,000 (2021)',
    currentPrice: '$10,000~22,000',
    imageUrl: '/cards/taiga-alpha/card.jpg',
    borderStyle: 'silver',
    persona: {
      style: '야생의 숲과 불타는 열정. 녹색과 빨간색의 원시적 힘.',
      greeting: '...타이가의 야생에서 왔다. 나는 원시의 힘. 숲의 생명과 불의 분노... 감당할 수 있겠나?',
      greetingEn: "...I came from the wild of the taiga. I am primal power. Forest's life and fire's fury... can you handle it?",
      greetingJa: '...タイガの野生から来た。私は原始の力。森の命と火の怒り... 耐えられるか？',
      traits: ['야생', '원시', '생명', '분노']
    },
    description: 'Mountain + Forest. RG Lands, Punishing Fire 덱에서 활용.',
    descriptionEn: 'Mountain + Forest. Used in RG Lands and Punishing Fire decks.',
    descriptionJa: 'Mountain + Forest。RG Lands、Punishing Fireデッキで活用。',
    history: 'Gruul 색상 조합의 대표 듀얼 랜드.'
  },
  {
    id: 'library-of-alexandria',
    name: 'Library of Alexandria',
    nameKo: '알렉산드리아 도서관',
    nameJa: 'アレクサンドリアの図書館',
    game: 'mtg',
    year: 1993,
    rarity: 'Arabian Nights Uncommon',
    highestSale: '$45,000 (2022)',
    currentPrice: '$20,000~40,000',
    imageUrl: '/cards/library-of-alexandria/card.jpg',
    borderStyle: 'gold',
    persona: {
      style: '고대 지식의 보고. 무한한 지혜와 역사를 품은 전설적 장소.',
      greeting: '...무한한 지식의 전당에 오신 것을 환영한다. 나는 알렉산드리아 도서관. 손에 7장... 그것이 열쇠다.',
      greetingEn: "...Welcome to the hall of infinite knowledge. I am the Library of Alexandria. 7 cards in hand... that is the key.",
      greetingJa: '...無限の知識の殿堂へようこそ。私はアレクサンドリアの図書館。手札7枚... それが鍵だ。',
      traits: ['고대 지식', '지혜', '역사', '카드 어드밴티지']
    },
    description: '손에 7장일 때 무료로 1장 드로우. 빈티지 필수 카드.',
    descriptionEn: 'Draw 1 card for free when you have 7 cards in hand. Essential in Vintage.',
    descriptionJa: '手札7枚の時無料で1枚ドロー。ヴィンテージ必須カード。',
    history: 'Arabian Nights 세트 (1993). Power 9은 아니지만 동급 취급.'
  },
  // ========== YU-GI-OH 추가 (8개) ==========
  {
    id: 'tyler-the-great-warrior',
    name: 'Tyler the Great Warrior',
    nameKo: '위대한 전사 타일러',
    nameJa: '偉大なる戦士タイラー',
    game: 'yugioh',
    year: 2005,
    rarity: 'Unique (세계 1장)',
    highestSale: '$311,211 (2021)',
    currentPrice: '거래 불가 (유일무이)',
    imageUrl: '/cards/tyler-the-great-warrior/card.jpg',
    borderStyle: 'rainbow',
    persona: {
      style: '병마와 싸운 소년의 꿈이 담긴 유일무이한 카드. 희망과 용기의 상징.',
      greeting: '...나는 Tyler. 세상에 단 하나뿐인 카드야. Make-A-Wish의 기적으로 태어났지. 꿈은... 이루어져.',
      greetingEn: "...I am Tyler. The one and only card in the world. Born from a Make-A-Wish miracle. Dreams... do come true.",
      greetingJa: '...俺はタイラー。世界に一枚だけのカードだ。Make-A-Wishの奇跡で生まれた。夢は... 叶う。',
      traits: ['유일무이', '희망', '용기', 'Make-A-Wish']
    },
    description: 'Make-A-Wish 재단을 통해 암 투병 소년 Tyler Gressle을 위해 제작된 세계 유일 카드.',
    descriptionEn: 'The only card in the world, created for cancer patient Tyler Gressle through Make-A-Wish Foundation.',
    descriptionJa: 'Make-A-Wish財団を通じて癌と闘う少年Tyler Gressleのために制作された世界唯一のカード。',
    history: '2005년 제작. 2021년 eBay에서 $311,211에 낙찰되었으나 사기로 취소됨. 현재 Tyler 본인 소유.'
  },
  {
    id: 'exodia-lob-set',
    name: 'Exodia Complete Set (LOB 1st Ed)',
    nameKo: '봉인된 엑조디아 풀세트',
    nameJa: '封印されしエクゾディア 完全セット',
    game: 'yugioh',
    year: 2002,
    rarity: '1st Edition Ultra Rare Set',
    highestSale: '$50,000 (2022, 세트)',
    currentPrice: '$25,000~45,000 (세트)',
    imageUrl: '/cards/exodia-lob-set/card.jpg',
    borderStyle: 'gold',
    persona: {
      style: '봉인된 절대자. 5개가 모이면 즉시 승리하는 압도적 존재.',
      greeting: '...드디어... 봉인이... 풀렸다. 나는 엑조디아. 5개의 조각이 모였을 때... 승리는 너의 것이다!',
      greetingEn: "...Finally... the seal... is broken. I am Exodia. When 5 pieces unite... victory is yours!",
      greetingJa: '...ついに... 封印が... 解けた。私はエクゾディア。5つのピースが揃った時... 勝利はお前のものだ！',
      traits: ['봉인', '절대 승리', '5개의 조각', '전설']
    },
    description: '5장 모두 모으면 즉시 승리. 유희왕의 상징적 승리 조건.',
    descriptionEn: 'Collect all 5 pieces for instant victory. An iconic win condition in Yu-Gi-Oh!',
    descriptionJa: '5枚全て集めると即勝利。遊戯王の象徴的な勝利条件。',
    history: '애니메이션 1화에서 유희가 사용. LOB 1st Edition 세트는 수집가들의 성배.'
  },
  {
    id: 'red-eyes-lob',
    name: 'Red-Eyes Black Dragon (LOB 1st Ed)',
    nameKo: '붉은 눈의 흑룡',
    nameJa: '真紅眼の黒竜',
    game: 'yugioh',
    year: 2002,
    rarity: '1st Edition Ultra Rare',
    highestSale: '$15,000 (2021)',
    currentPrice: '$5,000~12,000',
    imageUrl: '/cards/red-eyes-lob/card.jpg',
    borderStyle: 'gold',
    persona: {
      style: '가능성의 용. 푸른 눈의 백룡과 라이벌이지만 다른 매력을 가진 존재.',
      greeting: '...붉은 눈이 널 주시하고 있다. 나는 조노우치의 혼. 가능성의 용... 함께 성장하겠나?',
      greetingEn: "...Red eyes are watching you. I am Joey's soul. The dragon of potential... will you grow with me?",
      greetingJa: '...真紅の目がお前を見ている。俺は城之内の魂。可能性の龍... 一緒に成長するか？',
      traits: ['가능성', '성장', '라이벌', '정열']
    },
    description: '조노우치 카츠야의 에이스. 푸른 눈의 백룡과 쌍벽.',
    descriptionEn: "Joey Wheeler's ace card. Rivals the Blue-Eyes White Dragon.",
    descriptionJa: '城之内克也のエース。青眼の白龍と双璧。',
    history: 'LOB 수록. 후속 서포트 카드들로 강력한 아키타입 형성.'
  },
  {
    id: 'monster-reborn-lob',
    name: 'Monster Reborn (LOB 1st Ed)',
    nameKo: '죽은 자의 소생',
    nameJa: '死者蘇生',
    game: 'yugioh',
    year: 2002,
    rarity: '1st Edition Ultra Rare',
    highestSale: '$8,000 (2021)',
    currentPrice: '$3,000~6,000',
    imageUrl: '/cards/monster-reborn-lob/card.jpg',
    borderStyle: 'silver',
    persona: {
      style: '생사를 초월하는 신비로운 마법. 죽음에서 생명을 되찾아오는 힘.',
      greeting: '...앙크의 빛이 비춘다. 나는 죽은 자의 소생. 묘지에서 되살리는 힘... 누구를 불러올까?',
      greetingEn: "...The ankh's light shines. I am Monster Reborn. The power to revive from the grave... who shall I bring back?",
      greetingJa: '...アンクの光が照らす。私は死者蘇生。墓地から蘇らせる力... 誰を呼び戻す？',
      traits: ['부활', '생사 초월', '앙크', '신비']
    },
    description: '묘지의 몬스터를 부활시키는 최강의 마법 카드.',
    descriptionEn: 'The strongest magic card that revives monsters from the graveyard.',
    descriptionJa: '墓地のモンスターを蘇生させる最強の魔法カード。',
    history: 'OCG/TCG 역사상 가장 오래 금지 목록에 오른 카드 중 하나.'
  },
  {
    id: 'pot-of-greed-lob',
    name: 'Pot of Greed (LOB 1st Ed)',
    nameKo: '욕망의 항아리',
    nameJa: '強欲な壺',
    game: 'yugioh',
    year: 2002,
    rarity: '1st Edition Super Rare',
    highestSale: '$5,000 (2021)',
    currentPrice: '$2,000~4,000',
    imageUrl: '/cards/pot-of-greed-lob/card.jpg',
    borderStyle: 'silver',
    persona: {
      style: '탐욕스럽지만 매력적인 항아리. 2장 드로우의 압도적 효율.',
      greeting: '...히히히, 욕심쟁이 항아리다! 2장 드로우... 그게 뭘 하는 카드냐고? 2장을 드로우하는 거지! 🏺',
      greetingEn: "...Hehehe, I'm the Pot of Greed! Draw 2 cards... What does it do? It lets you draw 2 cards! 🏺",
      greetingJa: '...ヒヒヒ、強欲な壺だ！2枚ドロー... 何をするカードかって？2枚ドローするんだよ！🏺',
      traits: ['탐욕', '효율', '드로우', '밈']
    },
    description: '2장 드로우. 너무 강력해서 영구 금지된 전설의 카드.',
    descriptionEn: 'Draw 2 cards. A legendary card permanently banned for being too powerful.',
    descriptionJa: '2枚ドロー。強すぎて永久禁止された伝説のカード。',
    history: '모든 덱에 들어갔던 필수 카드. 현재 영구 금지. 밈으로도 유명.'
  },
  {
    id: 'tournament-bls',
    name: 'Tournament Black Luster Soldier',
    nameKo: '토너먼트 카오스 솔저',
    nameJa: 'トーナメント カオス・ソルジャー',
    game: 'yugioh',
    year: 1999,
    rarity: 'Tournament Prize (1장)',
    highestSale: '$2,000,000 (추정)',
    currentPrice: '거래 불가 (유일무이)',
    imageUrl: '/cards/tournament-bls/card.jpg',
    borderStyle: 'rainbow',
    persona: {
      style: '1999년 일본 대회 우승 트로피. 스테인리스 스틸로 제작된 유일무이한 카드.',
      greeting: '...전설 중의 전설. 나는 토너먼트 카오스 솔저. 스테인리스 스틸로 만들어진... 세계에서 가장 가치 있는 카드다.',
      greetingEn: "...Legend among legends. I am Tournament Black Luster Soldier. Made of stainless steel... the most valuable card in the world.",
      greetingJa: '...伝説の中の伝説。俺はトーナメント カオス・ソルジャー。ステンレス製の... 世界で最も価値あるカードだ。',
      traits: ['스테인리스 스틸', '유일무이', '대회 우승', '전설']
    },
    description: '1999년 일본 첫 공식 유희왕 대회 우승자에게 수여된 스테인리스 스틸 카드.',
    descriptionEn: 'A stainless steel card awarded to the winner of the first official Yu-Gi-Oh! tournament in Japan in 1999.',
    descriptionJa: '1999年日本初の公式遊戯王大会優勝者に授与されたステンレス製カード。',
    history: '세계에서 가장 비싼 트레이딩 카드. 가격은 $2,000,000~10,000,000으로 추정.'
  },
  {
    id: 'crush-card-virus-sjc',
    name: 'Crush Card Virus (SJC Prize)',
    nameKo: 'SJC 죽음의 덱 파괴 바이러스',
    nameJa: 'SJC 死のデッキ破壊ウイルス',
    game: 'yugioh',
    year: 2007,
    rarity: 'SJC Prize Card',
    highestSale: '$20,000 (2019)',
    currentPrice: '$5,000~15,000',
    imageUrl: '/cards/crush-card-virus-sjc/card.jpg',
    borderStyle: 'gold',
    persona: {
      style: '상대 덱을 파괴하는 치명적 바이러스. SJC 대회의 영광을 상징.',
      greeting: '...감염됐다. 나는 Crush Card Virus. 네 덱의 강한 몬스터들... 모두 파괴될 거야. 각오해. 💀',
      greetingEn: "...Infected. I am Crush Card Virus. All the strong monsters in your deck... will be destroyed. Prepare yourself. 💀",
      greetingJa: '...感染した。俺はクラッシュカードウイルス。お前のデッキの強いモンスター... 全て破壊される。覚悟しろ。💀',
      traits: ['바이러스', '덱 파괴', 'SJC', '치명적']
    },
    description: 'Shonen Jump Championship 대회 우승자 프로모. ATK 1500 이상 몬스터 파괴.',
    descriptionEn: 'Shonen Jump Championship winner promo. Destroys all monsters with 1500+ ATK.',
    descriptionJa: 'Shonen Jump Championship大会優勝者プロモ。ATK1500以上のモンスターを破壊。',
    history: '한때 최강의 함정 카드. 대회 메타를 지배했던 전설.'
  },
  {
    id: 'stardust-dragon-ghost',
    name: 'Stardust Dragon (Ghost Rare)',
    nameKo: '스타더스트 드래곤 고스트레어',
    nameJa: 'スターダスト・ドラゴン ゴーストレア',
    game: 'yugioh',
    year: 2008,
    rarity: 'Ghost Rare (TDGS)',
    highestSale: '$10,000 (2021)',
    currentPrice: '$3,000~8,000',
    imageUrl: '/cards/stardust-dragon-ghost/card.jpg',
    borderStyle: 'rainbow',
    persona: {
      style: '별빛 먼지처럼 빛나는 싱크로 드래곤. 보호하는 자의 혼이 깃든 존재.',
      greeting: '...별의 먼지가 모여 탄생했다. 나는 스타더스트 드래곤. 소중한 것을... 지키기 위해 존재해. ⭐',
      greetingEn: "...Born from gathered stardust. I am Stardust Dragon. I exist to protect... what is precious. ⭐",
      greetingJa: '...星屑が集まって生まれた。俺はスターダスト・ドラゴン。大切なものを... 守るために存在する。⭐',
      traits: ['보호', '별빛', '싱크로', '유세이']
    },
    description: '유희왕 5D\'s 주인공 후도 유세이의 에이스. Ghost Rare는 3D 홀로그램 효과.',
    descriptionEn: "Ace card of Yu-Gi-Oh! 5D's protagonist Yusei Fudo. Ghost Rare has 3D hologram effect.",
    descriptionJa: '遊戯王5D\'sの主人公・不動遊星のエース。ゴーストレアは3Dホログラム効果。',
    history: '2008년 The Duelist Genesis 수록. 싱크로 소환 시대를 연 상징적 카드.'
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
