import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0a0a0c] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-amber-400 mb-4">
            <Star className="w-4 h-4 fill-amber-400" />
            <span className="font-display font-extrabold text-base text-white tabular-nums">
              {RESTAURANT_INFO.rating}
            </span>
            <span className="text-neutral-400 text-xs font-semibold">/ 5.0</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Customer Feedback
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            {RESTAURANT_INFO.ratingSource}
          </p>
        </div>

        {/* Verified Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#121216] border border-neutral-800/80 rounded-xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                {/* 4/5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-neutral-700'
                      }`}
                    />
                  ))}
                </div>

                <div className="relative">
                  <MessageSquareQuote className="w-6 h-6 text-red-500/20 mb-2" />
                  <p className="text-neutral-200 text-sm sm:text-base font-normal leading-relaxed italic">
                    {review.quote}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                <span className="font-semibold text-neutral-300">{review.author}</span>
                <span className="text-neutral-500">{review.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Small transparent note */}
        <p className="text-center text-xs text-neutral-500 mt-8">
          Excerpts from authentic Google reviews for Yamama Shawaya, Angadipuram.
        </p>

      </div>
    </section>
  );
};
