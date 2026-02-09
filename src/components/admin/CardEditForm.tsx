import { useState, useEffect } from 'react';
import type { Card, GameType, BorderStyle } from '../../types/card';
import { useCardStore } from '../../stores/card-store';

interface Props {
  card: Card;
}

type TabType = 'basic' | 'persona' | 'multilang' | 'price';

export default function CardEditForm({ card }: Props) {
  const updateCard = useCardStore((s) => s.updateCard);
  const [activeTab, setActiveTab] = useState<TabType>('basic');
  const [saved, setSaved] = useState(false);
  
  const [form, setForm] = useState({
    // Basic
    name: '',
    nameKo: '',
    nameJa: '',
    game: 'pokemon' as GameType,
    year: 2024,
    imageUrl: '',
    borderStyle: 'normal' as BorderStyle,
    
    // Persona
    personaStyle: '',
    greeting: '',
    greetingEn: '',
    greetingJa: '',
    traits: '',
    
    // Descriptions
    description: '',
    descriptionEn: '',
    descriptionJa: '',
    history: '',
    
    // Price
    rarity: '',
    highestSale: '',
    currentPrice: '',
  });

  useEffect(() => {
    setForm({
      name: card.name,
      nameKo: card.nameKo,
      nameJa: card.nameJa || '',
      game: card.game,
      year: card.year,
      imageUrl: card.imageUrl,
      borderStyle: card.borderStyle || 'normal',
      
      personaStyle: card.persona.style,
      greeting: card.persona.greeting,
      greetingEn: card.persona.greetingEn || '',
      greetingJa: card.persona.greetingJa || '',
      traits: card.persona.traits.join(', '),
      
      description: card.description,
      descriptionEn: card.descriptionEn || '',
      descriptionJa: card.descriptionJa || '',
      history: card.history,
      
      rarity: card.rarity,
      highestSale: card.highestSale,
      currentPrice: card.currentPrice,
    });
    setSaved(false);
  }, [card.id]);

  const handleSave = () => {
    updateCard(card.id, {
      name: form.name,
      nameKo: form.nameKo,
      nameJa: form.nameJa,
      game: form.game,
      year: form.year,
      imageUrl: form.imageUrl,
      borderStyle: form.borderStyle,
      
      persona: {
        style: form.personaStyle,
        greeting: form.greeting,
        greetingEn: form.greetingEn,
        greetingJa: form.greetingJa,
        traits: form.traits.split(',').map((t) => t.trim()).filter(Boolean),
      },
      
      description: form.description,
      descriptionEn: form.descriptionEn,
      descriptionJa: form.descriptionJa,
      history: form.history,
      
      rarity: form.rarity,
      highestSale: form.highestSale,
      currentPrice: form.currentPrice,
    });
    
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const tabs: { key: TabType; label: string; icon: string }[] = [
    { key: 'basic', label: '기본 정보', icon: '📋' },
    { key: 'persona', label: '페르소나', icon: '💬' },
    { key: 'multilang', label: '다국어', icon: '🌐' },
    { key: 'price', label: '가격/희소성', icon: '💰' },
  ];

  const inputClass = "w-full px-3 py-2.5 rounded-lg bg-gray-900 border border-gray-700 text-sm text-white placeholder-gray-500 outline-none focus:border-purple-500 transition-colors";
  const labelClass = "block text-xs font-medium text-gray-400 mb-1.5";
  const textareaClass = "w-full px-3 py-2.5 rounded-lg bg-gray-900 border border-gray-700 text-sm text-white placeholder-gray-500 outline-none focus:border-purple-500 transition-colors resize-none";

  return (
    <div className="glass-card rounded-xl p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          {card.imageUrl && (
            <img
              src={card.imageUrl}
              alt={card.nameKo}
              className="w-12 h-16 rounded object-cover"
            />
          )}
          <div>
            <h2 className="text-lg font-bold text-white">
              {card.nameKo}
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              ID: {card.id}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {saved && (
            <span className="text-sm text-green-400 animate-pulse">
              ✓ 저장됨
            </span>
          )}
          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium hover:from-purple-500 hover:to-pink-500 transition-all"
          >
            저장
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-5 p-1 bg-gray-900/50 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
              activeTab === tab.key
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            <span className="mr-1.5">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-4">
        {/* Basic Tab */}
        {activeTab === 'basic' && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>영문 이름</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="English Name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>한글 이름</label>
                <input
                  type="text"
                  value={form.nameKo}
                  onChange={(e) => setForm({ ...form, nameKo: e.target.value })}
                  placeholder="한글 이름"
                  className={inputClass}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className={labelClass}>게임</label>
                <select
                  value={form.game}
                  onChange={(e) => setForm({ ...form, game: e.target.value as GameType })}
                  className={inputClass}
                >
                  <option value="pokemon">포켓몬 TCG</option>
                  <option value="mtg">Magic: The Gathering</option>
                  <option value="yugioh">유희왕</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>발매년도</label>
                <input
                  type="number"
                  value={form.year}
                  onChange={(e) => setForm({ ...form, year: parseInt(e.target.value) || 2024 })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>테두리 스타일</label>
                <select
                  value={form.borderStyle}
                  onChange={(e) => setForm({ ...form, borderStyle: e.target.value as BorderStyle })}
                  className={inputClass}
                >
                  <option value="normal">기본</option>
                  <option value="gold">골드</option>
                  <option value="silver">실버</option>
                  <option value="rainbow">레인보우</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className={labelClass}>이미지 URL</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={form.imageUrl}
                  onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                  placeholder="https://..."
                  className={`${inputClass} flex-1`}
                />
                {form.imageUrl && (
                  <img
                    src={form.imageUrl}
                    alt="preview"
                    className="w-16 h-22 rounded object-cover border border-gray-700"
                  />
                )}
              </div>
            </div>
            
            <div>
              <label className={labelClass}>히스토리 / 역사</label>
              <textarea
                value={form.history}
                onChange={(e) => setForm({ ...form, history: e.target.value })}
                placeholder="카드의 역사와 배경..."
                rows={3}
                className={textareaClass}
              />
            </div>
          </>
        )}

        {/* Persona Tab */}
        {activeTab === 'persona' && (
          <>
            <div>
              <label className={labelClass}>페르소나 스타일</label>
              <textarea
                value={form.personaStyle}
                onChange={(e) => setForm({ ...form, personaStyle: e.target.value })}
                placeholder="카드의 성격과 말투를 설명..."
                rows={3}
                className={textareaClass}
              />
              <p className="text-xs text-gray-500 mt-1">
                예: "겸손하고 예술적인 영혼. 약간 수줍지만 그림 이야기가 나오면 눈이 반짝임."
              </p>
            </div>
            
            <div>
              <label className={labelClass}>인사말 (한국어)</label>
              <textarea
                value={form.greeting}
                onChange={(e) => setForm({ ...form, greeting: e.target.value })}
                placeholder="카드가 처음 대화할 때 하는 인사..."
                rows={3}
                className={textareaClass}
              />
            </div>
            
            <div>
              <label className={labelClass}>특성 (쉼표로 구분)</label>
              <input
                type="text"
                value={form.traits}
                onChange={(e) => setForm({ ...form, traits: e.target.value })}
                placeholder="예술적 감성, 겸손함, 희소성 자부심"
                className={inputClass}
              />
            </div>
          </>
        )}

        {/* Multilang Tab */}
        {activeTab === 'multilang' && (
          <>
            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
              <h3 className="text-sm font-medium text-yellow-400 mb-3">🇯🇵 일본어</h3>
              <div className="space-y-3">
                <div>
                  <label className={labelClass}>일본어 이름</label>
                  <input
                    type="text"
                    value={form.nameJa}
                    onChange={(e) => setForm({ ...form, nameJa: e.target.value })}
                    placeholder="日本語名"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>일본어 인사말</label>
                  <textarea
                    value={form.greetingJa}
                    onChange={(e) => setForm({ ...form, greetingJa: e.target.value })}
                    placeholder="日本語の挨拶..."
                    rows={2}
                    className={textareaClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>일본어 설명</label>
                  <textarea
                    value={form.descriptionJa}
                    onChange={(e) => setForm({ ...form, descriptionJa: e.target.value })}
                    placeholder="日本語の説明..."
                    rows={2}
                    className={textareaClass}
                  />
                </div>
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
              <h3 className="text-sm font-medium text-blue-400 mb-3">🇺🇸 영어</h3>
              <div className="space-y-3">
                <div>
                  <label className={labelClass}>영어 인사말</label>
                  <textarea
                    value={form.greetingEn}
                    onChange={(e) => setForm({ ...form, greetingEn: e.target.value })}
                    placeholder="English greeting..."
                    rows={2}
                    className={textareaClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>영어 설명</label>
                  <textarea
                    value={form.descriptionEn}
                    onChange={(e) => setForm({ ...form, descriptionEn: e.target.value })}
                    placeholder="English description..."
                    rows={2}
                    className={textareaClass}
                  />
                </div>
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
              <h3 className="text-sm font-medium text-green-400 mb-3">🇰🇷 한국어</h3>
              <div>
                <label className={labelClass}>한국어 설명</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="한국어 설명..."
                  rows={2}
                  className={textareaClass}
                />
              </div>
            </div>
          </>
        )}

        {/* Price Tab */}
        {activeTab === 'price' && (
          <>
            <div>
              <label className={labelClass}>희귀도 / Rarity</label>
              <input
                type="text"
                value={form.rarity}
                onChange={(e) => setForm({ ...form, rarity: e.target.value })}
                placeholder="예: 1st Edition Holo (Base Set)"
                className={inputClass}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>최고 판매가</label>
                <input
                  type="text"
                  value={form.highestSale}
                  onChange={(e) => setForm({ ...form, highestSale: e.target.value })}
                  placeholder="$420,000 (2022)"
                  className={inputClass}
                />
                <p className="text-xs text-gray-500 mt-1">
                  형식: $금액 (연도)
                </p>
              </div>
              <div>
                <label className={labelClass}>현재 시세</label>
                <input
                  type="text"
                  value={form.currentPrice}
                  onChange={(e) => setForm({ ...form, currentPrice: e.target.value })}
                  placeholder="$200,000~400,000"
                  className={inputClass}
                />
                <p className="text-xs text-gray-500 mt-1">
                  형식: $최저~최고
                </p>
              </div>
            </div>
            
            {/* Price Preview */}
            <div className="p-4 rounded-lg bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-700/30">
              <h3 className="text-sm font-medium text-yellow-400 mb-2">💎 가격 미리보기</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-yellow-400">
                  {form.highestSale || '-'}
                </span>
                <span className="text-gray-400 text-sm">최고가</span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-lg text-gray-300">
                  {form.currentPrice || '-'}
                </span>
                <span className="text-gray-500 text-sm">현재 시세</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
