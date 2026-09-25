import React from 'react';
import { Sparkles } from 'lucide-react';

interface YamamaMascotLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'badge' | 'avatar' | 'floating' | 'banner' | 'stamp';
  animated?: boolean;
  withRing?: boolean;
  withSteam?: boolean;
  withGlow?: boolean;
  caption?: string;
  className?: string;
}

export const YamamaMascotLogo: React.FC<YamamaMascotLogoProps> = ({
  size = 'md',
  variant = 'badge',
  animated = true,
  withRing = true,
  withSteam = true,
  withGlow = true,
  caption,
  className = ''
}) => {
  // Size mapping for the circular image container
  const sizeClasses = {
    xs: 'w-8 h-8',
    sm: 'w-10 h-10',
    md: 'w-16 h-16 sm:w-20 sm:h-20',
    lg: 'w-24 h-24 sm:w-32 sm:h-32',
    xl: 'w-36 h-36 sm:w-44 sm:h-44',
    '2xl': 'w-52 h-52 sm:w-64 sm:h-64'
  };

  const imageSrc = '/src/assets/images/yamama_mascot_logo_1790313980923.jpg';

  if (variant === 'avatar') {
    return (
      <div className={`relative inline-block ${className}`}>
        <div
          className={`rounded-full overflow-hidden border-2 border-amber-400 bg-neutral-900 shadow-md shadow-red-900/40 relative group ${sizeClasses[size]} ${
            animated ? 'hover:scale-110 transition-transform duration-300' : ''
          }`}
        >
          <img
            src={imageSrc}
            alt="Yamama Shawaya Mascot"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {animated && (
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative inline-flex flex-col items-center select-none ${
        animated ? 'animate-mascot-bob' : ''
      } ${className}`}
    >
      {/* Outer ambient red & gold glow halo */}
      {withGlow && (
        <div className="absolute inset-0 -m-3 sm:-m-4 bg-gradient-to-r from-red-600/25 via-amber-500/20 to-red-600/25 rounded-full blur-xl pointer-events-none" />
      )}

      {/* Main Logo Container */}
      <div className="relative group">
        {/* Animated Rotating Golden Energy Orbit Ring */}
        {withRing && (
          <div className="absolute -inset-1.5 sm:-inset-2 rounded-full border border-dashed border-amber-400/50 pointer-events-none animate-energy-spin" />
        )}

        {/* Floating Steam from Cloche Platter */}
        {withSteam && (size === 'lg' || size === 'xl' || size === '2xl' || size === 'md') && (
          <div className="absolute top-1 right-2 sm:right-4 z-20 pointer-events-none flex gap-1">
            <span className="w-1.5 h-3 rounded-full bg-white/40 blur-[1px] animate-steam-1 block" />
            <span className="w-1 h-3.5 rounded-full bg-amber-200/50 blur-[1px] animate-steam-2 block -mt-1" />
          </div>
        )}

        {/* Badge Round Border Frame */}
        <div
          className={`rounded-full overflow-hidden border-2 sm:border-3 border-amber-400 p-0.5 bg-gradient-to-b from-amber-400 via-red-600 to-amber-500 shadow-2xl shadow-red-950/60 relative z-10 transition-transform duration-300 group-hover:scale-105 ${sizeClasses[size]}`}
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-[#121216]">
            <img
              src={imageSrc}
              alt="Yamama Shawaya Logo - Chicken Chef holding cloche, Refill Your Energy"
              className="w-full h-full object-cover object-center scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Refill Your Energy mini stamp */}
        {variant === 'stamp' && (
          <div className="absolute -bottom-2 -right-2 z-20 bg-red-600 border border-amber-400 text-white font-display font-extrabold text-[9px] uppercase px-2 py-0.5 rounded-full shadow-lg flex items-center gap-1 tracking-wider whitespace-nowrap">
            <Sparkles className="w-2.5 h-2.5 text-amber-300" />
            <span>Refill Energy</span>
          </div>
        )}
      </div>

      {/* Optional Slogan / Energy Caption below */}
      {caption && (
        <div className="mt-2.5 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-700/60 text-amber-300 font-display font-bold text-[11px] sm:text-xs tracking-wider uppercase shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
            {caption}
          </span>
        </div>
      )}
    </div>
  );
};
