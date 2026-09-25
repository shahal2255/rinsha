import React from 'react';
import { Flame, PhoneCall, ChevronRight } from 'lucide-react';
import { YamamaMascotLogo } from './YamamaMascotLogo';

interface PromoBannerProps {
  onOpenOrderModal: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onOpenOrderModal }) => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-black via-red-950/80 to-black border-y border-red-900/60 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.2)_0%,transparent_75%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Animated Mascot Logo */}
        <div className="mb-4">
          <YamamaMascotLogo
            size="md"
            variant="badge"
            animated={true}
            withRing={true}
            withSteam={true}
            withGlow={true}
          />
        </div>

        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-400 mb-3">
          <Flame className="w-4 h-4 text-red-500 fill-red-500" />
          <span>Yamama Signature Quality • Refill Your Energy</span>
        </div>

        <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase text-balance">
          Charcoal Grilled. Slow Fired. Full of Flavor.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-neutral-200 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
          “Experience the smoky taste of authentic charcoal-grilled Shawaya with our special flavored rice.”
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenOrderModal}
            className="w-full sm:w-auto px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-xl shadow-red-600/40 hover:shadow-red-600/60 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Order Now</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <a
            href="tel:9747362101"
            className="w-full sm:w-auto px-6 py-3.5 bg-black/60 hover:bg-black/90 text-neutral-200 hover:text-white font-semibold text-sm uppercase tracking-wider rounded-lg border border-neutral-700/80 transition-all duration-200 flex items-center justify-center gap-2 tabular-nums"
          >
            <PhoneCall className="w-4 h-4 text-red-500" />
            <span>Call 9747362101</span>
          </a>
        </div>
      </div>
    </section>
  );
};
