import React, { useState } from 'react';
import { Tag, Sparkles, Check, ArrowRight, Gift, Percent, Utensils, Calendar, ShieldCheck, Copy } from 'lucide-react';
import { RESTAURANT_OFFERS } from '../data/offersData';
import { RestaurantOffer } from '../types';

interface SpecialOffersProps {
  onApplyPromoCode: (code: string) => void;
  appliedPromoCode?: string;
  onOpenCart?: () => void;
}

export const SpecialOffers: React.FC<SpecialOffersProps> = ({
  onApplyPromoCode,
  appliedPromoCode,
  onOpenCart,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All 30 Offers' },
    { id: 'combo', label: 'Combos & Feasts' },
    { id: 'discount', label: 'Bill Discounts' },
    { id: 'bogo', label: 'BOGO Offers' },
    { id: 'freebie', label: 'Complimentary Treats' },
    { id: 'day_special', label: 'Day-by-Day Specials' },
    { id: 'exclusive', label: 'Exclusive & Loyalty' },
  ];

  const filteredOffers =
    selectedFilter === 'all'
      ? RESTAURANT_OFFERS
      : RESTAURANT_OFFERS.filter((off) => off.category === selectedFilter);

  const handleApply = (offer: RestaurantOffer) => {
    onApplyPromoCode(offer.code);
    setCopiedCode(offer.code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'combo':
        return <Utensils className="w-4 h-4 text-[#D4A24C]" />;
      case 'discount':
        return <Percent className="w-4 h-4 text-[#D4A24C]" />;
      case 'bogo':
      case 'freebie':
        return <Gift className="w-4 h-4 text-[#D4A24C]" />;
      case 'day_special':
        return <Calendar className="w-4 h-4 text-[#D4A24C]" />;
      default:
        return <Tag className="w-4 h-4 text-[#D4A24C]" />;
    }
  };

  return (
    <section
      id="offers"
      className="py-24 sm:py-32 bg-[#091F16] text-[#F5F0E6] relative border-t border-[#194734] overflow-hidden"
    >
      {/* Background radial glows */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#D4A24C]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#164232]/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.28em] text-[#D4A24C] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SAVOUR WITH PRIVILEGE</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Royal Dining Offers & Combos
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#B3C8BD] max-w-xl">
              Choose from 30 exclusive dining vouchers, festive thali combos, and weekday privileges. Apply in 1-click to your order bag.
            </p>
          </div>

          {/* Highlights box */}
          <div className="bg-[#0D2E21] border border-[#235843] rounded-2xl p-4 flex items-center gap-4 shrink-0 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-[#D4A24C] text-[#0A1813] font-serif-display font-bold flex items-center justify-center text-base">
              ₹99
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[#D4A24C] font-bold block">
                Free Delivery Unlocked
              </span>
              <span className="text-xs text-[#9BB3A5]">On all orders above ₹99 across the city</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                id={`offer-filter-${tab.id}`}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider whitespace-nowrap uppercase transition-all ${
                  isActive
                    ? 'bg-[#D4A24C] text-[#0A1A14] shadow-lg font-bold'
                    : 'bg-[#0E2C20] hover:bg-[#153D2E] text-[#B8CFC2] border border-[#1B4B38]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffers.map((offer) => {
            const isApplied = appliedPromoCode === offer.code;
            const isCopied = copiedCode === offer.code;

            return (
              <div
                key={offer.id}
                className="bg-[#0A2218] border border-[#1E4D3B] hover:border-[#D4A24C]/60 rounded-2xl p-6 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Decorative corner glow */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#D4A24C]/5 rounded-full blur-xl group-hover:bg-[#D4A24C]/15 transition-all pointer-events-none" />

                <div>
                  {/* Top Badge & Category */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1.5 text-xs text-[#BACDC2]">
                      {getCategoryIcon(offer.category)}
                      <span className="capitalize">{offer.category.replace('_', ' ')}</span>
                    </div>

                    {offer.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#154231] text-[#D4A24C] border border-[#D4A24C]/30">
                        {offer.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-display text-xl font-bold text-white group-hover:text-[#D4A24C] transition-colors mb-2">
                    {offer.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#8EA89B] leading-relaxed mb-5 font-sans-ui">
                    {offer.description}
                  </p>
                </div>

                {/* Footer / Code Bar & Action */}
                <div className="pt-4 border-t border-[#173F2F] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 bg-[#061710] px-3 py-1.5 rounded-xl border border-[#194532]">
                    <span className="text-[10px] uppercase tracking-wider text-[#79988A]">Code:</span>
                    <span className="text-xs font-mono font-bold text-[#D4A24C]">{offer.code}</span>
                  </div>

                  <button
                    onClick={() => handleApply(offer)}
                    id={`apply-offer-btn-${offer.code.toLowerCase()}`}
                    className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 ${
                      isApplied || isCopied
                        ? 'bg-[#0E5B3D] text-white shadow-md'
                        : 'bg-[#D4A24C] hover:bg-[#E5B65E] text-[#0A1A14]'
                    }`}
                  >
                    {isApplied || isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Applied</span>
                      </>
                    ) : (
                      <>
                        <Tag className="w-3.5 h-3.5" />
                        <span>Apply Offer</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
