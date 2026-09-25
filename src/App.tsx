/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { AboutSection } from './components/AboutSection';
import { SignaturesSection } from './components/SignaturesSection';
import { MenuSection } from './components/MenuSection';
import { PromoBanner } from './components/PromoBanner';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { RestaurantInfo } from './components/RestaurantInfo';
import { OrderSection } from './components/OrderSection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { DishItem, RESTAURANT_INFO } from './data/restaurantData';
import { Phone } from 'lucide-react';
import { YamamaMascotLogo } from './components/YamamaMascotLogo';

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState<boolean>(false);
  const [selectedDish, setSelectedDish] = useState<DishItem | null>(null);

  const handleOpenOrderModal = () => {
    setSelectedDish(null);
    setOrderModalOpen(true);
  };

  const handleSelectDishForOrder = (dish: DishItem) => {
    setSelectedDish(dish);
    setOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Top sticky navigation adhering to 3-zone contract */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      <main className="flex-1">
        {/* Cinematic Hero */}
        <Hero onOpenOrderModal={handleOpenOrderModal} />

        {/* Stats Strip */}
        <StatsStrip />

        {/* About Section */}
        <AboutSection />

        {/* Signatures Section */}
        <SignaturesSection onSelectDishForOrder={handleSelectDishForOrder} />

        {/* Digital Menu Section */}
        <MenuSection onSelectDishForOrder={handleSelectDishForOrder} />

        {/* Promo Banner */}
        <PromoBanner onOpenOrderModal={handleOpenOrderModal} />

        {/* Food Gallery Section */}
        <GallerySection />

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Restaurant Location & Info */}
        <RestaurantInfo />

        {/* Order Section CTA */}
        <OrderSection onOpenOrderModal={handleOpenOrderModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call to Order Action on bottom right (mobile & desktop friendly) */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={`tel:${RESTAURANT_INFO.phones[0].number}`}
          className="flex items-center gap-2.5 pl-2 pr-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-2xl shadow-red-600/50 hover:shadow-red-600/70 border border-amber-400/60 transition-all duration-200 active:scale-95 group"
          title={`Call to Order: ${RESTAURANT_INFO.phones[0].number}`}
        >
          <YamamaMascotLogo size="xs" variant="avatar" animated={true} withGlow={false} withRing={false} />
          <Phone className="w-3.5 h-3.5 fill-white shrink-0" />
          <span className="hidden sm:inline">Order: {RESTAURANT_INFO.phones[0].number}</span>
          <span className="sm:hidden">Order</span>
        </a>
      </div>

      {/* Interactive Order Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        selectedDish={selectedDish}
      />
    </div>
  );
}
