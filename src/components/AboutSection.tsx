import React from 'react';
import { Flame, Drumstick, UtensilsCrossed, Heart, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaMascotLogo } from './YamamaMascotLogo';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Flame,
      title: "Charcoal Slow-Fired",
      desc: "Slow-roasted over natural wood coals to lock in maximum moisture and smoky char."
    },
    {
      icon: Drumstick,
      title: "Fresh Grilled Chicken",
      desc: "Tender, high quality cuts marinated daily with authentic Arabic spices and herbs."
    },
    {
      icon: UtensilsCrossed,
      title: "Special Flavored Rice",
      desc: "Fragrant Bishawari long-grain basmati seasoned with whole spices and caramelized notes."
    },
    {
      icon: Heart,
      title: "Made for Food Lovers",
      desc: "Generous portions, homestyle Arabian warmth, and rich accompaniments like garlic toum."
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#0a0a0c] relative overflow-hidden border-t border-neutral-900">
      {/* Subtle background red glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-950/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-950/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Story with Restaurant Ambiance */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group">
              <img
                src="/src/assets/images/restaurant_atmosphere_dining_1790312717045.jpg"
                alt="Yamama Shawaya dining atmosphere in Angadipuram, Perinthalmanna"
                className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              {/* Floating Animated Mascot Seal on top right of image */}
              <div className="absolute top-4 right-4 z-20">
                <YamamaMascotLogo
                  size="md"
                  variant="stamp"
                  animated={true}
                  withRing={true}
                  withSteam={true}
                  withGlow={true}
                />
              </div>

              {/* Overlay quote card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#141418]/90 backdrop-blur-md border border-neutral-800/80">
                <p className="text-xs uppercase tracking-widest text-red-400 font-semibold mb-1">
                  Taste the Tradition
                </p>
                <p className="text-sm font-medium text-neutral-200">
                  {RESTAURANT_INFO.tagline}
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-neutral-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
                  <span>Dine-in, Takeaway & Doorstep Delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & 4 Feature Cards */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 mb-3">
              <span>About Yamama Shawaya</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-400">Angadipuram, Perinthalmanna</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase text-balance">
              The Taste of Authentic Grill
            </h2>

            <p className="mt-6 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed text-balance">
              “Yamama Shawaya brings together the rich flavors of Arabic cuisine and the irresistible taste of charcoal-grilled chicken. Our signature Shawaya is slow-fired over charcoal to create a smoky, juicy and flavorful experience, perfectly paired with specially flavored Arabic rice.”
            </p>

            {/* 4 Feature Cards Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#121216] border border-neutral-800/80 hover:border-neutral-700 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-red-950/60 border border-red-800/40 flex items-center justify-center text-red-400 mb-3 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display text-base font-bold text-white tracking-wide">
                      {feat.title}
                    </h3>
                    <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
