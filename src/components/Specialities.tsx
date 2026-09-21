import React, { useState, useMemo } from 'react';
import { Plus, Check, Flame, Leaf, Award, Sparkles, Search, Filter, X } from 'lucide-react';
import { Dish } from '../types';
import { SPECIALITIES } from '../data/restaurantData';

interface SpecialitiesProps {
  onAddToCart: (dish: Dish) => void;
  cartDishIds: string[];
}

export const Specialities: React.FC<SpecialitiesProps> = ({
  onAddToCart,
  cartDishIds,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegOnly, setVegOnly] = useState<boolean>(false);
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Creations (115+)' },
    { id: 'starters', label: '🥗 Starters' },
    { id: 'soups', label: '🍲 Soups' },
    { id: 'biryani', label: '🍚 Rice & Biryanis' },
    { id: 'chinese', label: '🍜 Chinese' },
    { id: 'breads', label: '🫓 Indian Breads' },
    { id: 'mains', label: '🍛 North Indian Mains' },
    { id: 'south-indian', label: '🌴 South Indian' },
    { id: 'continental', label: '🍕 Continental & Fast Food' },
    { id: 'grill', label: '🍗 Grill & Tandoor' },
    { id: 'desserts', label: '🍨 Royal Desserts' },
    { id: 'beverages', label: '🍹 Artisanal Elixirs' },
  ];

  const [failedImageIds, setFailedImageIds] = useState<Set<string>>(new Set());

  const filteredDishes = useMemo(() => {
    return SPECIALITIES.filter((dish) => {
      // User directive: Remove dishes that do not have a valid image or failed to load
      if (!dish.imageUrl || !dish.imageUrl.trim() || dish.imageUrl === 'HERO_IMAGE_PATH') {
        return false;
      }
      if (failedImageIds.has(dish.id)) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && dish.category !== selectedCategory) {
        return false;
      }
      // Veg only
      if (vegOnly && !dish.isVegetarian) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = dish.name.toLowerCase().includes(query);
        const matchHindi = dish.hindiName?.toLowerCase().includes(query);
        const matchDesc = dish.description.toLowerCase().includes(query);
        const matchCat = dish.category.toLowerCase().includes(query);
        if (!matchName && !matchHindi && !matchDesc && !matchCat) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, vegOnly, searchQuery, failedImageIds]);

  const handleAdd = (dish: Dish) => {
    onAddToCart(dish);
    setJustAddedId(dish.id);
    setTimeout(() => setJustAddedId(null), 1800);
  };

  return (
    <section
      id="specialities"
      className="py-24 sm:py-32 bg-[#FAFAF7] text-[#1C2321] transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 text-[#D4A24C] text-xs font-bold tracking-[0.25em] uppercase mb-3 font-sans-ui">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXCEPTIONAL GASTRONOMY & ROYAL RECIPES</span>
          </div>

          {/* User Requested: Heading "Our Specialities" with a thin elegant horizontal line underneath */}
          <div className="inline-block relative">
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#14261F] pb-4">
              Our Specialities
            </h2>
            {/* Thin elegant horizontal line underneath */}
            <div className="w-full h-[1.5px] bg-gradient-to-r from-[#D4A24C] via-[#1F4D3C] to-transparent" />
          </div>

          <p className="mt-6 text-base sm:text-lg text-[#55635C] leading-relaxed font-sans-ui max-w-2xl">
            From clay tandoor starters and slow-dum biryanis to authentic South Indian thalis and continental delights, explore over 115 exquisite dishes handcrafted fresh to order.
          </p>
        </div>

        {/* Search & Quick Toggles Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#8C9E94] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g., Paneer Tikka, Biryani, Dosa, Noodles)..."
              className="w-full pl-10 pr-10 py-3 rounded-full bg-white border border-[#DDD9CE] text-sm text-[#14261F] placeholder-[#8A968F] focus:outline-none focus:border-[#D4A24C] shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8A968F] hover:text-[#14261F]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filters: Veg Only Toggle & Results Count */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setVegOnly(!vegOnly)}
              className={`px-4 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-2 transition-all ${
                vegOnly
                  ? 'bg-[#0E5B3D] text-white shadow-md'
                  : 'bg-white text-[#4A5D53] border border-[#DDD9CE] hover:bg-[#F2EFE8]'
              }`}
            >
              <Leaf className="w-3.5 h-3.5 text-[#2E7D32]" />
              <span>Pure Veg Only</span>
            </button>

            <span className="text-xs text-[#6B7E74] font-medium bg-[#EFECE3] px-3 py-2 rounded-full">
              Showing {filteredDishes.length} Dishes
            </span>
          </div>
        </div>

        {/* Category Filter Pills (Scrollable) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                id={`cat-filter-${cat.id}`}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider whitespace-nowrap transition-all duration-200 uppercase cursor-pointer ${
                  isActive
                    ? 'bg-[#0F3D2E] text-[#FAFAF7] shadow-md font-bold'
                    : 'bg-[#EDEBE3] hover:bg-[#E2DFD5] text-[#3E4D45]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Empty state if search has no results */}
        {filteredDishes.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-2xl border border-[#E5E0D5] p-8">
            <div className="w-12 h-12 rounded-full bg-[#F3F0E6] flex items-center justify-center text-[#7F9387] mx-auto mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif-display text-xl font-bold text-[#14261F] mb-1">
              No Dishes Found
            </h3>
            <p className="text-sm text-[#66776E] mb-4">
              We couldn't find any dishes matching "{searchQuery}". Try a different keyword or reset filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setVegOnly(false);
              }}
              className="px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#D4A24C] text-[#0A1A14]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Dishes Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish) => {
              const isJustAdded = justAddedId === dish.id;
              const isInCart = cartDishIds.includes(dish.id);

              return (
                <div
                  key={dish.id}
                  id={`dish-card-${dish.id}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E8E5DD] hover:border-[#D4A24C]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image Container with zoom & badges */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE8E1]">
                    <img
                      src={dish.imageUrl}
                      alt={dish.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                      onError={() => {
                        setFailedImageIds((prev) => {
                          const next = new Set(prev);
                          next.add(dish.id);
                          return next;
                        });
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Top Left: Dietary tags */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {dish.isVegetarian ? (
                        <span className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider text-[#0E5B3D] flex items-center gap-1 shadow-sm uppercase">
                          <Leaf className="w-2.5 h-2.5 text-[#2E7D32]" />
                          Veg
                        </span>
                      ) : (
                        <span className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider text-[#B71C1C] flex items-center gap-1 shadow-sm uppercase">
                          <span className="w-2 h-2 rounded-full bg-[#B71C1C]" />
                          Non-Veg
                        </span>
                      )}
                      {dish.isGlutenFree && (
                        <span className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider text-[#705527] shadow-sm uppercase">
                          GF
                        </span>
                      )}
                    </div>

                    {/* Top Right: Chef Special Badge */}
                    {dish.isChefSpecial && (
                      <div className="absolute top-3 right-3 bg-[#D4A24C] text-[#0A1A14] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-1 shadow-md">
                        <Award className="w-3 h-3" />
                        Signature
                      </div>
                    )}

                    {/* Spice Level Indicator */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-0.5 bg-[#0F281E]/80 backdrop-blur-md px-2 py-0.5 rounded-full">
                      {Array.from({ length: dish.spiceLevel }).map((_, i) => (
                        <Flame key={i} className="w-3 h-3 text-[#FF7A45]" />
                      ))}
                      <span className="text-[9px] text-[#E0DACE] ml-1 font-medium">
                        Spice {dish.spiceLevel}/3
                      </span>
                    </div>

                    {dish.servingSize && (
                      <span className="absolute bottom-3 right-3 text-[10px] text-white/90 bg-black/70 backdrop-blur-sm px-2.5 py-0.5 rounded-full font-medium">
                        {dish.servingSize}
                      </span>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-[11px] font-serif text-[#88692E] tracking-wider">
                          {dish.hindiName || 'शाही व्यंजन'}
                        </span>
                        <span className="font-serif-display text-xl font-bold text-[#0F3D2E]">
                          ₹{dish.price}
                        </span>
                      </div>

                      <h3 className="font-serif-display text-xl font-bold text-[#14261F] group-hover:text-[#88692E] transition-colors mb-2.5">
                        {dish.name}
                      </h3>

                      <p className="text-sm text-[#55635C] leading-relaxed line-clamp-3 mb-5 font-sans-ui">
                        {dish.description}
                      </p>
                    </div>

                    {/* Bottom Action */}
                    <div className="pt-4 border-t border-[#F0ECE1] flex items-center justify-between">
                      <span className="text-xs text-[#7B8B82] uppercase tracking-wider font-medium">
                        Freshly Prepared
                      </span>

                      <button
                        onClick={() => handleAdd(dish)}
                        id={`add-dish-btn-${dish.id}`}
                        className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                          isJustAdded
                            ? 'bg-[#0E5B3D] text-white shadow-md'
                            : isInCart
                            ? 'bg-[#0F3D2E] text-[#F5F0E6] hover:bg-[#185340]'
                            : 'bg-[#D4A24C] text-[#0A1813] hover:bg-[#E5B65E] shadow-sm hover:shadow'
                        }`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>{isInCart ? 'Add More' : 'Add to Bag'}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
