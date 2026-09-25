import React from 'react';
import { Phone, Bike, Flame, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaMascotLogo } from './YamamaMascotLogo';

interface OrderSectionProps {
  onOpenOrderModal: () => void;
}

export const OrderSection: React.FC<OrderSectionProps> = ({ onOpenOrderModal }) => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#0a0a0c] via-[#121216] to-[#0a0a0c] relative border-t border-neutral-900">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.18)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Animated Mascot Badge */}
        <div className="mb-4">
          <YamamaMascotLogo
            size="lg"
            variant="badge"
            animated={true}
            withRing={true}
            withSteam={true}
            withGlow={true}
            caption="Refill Your Energy!"
          />
        </div>

        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 mb-3">
          <Flame className="w-4 h-4 fill-red-500 text-red-500" />
          <span>Hot From The Embers</span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight uppercase text-balance">
          Hungry? Let's Get Grilling.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-xl mx-auto font-normal leading-relaxed text-balance">
          “Order your favorite Shawaya, Al Faham or Arabic rice combo today.”
        </p>

        {/* Buttons for Direct Ordering */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${RESTAURANT_INFO.phones[0].number}`}
            className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-red-600/40 hover:shadow-red-600/60 transition-all duration-200 active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
          >
            <Phone className="w-5 h-5 fill-white" />
            <span>Call to Order: {RESTAURANT_INFO.phones[0].number}</span>
          </a>

          <a
            href={`tel:${RESTAURANT_INFO.phones[1].number}`}
            className="w-full sm:w-auto px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-neutral-100 hover:text-white font-bold text-sm uppercase tracking-wider rounded-xl border border-neutral-700/80 hover:border-neutral-500 transition-all duration-200 active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
          >
            <Bike className="w-5 h-5 text-red-500" />
            <span>Order For Delivery: {RESTAURANT_INFO.phones[1].number}</span>
          </a>
        </div>

        {/* Quick Helper Button */}
        <div className="mt-6">
          <button
            onClick={onOpenOrderModal}
            className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-red-400 transition-colors underline underline-offset-4 cursor-pointer"
          >
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Open combo calculator & order helper</span>
          </button>
        </div>

      </div>
    </section>
  );
};
