import React from 'react';
import { Play, ArrowRight, Sparkles, Award, Star } from 'lucide-react';
import { HERO_IMAGE_PATH, RESTAURANT_STATS } from '../data/restaurantData';

interface HeroProps {
  onExploreMenu: () => void;
  onWatchStory: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onWatchStory }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#07130E] text-[#F5F0E6] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex flex-col justify-between"
    >
      {/* Ambient background atmosphere: warm-orange bokeh, deep black, dark green & warm brown tones */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep green radial atmosphere */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#0E3527]/40 rounded-full blur-[120px]" />
        {/* Soft warm-orange circular bokeh lights */}
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-[#D4A24C]/15 rounded-full blur-[90px]" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#164232]/50 rounded-full blur-[130px]" />
        <div className="absolute top-20 right-1/3 w-32 h-32 bg-[#E5983A]/20 rounded-full blur-[50px]" />
        
        {/* Subtle grid pattern overlay for editorial depth */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#D4A24C 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Main Grid: Left content with vertical text accent, Right tall vertical food composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Vertical Accent Pillar (Visible on lg screens) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center py-6 select-none">
            <div className="h-14 w-[1px] bg-gradient-to-b from-transparent via-[#D4A24C]/50 to-[#D4A24C] mb-6" />
            <span
              className="text-[10px] tracking-[0.35em] text-[#D4A24C] font-semibold uppercase whitespace-nowrap opacity-90"
              style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
              }}
            >
              ROOTED IN HERITAGE. INSPIRED BY CULINARY ART.
            </span>
            <div className="h-14 w-[1px] bg-gradient-to-b from-[#D4A24C] via-[#D4A24C]/50 to-transparent mt-6" />
          </div>

          {/* Left / Center Editorial Headline & Action Block */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Mobile / Tablet vertical text pill */}
            <div className="lg:hidden inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#D4A24C]" />
              <span className="text-[10px] tracking-[0.25em] text-[#D4A24C] font-semibold uppercase">
                ROOTED IN HERITAGE. INSPIRED BY CULINARY ART.
              </span>
            </div>

            {/* Small Gold Tagline */}
            <div className="inline-flex items-center gap-2 text-[#D4A24C] text-xs sm:text-sm font-semibold tracking-[0.28em] uppercase mb-4 sm:mb-5">
              <span>— SPICE. INSPIRE. ELEVATE. —</span>
            </div>

            {/* Large Main Headline */}
            <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.25rem] font-bold text-[#F5F0E6] leading-[1.12] tracking-[-0.01em] mb-6">
              ANCIENT <span className="text-[#D4A24C] italic font-cormorant font-normal">FLAVOURS</span> SERVED WITH SOUL.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#C8D1CA] font-normal leading-relaxed max-w-xl mb-8 sm:mb-10 font-sans-ui">
              Rooted in India's rich culinary traditions, we bring together unforgettable dining experiences.
            </p>

            {/* Two Rounded Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              {/* Explore Menu Button (Gold with dark text) */}
              <button
                onClick={onExploreMenu}
                id="hero-explore-menu-btn"
                className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-[0.16em] uppercase bg-[#D4A24C] hover:bg-[#E5B65E] text-[#0A1A14] shadow-xl hover:shadow-[#D4A24C]/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5"
              >
                <span>EXPLORE OUR MENU</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Watch Our Story Button (Dark green with white text) */}
              <button
                onClick={onWatchStory}
                id="hero-watch-story-btn"
                className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase bg-[#0F3D2E] hover:bg-[#15503D] text-[#F5F0E6] border border-[#235844] shadow-lg hover:shadow-[#0F3D2E]/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5"
              >
                <div className="w-5 h-5 rounded-full bg-[#D4A24C]/20 flex items-center justify-center text-[#D4A24C]">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>WATCH OUR STORY</span>
              </button>
            </div>

            {/* Luxury culinary endorsement badge */}
            <div className="mt-10 sm:mt-12 pt-6 border-t border-[#1C3B2F]/60 flex items-center gap-4 text-xs text-[#9BB3A5]">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4A24C] text-[#D4A24C]" />
                ))}
              </div>
              <span className="tracking-wide">
                Celebrated as the Peak of Indian Gastronomy & Hospitality
              </span>
            </div>
          </div>

          {/* Right: Tall Vertical Composition Hero Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer decorative gold ring accent */}
              <div className="absolute -inset-2.5 rounded-[28px] border border-[#D4A24C]/30 pointer-events-none" />
              <div className="absolute -inset-1 rounded-[26px] border border-[#1F4A39]/60 pointer-events-none" />

              {/* Main Card Container */}
              <div className="relative overflow-hidden rounded-[24px] bg-[#0C2118] border border-[#275341] shadow-2xl group">
                <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={HERO_IMAGE_PATH}
                    alt="Grilled Indian Paneer cubes and vegetables in a black ceramic serving bowl"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Vignette & Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07130E] via-transparent to-black/20" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[24px]" />

                  {/* Dish Highlight Badge in image */}
                  <div className="absolute top-4 right-4 bg-[#0A1A14]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4A24C]/40 flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3 h-3 text-[#D4A24C]" />
                    <span className="text-[11px] font-semibold tracking-wider text-[#F5F0E6] uppercase">
                      Chef's Signature
                    </span>
                  </div>

                  {/* Caption badge at bottom */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#0B1E17]/90 backdrop-blur-md p-4 rounded-xl border border-[#214D3C] shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4A24C] font-semibold block">
                          Ancient Sigri Recipe
                        </span>
                        <h4 className="font-serif-display text-base sm:text-lg font-bold text-[#F5F0E6]">
                          Tandoori Paneer Angaar
                        </h4>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-[#9BB3A5] block">A la Carte</span>
                        <span className="text-sm font-bold text-[#D4A24C]">$32</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating decorative award seal */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-[#0E3527] border-2 border-[#D4A24C] rounded-2xl p-3 shadow-2xl items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4A24C]/15 flex items-center justify-center text-[#D4A24C]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#D4A24C] font-bold">
                    Epicure Guide
                  </div>
                  <div className="text-xs font-semibold text-[#F5F0E6]">
                    Best Fine Dining 2025
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Large Dark-Green Statistics/Info Panel */}
        <div className="mt-16 lg:mt-20">
          <div
            id="hero-stats-panel"
            className="relative rounded-2xl bg-[#0F3D2E] border border-[#245D47] shadow-2xl overflow-hidden"
          >
            {/* Subtle background glow & texture */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C2F23] via-[#0F3D2E] to-[#124B38] opacity-90" />
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#D4A24C]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#205540]">
              {RESTAURANT_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="px-6 py-6 sm:py-8 flex flex-col items-center text-center group hover:bg-[#144837]/50 transition-colors"
                >
                  <span className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight group-hover:text-[#D4A24C] transition-colors">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#F5F0E6] uppercase font-sans-ui">
                    {stat.label}
                  </span>
                  <span className="mt-1 text-[11px] text-[#A6C4B5] font-light hidden sm:block">
                    {stat.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
