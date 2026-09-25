import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaMascotLogo } from './YamamaMascotLogo';

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Signatures', href: '#signatures' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0cd9] backdrop-blur-md border-b border-neutral-800/80 py-2.5 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Zone 1: Single brand wordmark with animated mascot */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg p-1"
            aria-label="Yamama Shawaya Home"
          >
            <div className="relative group-hover:rotate-6 transition-transform duration-300">
              <YamamaMascotLogo
                size="sm"
                variant="avatar"
                animated={true}
                withGlow={false}
                withRing={false}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-red-400 transition-colors uppercase leading-none">
                {RESTAURANT_INFO.name}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 mt-1">
                Refill Your Energy
              </span>
            </div>
          </a>

          {/* Zone 2: Clean 4-6 text navigation links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white hover:underline underline-offset-4 decoration-red-500 transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-red-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${RESTAURANT_INFO.phones[0].number}`}
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white px-3 py-2 rounded-lg border border-neutral-800 hover:border-neutral-700 bg-neutral-900/60 transition-colors tabular-nums"
              title="Call Restaurant Directly"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>{RESTAURANT_INFO.phones[0].number}</span>
            </a>
            <button
              onClick={onOpenOrderModal}
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 rounded-lg shadow-md shadow-red-600/40 hover:shadow-red-600/60 transition-all duration-200 active:scale-95 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            >
              Order Now
            </button>
          </div>

          {/* Mobile Hamburger toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenOrderModal}
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-red-600 rounded-md"
            >
              Order
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-md"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu with safe viewport height */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0e0e12] border-b border-neutral-800 px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <div className="flex items-center gap-3 p-3 bg-neutral-900/80 rounded-xl border border-neutral-800 mb-2">
            <YamamaMascotLogo size="sm" variant="avatar" animated={true} withGlow={false} withRing={false} />
            <div>
              <p className="font-display font-extrabold text-sm text-white uppercase">Yamama Shawaya</p>
              <p className="text-[10px] text-amber-400 font-semibold tracking-wider uppercase">Refill Your Energy</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-neutral-200 hover:text-white hover:bg-neutral-800/60 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-800/80 flex flex-col gap-2">
            <a
              href={`tel:${RESTAURANT_INFO.phones[0].number}`}
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-neutral-200 bg-neutral-900 border border-neutral-800 rounded-lg tabular-nums"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call: {RESTAURANT_INFO.phones[0].number}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full py-2.5 text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 rounded-lg shadow-md shadow-red-600/30 text-center"
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
