import React from 'react';
import { MapPin, Phone, Clock, Bike, Navigation, Utensils, ShoppingBag, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const RestaurantInfo: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-[#0e0e12] relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us or Order Delivery</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
            Location & Contact
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            Conveniently situated on Calicut Road, Angadipuram near Perinthalmanna, Malappuram.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Location */}
          <div className="bg-[#141418] border border-neutral-800 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-800/40 flex items-center justify-center text-red-500 mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                Location
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {RESTAURANT_INFO.address}
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-neutral-800/80">
              <span className="text-[11px] text-neutral-400 block font-medium">
                Calicut Road Landmark
              </span>
            </div>
          </div>

          {/* Card 2: Phone Numbers */}
          <div className="bg-[#141418] border border-neutral-800 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-800/40 flex items-center justify-center text-red-500 mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                Phone Orders
              </h3>
              <div className="mt-3 space-y-2">
                {RESTAURANT_INFO.phones.map((phone, idx) => (
                  <div key={idx}>
                    <span className="text-[11px] text-neutral-400 block">
                      {phone.label}
                    </span>
                    <a
                      href={phone.tel}
                      className="font-display text-base font-bold text-white hover:text-red-400 transition-colors tabular-nums inline-flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-red-500" />
                      {phone.number}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-800/80">
              <span className="text-[11px] text-neutral-400 block">
                Tap to call instantly
              </span>
            </div>
          </div>

          {/* Card 3: Opening Hours */}
          <div className="bg-[#141418] border border-neutral-800 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-800/40 flex items-center justify-center text-red-500 mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                Opening Hours
              </h3>
              <p className="mt-2 text-sm font-semibold text-neutral-100 tabular-nums">
                {RESTAURANT_INFO.openingHours}
              </p>
              <div className="mt-3 p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800">
                <p className="text-[11px] text-amber-300/90 leading-tight">
                  {RESTAURANT_INFO.hoursNote}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-800/80">
              <span className="text-[11px] text-neutral-400 block">
                Open 7 Days a Week
              </span>
            </div>
          </div>

          {/* Card 4: Services */}
          <div className="bg-[#141418] border border-neutral-800 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-800/40 flex items-center justify-center text-red-500 mb-4">
                <Bike className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                Services
              </h3>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-neutral-300">
                <li className="flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-red-500" />
                  <span>Dine-in (Family Friendly)</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-red-500" />
                  <span>Takeaway (Freshly Packed)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Bike className="w-4 h-4 text-red-500" />
                  <span>Home Delivery (Doorstep)</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-800/80">
              <span className="text-[11px] text-neutral-400 block">
                Call for delivery radius
              </span>
            </div>
          </div>

        </div>

        {/* Embedded Google Map + Directions Banner */}
        <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-[#121216] shadow-2xl">
          <div className="p-4 sm:p-6 border-b border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 mb-1">
                <span>Google Maps Landmark</span>
                <span aria-hidden="true">·</span>
                <span>Angadipuram</span>
              </div>
              <h4 className="font-display text-lg font-bold text-white">
                Yamama Shawaya, Calicut Road
              </h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                Oradampalam-Valiyavitilpadi, Angadipuram, Perinthalmanna, Kerala 679321
              </p>
            </div>

            {/* GET DIRECTIONS BUTTON */}
            <a
              href={RESTAURANT_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer active:scale-95"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Map Frame */}
          <div className="relative w-full h-[360px] sm:h-[420px] bg-neutral-900">
            <iframe
              title="Yamama Shawaya Location Map"
              src={RESTAURANT_INFO.embedMapUrl}
              className="w-full h-full border-0 filter invert-[0.9] hue-rotate-180 contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {/* Visual indicator badge in the corner */}
            <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-2 rounded-lg border border-neutral-800 text-xs text-neutral-300 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span>Yamama Shawaya • Calicut Road</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
