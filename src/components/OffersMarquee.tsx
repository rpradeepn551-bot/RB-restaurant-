import React from 'react';
import { Sparkles } from 'lucide-react';
import { MARQUEE_ITEMS } from '../data/restaurantData';

export const OffersMarquee: React.FC = () => {
  return (
    <div className="relative py-4 bg-[#0A1813] border-y border-[#18392B] overflow-hidden">
      <div className="flex w-max animate-marquee space-x-8 items-center">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
          <div key={index} className="flex items-center space-x-8">
            <span className="text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold text-[#D4A24C] flex items-center gap-2 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A24C]" />
              {item}
            </span>
            <span className="text-[#1F4A39] text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
