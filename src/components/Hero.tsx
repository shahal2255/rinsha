import React from 'react';
import { MapPin, Phone, Flame, ChevronRight, Utensils, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaMascotLogo } from './YamamaMascotLogo';

interface HeroProps {
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-black">
      {/* Background Hero Image with dark dramatic gradient scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_shawaya_chicken_1790312667383.jpg"
          alt="Charcoal Slow-Fired Shawaya Chicken with Special Flavored Arabic Rice"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.40] contrast-[1.2]"
          referrerPolicy="no-referrer"
        />
        {/* Layered cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.18)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Animated Mascot Logo Hero Presentation */}
        <div className="mb-4 flex flex-col items-center relative group">
          <YamamaMascotLogo
            size="lg"
            variant="badge"
            animated={true}
            withRing={true}
            withSteam={true}
            withGlow={true}
            caption="Refill Your Energy"
          />
        </div>

        {/* Clean unboxed tagline & regional location anchor */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-red-400 mb-3">
          <span className="flex items-center gap-1.5 text-neutral-300">
            <Flame className="w-4 h-4 text-red-500 fill-red-500/30" />
            Authentic Arabic Grill
          </span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="text-neutral-400">{RESTAURANT_INFO.tagline}</span>
        </div>

        {/* Main Hero Title */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight uppercase max-w-4xl text-balance">
          {RESTAURANT_INFO.name}
        </h1>

        {/* Subheading */}
        <p className="mt-4 font-display text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-200 tracking-normal text-balance">
          Charcoal Slow-Fired Shawaya & Special Flavored Rice
        </p>

        {/* Supporting text */}
        <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed text-balance">
          “Authentic grilled flavors, slow-fired over charcoal and served with delicious Arabic rice.”
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenOrderModal}
            className="w-full sm:w-auto px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold text-sm sm:text-base uppercase tracking-wider rounded-lg shadow-xl shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Order Now</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-100 hover:text-white font-semibold text-sm sm:text-base uppercase tracking-wider rounded-lg border border-neutral-700/80 hover:border-neutral-500 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Utensils className="w-4 h-4 text-neutral-400" />
            <span>View Menu</span>
          </a>
        </div>

        {/* Small location indicator */}
        <a
          href="#location"
          className="mt-8 inline-flex items-center gap-2 text-xs sm:text-sm text-neutral-400 hover:text-neutral-200 transition-colors group"
        >
          <MapPin className="w-4 h-4 text-red-500 shrink-0 group-hover:animate-bounce" />
          <span className="underline underline-offset-4 decoration-neutral-700 group-hover:decoration-red-500">
            {RESTAURANT_INFO.shortLocation}
          </span>
        </a>

        {/* Quick Phone Callout */}
        <div className="mt-4 flex items-center gap-4 text-xs text-neutral-400">
          <span>Call for Takeaway / Delivery:</span>
          <a
            href={`tel:${RESTAURANT_INFO.phones[0].number}`}
            className="font-bold text-neutral-200 hover:text-red-400 transition-colors tabular-nums flex items-center gap-1"
          >
            <Phone className="w-3.5 h-3.5 text-red-500" />
            {RESTAURANT_INFO.phones[0].number}
          </a>
        </div>
      </div>
    </section>
  );
};
