import React, { useState } from 'react';
import { X, Phone, Bike, ShoppingBag, Utensils, Check, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO, DishItem } from '../data/restaurantData';
import { YamamaMascotLogo } from './YamamaMascotLogo';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDish?: DishItem | null;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  selectedDish
}) => {
  const [selectedCombo, setSelectedCombo] = useState<string>('half');
  const [quantity, setQuantity] = useState<number>(1);

  if (!isOpen) return null;

  const comboOptions = [
    { id: 'quarter', name: 'Quarter Plate', price: 180, desc: 'Quarter Shawaya + Flavored Arabic Rice' },
    { id: 'half', name: 'Half Plate', price: 340, desc: 'Half Shawaya + Flavored Arabic Rice + Dips' },
    { id: 'full', name: 'Full Plate', price: 660, desc: 'Full Shawaya + Grand Arabic Rice Platter' }
  ];

  const currentCombo = comboOptions.find((c) => c.id === selectedCombo) || comboOptions[1];
  const estimatedTotal = currentCombo.price * quantity;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-[#141418] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 flex items-start gap-3.5">
          <YamamaMascotLogo
            size="sm"
            variant="avatar"
            animated={true}
            withRing={false}
            withSteam={false}
            withGlow={false}
          />
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 mb-0.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Direct Phone Ordering • Refill Your Energy</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white tracking-tight uppercase">
              Order From Yamama Shawaya
            </h3>
            <p className="mt-0.5 text-xs text-neutral-400">
              {selectedDish ? `Ordering: ${selectedDish.name}` : 'Fresh charcoal-grilled chicken & special flavored rice.'}
            </p>
          </div>
        </div>

        {/* Quick Combo Helper for Shawaya + Rice */}
        <div className="mb-6 bg-neutral-900/90 rounded-xl p-4 border border-neutral-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-200">
              Select Shawaya Combo
            </span>
            <span className="text-[11px] text-amber-400 italic">
              Includes flavored Arabic rice
            </span>
          </div>

          <div className="space-y-2">
            {comboOptions.map((opt) => (
              <label
                key={opt.id}
                onClick={() => setSelectedCombo(opt.id)}
                className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                  selectedCombo === opt.id
                    ? 'bg-red-950/40 border-red-600/70 text-white'
                    : 'bg-black/40 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      selectedCombo === opt.id
                        ? 'border-red-500 bg-red-600 text-white'
                        : 'border-neutral-600'
                    }`}
                  >
                    {selectedCombo === opt.id && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <div>
                    <span className="font-semibold text-xs sm:text-sm block">
                      {opt.name}
                    </span>
                    <span className="text-[11px] text-neutral-400 block">
                      {opt.desc}
                    </span>
                  </div>
                </div>
                <span className="font-display font-bold text-sm text-white tabular-nums">
                  ₹{opt.price}
                </span>
              </label>
            ))}
          </div>

          {/* Quantity Controls */}
          <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between">
            <span className="text-xs text-neutral-400">Quantity:</span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-7 h-7 rounded bg-neutral-800 text-white flex items-center justify-center font-bold text-sm hover:bg-neutral-700 cursor-pointer"
              >
                -
              </button>
              <span className="font-display font-bold text-sm text-white tabular-nums min-w-5 text-center">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-7 h-7 rounded bg-neutral-800 text-white flex items-center justify-center font-bold text-sm hover:bg-neutral-700 cursor-pointer"
              >
                +
              </button>
              <div className="ml-4 pl-4 border-l border-neutral-800 text-right">
                <span className="text-[11px] text-neutral-400 block">Estimated Total</span>
                <span className="font-display font-bold text-base text-red-400 tabular-nums">
                  ₹{estimatedTotal}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Call to Order Buttons */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 text-center">
            Tap a line below to place your order directly:
          </p>

          <a
            href="tel:9747362101"
            className="w-full py-3.5 px-4 bg-red-600 hover:bg-red-500 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>Call Primary Line: 9747362101</span>
          </a>

          <a
            href="tel:9747362102"
            className="w-full py-3.5 px-4 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white font-semibold text-sm uppercase tracking-wider rounded-xl border border-neutral-700 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <Bike className="w-4 h-4 text-red-500" />
            <span>Call Delivery & Takeaway: 9747362102</span>
          </a>
        </div>

        {/* Service disclaimer note */}
        <div className="mt-5 text-center">
          <p className="text-[11px] text-neutral-400 leading-relaxed">
            📍 Location: Calicut Road, Angadipuram, Perinthalmanna • Dine-in & Takeaway open daily.
          </p>
        </div>
      </div>
    </div>
  );
};
