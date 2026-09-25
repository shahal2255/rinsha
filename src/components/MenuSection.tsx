import React, { useState, useMemo } from 'react';
import { Search, Phone, Flame, Info } from 'lucide-react';
import { ALL_MENU_ITEMS, DishItem } from '../data/restaurantData';
import { YamamaMascotLogo } from './YamamaMascotLogo';

interface MenuSectionProps {
  onSelectDishForOrder: (dish: DishItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectDishForOrder }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Shawaya', 'Rice Combos', 'Al Faham', 'Mandi', 'Fast Food'];

  const filteredItems = useMemo(() => {
    return ALL_MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 bg-[#0a0a0c] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subheading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 mb-2">
            <Flame className="w-3.5 h-3.5" />
            <span>Digital Dining Menu</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
            Our Menu
          </h2>
          <p className="mt-3 text-base text-neutral-300 font-medium">
            Freshly grilled. Richly flavored. Made to satisfy.
          </p>
        </div>

        {/* FEATURED: SHAWAYA + RICE COMBOS SPECIAL BANNER BOX */}
        <div className="mb-12 rounded-2xl bg-gradient-to-r from-red-950/70 via-[#18181f] to-red-950/50 border border-red-800/60 p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="hidden sm:block shrink-0">
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
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 mb-1">
                  <span>Yamama House Special</span>
                  <span aria-hidden="true">·</span>
                  <span>Best Seller</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-amber-400">Refill Your Energy</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                  Shawaya + Rice Combos
                </h3>
                <p className="mt-1 text-sm text-neutral-300">
                  Charcoal slow-fired chicken paired with signature fragrant long-grain Arabic rice.
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-amber-300 font-medium">
                  <Info className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>“Served with special flavored Arabic rice.”</span>
                </div>
              </div>
            </div>

            {/* 3 Price Cards in bold */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto">
              <div className="bg-[#121216]/95 border border-red-900/50 rounded-xl p-4 text-center">
                <span className="text-xs uppercase font-semibold text-neutral-400 block">
                  Quarter Plate
                </span>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-white tabular-nums block mt-1">
                  ₹180
                </span>
                <span className="text-[11px] text-neutral-400">Quarter chicken + Rice</span>
              </div>

              <div className="bg-[#121216]/95 border border-red-600/60 rounded-xl p-4 text-center ring-1 ring-red-600/30">
                <span className="text-xs uppercase font-semibold text-red-400 block">
                  Half Plate
                </span>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-white tabular-nums block mt-1">
                  ₹340
                </span>
                <span className="text-[11px] text-neutral-400">Half chicken + Rice</span>
              </div>

              <div className="bg-[#121216]/95 border border-red-900/50 rounded-xl p-4 text-center">
                <span className="text-xs uppercase font-semibold text-neutral-400 block">
                  Full Plate
                </span>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-white tabular-nums block mt-1">
                  ₹660
                </span>
                <span className="text-[11px] text-neutral-400">Full chicken + Grand Rice</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Category Tabs (Functional buttons as per Constitution Section 1.A) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                      : 'bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes..."
              className="w-full pl-9 pr-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#121216] rounded-2xl border border-neutral-800">
            <p className="text-neutral-400 text-sm">No items found matching your filter.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-red-400 hover:text-red-300 underline underline-offset-4 cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#121216] border border-neutral-800/90 rounded-xl overflow-hidden hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                      {item.category}
                    </span>
                    {/* Price display: confirmed price in bold or explicit notice */}
                    {item.price ? (
                      <span className="font-display font-bold text-lg text-white tabular-nums">
                        ₹{item.price}
                      </span>
                    ) : (
                      <span className="text-[11px] text-neutral-400 font-medium bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                        {item.priceNote || 'Price available at restaurant'}
                      </span>
                    )}
                  </div>

                  <h4 className="font-display text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                    {item.name}
                  </h4>

                  <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>

                  {item.priceNote && item.price && (
                    <p className="mt-2 text-[11px] text-amber-400/90 italic">
                      {item.priceNote}
                    </p>
                  )}
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-neutral-800/60 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400">Fresh Charcoal Grill</span>
                  <button
                    onClick={() => onSelectDishForOrder(item)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-red-400 hover:text-white hover:bg-red-600 rounded-md transition-colors cursor-pointer"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pricing notice note */}
        <div className="mt-8 text-center text-xs text-neutral-500">
          Note: Menu prices and availability are subject to daily fresh preparations. Call{' '}
          <a href="tel:9747362101" className="text-neutral-300 hover:text-white underline">
            9747362101
          </a>{' '}
          or{' '}
          <a href="tel:9747362102" className="text-neutral-300 hover:text-white underline">
            9747362102
          </a>{' '}
          to confirm current specials.
        </div>

      </div>
    </section>
  );
};
