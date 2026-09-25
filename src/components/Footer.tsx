import React from 'react';
import { MapPin, Phone, ChevronUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaMascotLogo } from './YamamaMascotLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-neutral-400 border-t border-neutral-900 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Col 1: Brand & Tagline with Mascot Logo */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3.5 mb-4">
              <YamamaMascotLogo
                size="sm"
                variant="avatar"
                animated={true}
                withGlow={false}
                withRing={false}
              />
              <div>
                <span className="font-display text-xl font-bold tracking-tight text-white uppercase block leading-none">
                  {RESTAURANT_INFO.name}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 mt-1 block">
                  Refill Your Energy
                </span>
              </div>
            </div>

            <p className="text-sm font-semibold text-neutral-300">
              “Charcoal Grilled Chicken • Special Flavored Rice”
            </p>
            <p className="mt-2 text-xs text-neutral-400 leading-relaxed max-w-sm">
              Yamama Shawaya in Angadipuram brings authentic Arabic charcoal-slow-fired flavors, succulent grilled chicken, and savory flavored rice to Perinthalmanna.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-400">
              <span>Dine-in</span>
              <span aria-hidden="true">·</span>
              <span>Takeaway</span>
              <span aria-hidden="true">·</span>
              <span>Home Delivery</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-red-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-red-400 transition-colors">Our Menu</a>
              </li>
              <li>
                <a href="#signatures" className="hover:text-red-400 transition-colors">Signature Dishes</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-red-400 transition-colors">Food Gallery</a>
              </li>
              <li>
                <a href="#location" className="hover:text-red-400 transition-colors">Location & Map</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-400 transition-colors">Contact & Order</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white mb-4">
              Restaurant Details
            </h4>
            
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="text-neutral-300">
                  Address: {RESTAURANT_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <div className="flex items-center gap-2 text-neutral-300 tabular-nums">
                  <a href={`tel:${RESTAURANT_INFO.phones[0].number}`} className="hover:text-white transition-colors underline">
                    {RESTAURANT_INFO.phones[0].number}
                  </a>
                  <span>|</span>
                  <a href={`tel:${RESTAURANT_INFO.phones[1].number}`} className="hover:text-white transition-colors underline">
                    {RESTAURANT_INFO.phones[1].number}
                  </a>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-neutral-400">
                <span>Opening Hours: {RESTAURANT_INFO.openingHours}</span>
                <span className="block mt-0.5 text-neutral-400">{RESTAURANT_INFO.hoursNote}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 Yamama Shawaya. All Rights Reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors p-1 focus:outline-none"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
