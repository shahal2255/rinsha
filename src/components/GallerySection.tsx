import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';

export const GallerySection: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-[#0e0e12] relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>Authentic Food & Atmosphere</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
              Food Gallery
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-neutral-400 max-w-md">
            Charcoal slow-fired chicken, aromatic long-grain Arabic rice, and welcoming restaurant atmosphere at Angadipuram.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800/80 cursor-pointer aspect-[4/3] shadow-lg hover:border-red-600/50 hover:shadow-2xl hover:shadow-red-950/20 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-red-600 transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-red-400 block mb-1">
                  {item.tag}
                </span>
                <h3 className="font-display text-base font-bold text-white group-hover:text-red-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-1 mt-0.5">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-2 rounded-full bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev / Next controls */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 border border-neutral-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 border border-neutral-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
          >
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl max-h-[75vh]">
              <img
                src={GALLERY_ITEMS[activeImageIndex].image}
                alt={GALLERY_ITEMS[activeImageIndex].title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4 text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-red-500 block">
                {GALLERY_ITEMS[activeImageIndex].tag}
              </span>
              <h4 className="font-display text-lg font-bold text-white mt-0.5">
                {GALLERY_ITEMS[activeImageIndex].title}
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                {GALLERY_ITEMS[activeImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
