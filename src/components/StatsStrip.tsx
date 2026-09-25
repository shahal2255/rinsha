import React from 'react';
import { Star, IndianRupee, Utensils, ShoppingBag, Bike } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const StatsStrip: React.FC = () => {
  const stats = [
    {
      icon: Star,
      value: `${RESTAURANT_INFO.rating}★`,
      label: "Google Rating",
      subtext: "Verified customer reviews",
      accent: "text-amber-400"
    },
    {
      icon: IndianRupee,
      value: "₹1 – 200",
      label: "Approx. Price Range",
      subtext: "Great value dining",
      accent: "text-emerald-400"
    },
    {
      icon: Utensils,
      value: "Dine-in",
      label: "Family Seating",
      subtext: "Opens around 12:00 PM",
      accent: "text-red-400"
    },
    {
      icon: ShoppingBag,
      value: "Takeaway",
      label: "Fast Counter Service",
      subtext: "Freshly packed hot",
      accent: "text-orange-400"
    },
    {
      icon: Bike,
      value: "Delivery",
      label: "Doorstep Service",
      subtext: "Angadipuram & nearby",
      accent: "text-red-500"
    }
  ];

  return (
    <section className="relative z-20 -mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#121216]/95 backdrop-blur-md border border-neutral-800 rounded-xl p-4 sm:p-6 shadow-2xl shadow-black/80">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 divide-y sm:divide-y-0 divide-neutral-800/60">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-2 ${
                  index !== 0 ? 'pt-4 sm:pt-2' : ''
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className={`w-4 h-4 ${item.accent}`} />
                  <span className="font-display text-lg sm:text-xl font-bold text-white tabular-nums tracking-tight">
                    {item.value}
                  </span>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                  {item.label}
                </span>
                <span className="text-[11px] text-neutral-500 mt-0.5">
                  {item.subtext}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
