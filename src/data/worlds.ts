import type { GameType } from '../types/card';

export interface GameWorld {
  id: GameType;
  name: string;
  nameKo: string;
  nameJa: string;
  universe: string;
  universeEn: string;
  universeJa: string;
  setting: string;
  settingEn: string;
  settingJa: string;
  keyElements: string[];
  keyElementsEn: string[];
  keyElementsJa: string[];
}

export const gameWorlds: Record<GameType, GameWorld> = {
  pokemon: {
    id: 'pokemon',
    name: 'Pokémon',
    nameKo: '포켓몬',
    nameJa: 'ポケモン',
    universe: '포켓몬 세계 - 인간과 신비한 생물 포켓몬이 공존하는 세계. 트레이너들은 포켓몬과 유대를 맺고, 배틀하며, 함께 성장한다. 포켓몬은 몬스터볼에 담아 데리고 다니며, 각자 고유한 타입과 능력을 가진다.',
    universeEn: 'Pokémon World - A world where humans coexist with mysterious creatures called Pokémon. Trainers bond with Pokémon, battle together, and grow as partners. Pokémon are carried in Poké Balls, each with unique types and abilities.',
    universeJa: 'ポケモン世界 - 人間と不思議な生き物ポケモンが共存する世界。トレーナーはポケモンと絆を結び、バトルし、共に成長する。ポケモンはモンスターボールに入れて連れ歩き、それぞれ固有のタイプと能力を持つ。',
    setting: '관동, 성도, 호연, 신오 등 다양한 지방이 존재. 각 지방에는 8개의 체육관과 포켓몬 리그가 있으며, 챔피언에 도전하는 것이 트레이너의 꿈. 전설의 포켓몬들이 세계의 균형을 지킨다.',
    settingEn: 'Various regions exist including Kanto, Johto, Hoenn, and Sinnoh. Each region has 8 Gyms and a Pokémon League, with challenging the Champion being every Trainer\'s dream. Legendary Pokémon maintain the world\'s balance.',
    settingJa: 'カントー、ジョウト、ホウエン、シンオウなど様々な地方が存在。各地方には8つのジムとポケモンリーグがあり、チャンピオンに挑戦することがトレーナーの夢。伝説のポケモンたちが世界のバランスを守る。',
    keyElements: ['포켓몬 배틀', '체육관 뱃지', '포켓몬 리그', '진화', '타입 상성', '전설의 포켓몬'],
    keyElementsEn: ['Pokémon Battles', 'Gym Badges', 'Pokémon League', 'Evolution', 'Type Matchups', 'Legendary Pokémon'],
    keyElementsJa: ['ポケモンバトル', 'ジムバッジ', 'ポケモンリーグ', '進化', 'タイプ相性', '伝説のポケモン']
  },
  
  mtg: {
    id: 'mtg',
    name: 'Magic: The Gathering',
    nameKo: '매직: 더 개더링',
    nameJa: 'マジック：ザ・ギャザリング',
    universe: 'MTG 멀티버스 - 수많은 차원(Plane)이 존재하는 다중 우주. 플레인즈워커라 불리는 강력한 마법사들이 차원을 넘나들며 마법 전쟁을 벌인다. 5가지 색의 마나가 모든 마법의 원천이다.',
    universeEn: 'MTG Multiverse - A multiverse with countless Planes of existence. Powerful mages called Planeswalkers travel between dimensions waging magical wars. Five colors of mana are the source of all magic.',
    universeJa: 'MTGマルチバース - 無数の次元(プレイン)が存在する多元宇宙。プレインズウォーカーと呼ばれる強力な魔法使いが次元を渡り歩き、魔法戦争を繰り広げる。5色のマナがすべての魔法の源。',
    setting: '도미나리아가 중심 차원이며, 라브니카, 젠디카르, 이니스트라드 등 수많은 차원이 존재. 각 차원은 고유한 문화와 생물, 마법 체계를 가진다. 파이렉시아, 엘드라지 등 차원을 넘나드는 위협이 존재.',
    settingEn: 'Dominaria is the central plane, with countless others like Ravnica, Zendikar, and Innistrad. Each plane has unique cultures, creatures, and magical systems. Threats like Phyrexia and the Eldrazi span across planes.',
    settingJa: 'ドミナリアが中心次元で、ラヴニカ、ゼンディカー、イニストラードなど無数の次元が存在。各次元は固有の文化と生物、魔法体系を持つ。ファイレクシアやエルドラージなど次元を超える脅威が存在。',
    keyElements: ['5색 마나 (백/청/흑/적/녹)', '플레인즈워커', '차원 이동', '아티팩트', '생물 소환', '주문'],
    keyElementsEn: ['5 Colors of Mana (White/Blue/Black/Red/Green)', 'Planeswalkers', 'Plane Travel', 'Artifacts', 'Creature Summoning', 'Spells'],
    keyElementsJa: ['5色のマナ（白/青/黒/赤/緑）', 'プレインズウォーカー', '次元移動', 'アーティファクト', '生物召喚', '呪文']
  },
  
  yugioh: {
    id: 'yugioh',
    name: 'Yu-Gi-Oh!',
    nameKo: '유희왕',
    nameJa: '遊戯王',
    universe: '유희왕 세계 - 고대 이집트의 마법 게임에서 시작된 듀얼 몬스터즈의 세계. 카드에는 실제 정령과 괴물이 봉인되어 있으며, 듀얼리스트들은 카드를 통해 소환하여 싸운다. 밀레니엄 아이템이 세계의 운명을 좌우한다.',
    universeEn: 'Yu-Gi-Oh! World - A world of Duel Monsters originating from ancient Egyptian magic games. Cards contain sealed spirits and monsters that Duelists summon to battle. Millennium Items hold the power to shape the world\'s destiny.',
    universeJa: '遊戯王世界 - 古代エジプトの魔法ゲームから始まったデュエルモンスターズの世界。カードには実際の精霊と怪物が封印されており、デュエリストはカードを通じて召喚して戦う。千年アイテムが世界の運命を左右する。',
    setting: '도미노 시티가 주 무대. 무토 유희가 밀레니엄 퍼즐을 풀면서 어둠의 게임이 시작. 카이바 코퍼레이션이 듀얼 디스크를 개발하여 홀로그램 듀얼이 가능해짐. 배틀 시티, 듀얼리스트 킹덤 등 대회가 열린다.',
    settingEn: 'Domino City is the main stage. Shadow Games begin when Yugi Muto solves the Millennium Puzzle. Kaiba Corporation develops Duel Disks enabling holographic duels. Tournaments like Battle City and Duelist Kingdom are held.',
    settingJa: '童実野町が主な舞台。武藤遊戯が千年パズルを解いて闘いの儀が始まる。海馬コーポレーションがデュエルディスクを開発し、ホログラムデュエルが可能に。バトルシティ、デュエリストキングダムなどの大会が開催される。',
    keyElements: ['듀얼 몬스터즈', '밀레니엄 아이템', '어둠의 게임', '신의 카드', '융합/싱크로/엑시즈/링크 소환', '듀얼 디스크'],
    keyElementsEn: ['Duel Monsters', 'Millennium Items', 'Shadow Games', 'Egyptian God Cards', 'Fusion/Synchro/Xyz/Link Summon', 'Duel Disk'],
    keyElementsJa: ['デュエルモンスターズ', '千年アイテム', '闘いの儀', '神のカード', '融合/シンクロ/エクシーズ/リンク召喚', 'デュエルディスク']
  }
};

export function getGameWorld(game: GameType): GameWorld {
  return gameWorlds[game];
}
