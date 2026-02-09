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
  borderStyle: 'gold' | 'silver' | 'rainbow' | 'default';
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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.3,
    });
  };

  const handleMouseLeave = () => {
    setTransform('');
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  const getBorderClass = () => {
    switch (borderStyle) {
      case 'rainbow':
        return 'border-2 animate-rainbow-border';
      case 'gold':
        return 'border-2 border-yellow-500/70 shadow-[0_0_30px_rgba(255,215,0,0.3)]';
      case 'silver':
        return 'border-2 border-gray-400/50 shadow-[0_0_20px_rgba(192,192,192,0.2)]';
      default:
        return 'border border-gray-700/50';
    }
  };

  const getRarityBadge = () => {
    switch (borderStyle) {
      case 'rainbow':
        return (
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white animate-pulse">
            ✨ LEGENDARY
          </div>
        );
      case 'gold':
        return (
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-gradient-to-r from-yellow-400 to-amber-600 text-black">
            ★ ULTRA RARE
          </div>
        );
      case 'silver':
        return (
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-gradient-to-r from-gray-300 to-gray-500 text-black">
            RARE
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Link to={`/card/${id}`} className="group block">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`
          card-aspect relative overflow-hidden rounded-xl bg-gray-900/80
          ${getBorderClass()}
          transition-all duration-300 ease-out
        `}
        style={{ transform, transformStyle: 'preserve-3d' }}
      >
        {/* Card Image */}
        <img
          src={imageUrl}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://placehold.co/252x352/1a1a1a/666?text=${encodeURIComponent(name)}`;
          }}
        />

        {/* Holographic Overlay */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 50%)`,
          }}
        />

        {/* Rainbow Shimmer for legendary cards */}
        {borderStyle === 'rainbow' && (
          <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 animate-pulse" />
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

        {/* Game Badge */}
        <div className={`absolute top-2 left-2 px-2.5 py-1 rounded-lg text-xs font-bold text-white ${gameColor} shadow-lg backdrop-blur-sm`}>
          {gameLabel}
        </div>

        {/* Rarity Badge */}
        {getRarityBadge()}

        {/* Card Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4" style={{ transform: 'translateZ(20px)' }}>
          <h3 className="font-bold text-white text-sm md:text-base leading-tight line-clamp-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {nameLocalized}
          </h3>
          {showEnglishName && (
            <p className="text-xs text-gray-300/80 mt-1 truncate">
              {name}
            </p>
          )}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">
              {highestSale}
            </span>
            {borderStyle === 'rainbow' && (
              <span className="text-xs text-purple-400">🔥</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardItem;
