import React, { useRef, useState } from 'react';
import { Link } from 'react-router';

interface CardItemProps {
  id: string;
  name: string;
  nameLocalized: string;
  imageUrl: string;
  game: string;
  gameLabel: string;
  gameColor: string;
  highestSale: string;
  borderStyle?: 'gold' | 'silver' | 'rainbow' | 'normal' | 'default';
  showEnglishName?: boolean;
}

export function CardItem({
  id,
  name,
  nameLocalized,
  imageUrl,
  gameLabel,
  gameColor,
  highestSale,
  borderStyle,
  showEnglishName = false,
}: CardItemProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setTransform('');
    setGlare({ x: 50, y: 50, opacity: 0 });
    setIsHovered(false);
  };

  const getBorderClass = () => {
    switch (borderStyle) {
      case 'rainbow':
        return 'ring-1 ring-white/20';
      case 'gold':
        return 'ring-1 ring-amber-400/40';
      case 'silver':
        return 'ring-1 ring-gray-400/30';
      case 'normal':
      default:
        return 'ring-1 ring-white/5';
    }
  };

  const getGlowClass = () => {
    if (!isHovered) return '';
    switch (borderStyle) {
      case 'rainbow':
        return 'shadow-[0_8px_40px_-12px_rgba(168,85,247,0.4)]';
      case 'gold':
        return 'shadow-[0_8px_40px_-12px_rgba(251,191,36,0.3)]';
      case 'silver':
        return 'shadow-[0_8px_40px_-12px_rgba(156,163,175,0.25)]';
      default:
        return 'shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]';
    }
  };

  // 희귀도 표시 제거 - 모든 카드가 전설급이라 불필요

  return (
    <Link to={`/card/${id}`} className="group block">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
          card-aspect relative overflow-hidden rounded-2xl bg-neutral-900/90
          ${getBorderClass()}
          ${getGlowClass()}
          transition-all duration-500 ease-out
        `}
        style={{ transform, transformStyle: 'preserve-3d' }}
      >
        {/* Card Image - Artwork focused crop */}
        <img
          src={imageUrl}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://placehold.co/252x352/0a0a0a/333?text=${encodeURIComponent(name)}`;
          }}
        />

        {/* Subtle Holographic Glare */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 60%)`,
          }}
        />

        {/* Rainbow Shimmer - More subtle */}
        {borderStyle === 'rainbow' && isHovered && (
          <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 via-pink-500/50 to-cyan-500/50" />
          </div>
        )}

        {/* Bottom Gradient - Natural fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

        {/* Game Badge - Minimal */}
        <div className={`
          absolute top-3 left-3 
          px-2 py-0.5 
          rounded-md 
          text-[10px] font-medium tracking-wide uppercase
          text-white/90
          bg-black/40 backdrop-blur-sm
          border border-white/5
        `}>
          {gameLabel}
        </div>

        {/* 희귀도 표시 제거됨 */}

        {/* Card Info - Clean bottom section */}
        <div className="absolute bottom-0 left-0 right-0 p-4" style={{ transform: 'translateZ(20px)' }}>
          <h3 className="font-medium text-white/95 text-sm leading-snug line-clamp-2 tracking-tight">
            {nameLocalized}
          </h3>
          
          {showEnglishName && (
            <p className="text-[11px] text-white/40 mt-1 truncate font-light">
              {name}
            </p>
          )}
          
          <div className="flex items-center gap-2 mt-2.5">
            <span className="text-sm font-semibold text-amber-400/90 tracking-tight">
              {highestSale}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardItem;
