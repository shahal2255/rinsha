import React from 'react';
import { Phone, ChevronRight, Sparkles } from 'lucide-react';
import { SIGNATURE_DISHES, DishItem } from '../data/restaurantData';
import { YamamaMascotLogo } from './YamamaMascotLogo';

interface SignaturesSectionProps {
  onSelectDishForOrder: (dish: DishItem) => void;
}

export const SignaturesSection: React.FC<SignaturesSectionProps> = ({ onSelectDishForOrder }) => {
  return (
    <section id="signatures" className="py-20 bg-[#0e0e12] relative border-t border-neutral-800/80">
      {/* Background ambient accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Mascot Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <YamamaMascotLogo
                size="md"
                variant="badge"
                animated={true}
                withRing={true}
                withSteam={true}
                withGlow={true}
              />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Chef's Masterpieces</span>
                <span aria-hidden="true">·</span>
                <span className="text-neutral-400">Refill Your Energy</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
                Our Signatures
              </h2>
            </div>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-neutral-400 max-w-md">
            Hand-seasoned with authentic Arabian spices, slow-grilled over charcoal embers, and served piping hot.
          </p>
        </div>

        {/* 5 Signature Dish Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SIGNATURE_DISHES.map((dish, idx) => (
            <div
              key={dish.id}
              className="group rounded-2xl bg-[#141418] border border-neutral-800/90 overflow-hidden hover:border-red-900/60 hover:shadow-2xl hover:shadow-red-950/20 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Editorial Number Index */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141418] via-transparent to-black/30" />
                
                {/* Editorial Number Index (Human editorial numbering) */}
                <div className="absolute top-4 left-4 font-display font-bold text-sm tracking-wider text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-md border border-neutral-800">
                  {dish.signatureNumber}
                </div>

                {/* Animated Chef Mascot Badge on Dish 01 (Shawaya) */}
                {idx === 0 && (
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-950/90 border border-amber-400 text-amber-300 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md shadow-lg animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Chef's Choice</span>
                  </div>
                )}

                {dish.spicyLevel && idx !== 0 && (
                  <div className="absolute top-4 right-4 text-xs font-semibold text-neutral-300 bg-neutral-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-neutral-800">
                    {dish.spicyLevel} Spice
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-white tracking-tight group-hover:text-red-400 transition-colors">
                    {dish.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {dish.description}
                  </p>

                  {/* Confirmed combo pricing or restaurant note */}
                  <div className="mt-4 pt-3 border-t border-neutral-800/80">
                    {dish.comboPrices ? (
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-red-400 block mb-1.5">
                          Confirmed Combo Options
                        </span>
                        <div className="grid grid-cols-3 gap-2">
                          {dish.comboPrices.map((combo, cIdx) => (
                            <div
                              key={cIdx}
                              className="text-center p-2 rounded-lg bg-neutral-900/90 border border-neutral-800"
                            >
                              <span className="text-[11px] text-neutral-400 block truncate">
                                {combo.label.replace(' Plate', '')}
                              </span>
                              <span className="font-display font-bold text-sm text-white tabular-nums">
                                ₹{combo.price}
                              </span>
                            </div>
                          ))}
                        </div>
                        {dish.priceNote && (
                          <p className="mt-2 text-[11px] text-neutral-400 italic">
                            {dish.priceNote}
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center justify-between text-xs text-neutral-400 py-1">
                        <span>Pricing:</span>
                        <span className="font-semibold text-neutral-200">
                          {dish.priceNote || 'Price available at restaurant'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="mt-6 pt-2">
                  <button
                    onClick={() => onSelectDishForOrder(dish)}
                    className="w-full py-2.5 px-4 rounded-lg bg-neutral-900 hover:bg-red-600 text-neutral-200 hover:text-white font-bold text-xs uppercase tracking-wider border border-neutral-700/60 hover:border-red-500 shadow-sm transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-red-500 group-hover/btn:text-white transition-colors" />
                    <span>Order Now</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
