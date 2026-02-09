import React from 'react';
import { useLanguageStore } from '../stores/language-store';
import type { Language } from '../types/card';

const languages: { code: Language; flag: string; label: string }[] = [
  { code: 'ko', flag: '🇰🇷', label: '한국어' },
  { code: 'en', flag: '🇺🇸', label: 'EN' },
  { code: 'ja', flag: '🇯🇵', label: '日本語' },
];

interface LanguageToggleProps {
  className?: string;
  compact?: boolean;
}

export function LanguageToggle({ className = '' }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguageStore();

  return (
    <div className={`flex items-center gap-0.5 p-0.5 rounded-lg bg-white/5 ${className}`}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`
            px-2.5 py-1.5 rounded-md transition-all duration-300 
            text-[11px] font-medium tracking-wide
            ${language === lang.code
              ? 'bg-white/10 text-white/90'
              : 'text-white/30 hover:text-white/60'
            }
          `}
          title={lang.label}
        >
          {lang.code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

// Dropdown variant for mobile
export function LanguageDropdown({ className = '' }: { className?: string }) {
  const { language, setLanguage } = useLanguageStore();
  const [isOpen, setIsOpen] = React.useState(false);

  const currentLang = languages.find((l) => l.code === language)!;

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/5"
      >
        <span className="text-xs text-white/60">{currentLang.code.toUpperCase()}</span>
        <svg
          className={`w-3 h-3 text-white/30 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-32 bg-neutral-900 border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden backdrop-blur-xl">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`
                  w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors
                  ${language === lang.code
                    ? 'bg-white/5 text-white/90'
                    : 'text-white/40 hover:bg-white/5 hover:text-white/70'
                  }
                `}
              >
                <span className="text-xs font-medium">{lang.label}</span>
                {language === lang.code && (
                  <div className="w-1 h-1 rounded-full bg-amber-400" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default LanguageToggle;
