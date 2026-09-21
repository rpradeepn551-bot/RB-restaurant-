import React, { useState } from 'react';
import { Sparkles, Compass, Flame, ShieldCheck, Play, Award, Heart, Scroll, ChefHat } from 'lucide-react';
import { LOGO_IMAGE_PATH } from '../data/restaurantData';

interface OurStoryProps {
  onWatchStory: () => void;
}

export const OurStory: React.FC<OurStoryProps> = ({ onWatchStory }) => {
  const [activeTab, setActiveTab] = useState<'heritage' | 'spice' | 'fire' | 'philosophy'>('heritage');

  const storyContent = {
    heritage: {
      title: 'A Dynasty of Courtly Gastronomy',
      subtitle: 'ESTABLISHED 1982',
      badge: 'Royal Gharana Legacy',
      description:
        'RB was born from an unyielding passion to resurrect the forgotten courtly culinary rituals of the Awadhi Nawabs and Rajput royalty. For over four decades, our master chefs have guarded sacred hand-written khansama parchment recipes passed down through five generations.',
      quote:
        '“We do not merely cook Indian food. We breathe life into ancient charcoal embers and celebrate recipes that once graced royal marble banquets.”',
      author: 'Master Chef Rajesh Bhati, Founder & Head of Culinary Arts',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop',
      video: '/videos/royal_sigri_fire.mp4',
    },
    spice: {
      title: 'The Sacred Spice Route of India',
      subtitle: 'SINGLE-ESTATE SPICES',
      badge: 'Artisanal Heritage',
      description:
        'Every dish is anchored by rare, single-origin botanical spices: wild purple saffron handpicked at dawn in the terraces of Pampore, Kashmir; sun-dried Guntur chillies; stone-bruised green cardamom from the misty Cardamom Hills of Kerala; and coriander seeds milled on ancestral granite pestles.',
      quote:
        '“Spices are the soul of our alchemy. We grind only what we need for each single evening service to preserve volatile essential oils.”',
      author: 'Pandit Somnath, Spice Master',
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=1200&auto=format&fit=crop',
      video: '/videos/royal_rice_spices.mp4',
    },
    fire: {
      title: 'The Charcoal Sigri & Earthen Dum',
      subtitle: 'SLOW-FIRE PERFECTION',
      badge: '48-Hour Simmer',
      description:
        'Our clay ovens and Sigris are seasoned exclusively with natural babool wood charcoal. From our legendary 48-hour slow-simmered Dal Bukhara to delicate saffron-steeped Awadhi Biryanis sealed hermetically under wheat dough purdahs, the fire is treated as a sacred element of flavour.',
      quote:
        '“True tandoor craftsmanship is not about raging fire; it is about whispering heat patiently through cooling embers.”',
      author: 'Ustad Karim Khan, Tandoor Master',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
      video: '/videos/royal_dum_simmer.mp4',
    },
    philosophy: {
      title: 'Atithi Devo Bhava: The Guest is Divine',
      subtitle: 'VEDIC HOSPITALITY',
      badge: 'Timeless Etiquette',
      description:
        'In the timeless Vedic philosophy of Atithi Devo Bhava, welcoming a guest to the dining table is a sacred service. From the warm rose-scented warm water hand-wash to customized spice tailoring by our floor captains, you dine as a royal sovereign.',
      quote:
        '“When a guest enters RB, they enter an sanctuary where every aroma, melody, and touch honors their presence.”',
      author: 'Gayatri Devi, Director of Guest Experience',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop',
      video: '/videos/royal_sigri_fire.mp4',
    },
  };

  const current = storyContent[activeTab];

  return (
    <section
      id="story"
      className="py-24 sm:py-32 bg-[#071711] text-[#F5F0E6] relative border-t border-[#183F2F] overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#0E3527]/50 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#D4A24C]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-[#D4A24C] text-xs font-bold tracking-[0.28em] uppercase mb-3 font-sans-ui">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE CHRONICLES OF RB RESTAURANT</span>
          </div>

          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Ancient Flavours. <br />
            <span className="text-[#D4A24C] italic font-cormorant font-normal">
              Reimagined with Soul & Artistry.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#BACDC2] font-sans-ui leading-relaxed">
            Welcome to the epicurean heritage of RB. Here, four decades of master craftsmanship converge with royal gharana traditions to transport you to the palatial courtyards of India.
          </p>
        </div>

        {/* Story Chapter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {[
            { id: 'heritage', label: '1. Royal Heritage', icon: Scroll },
            { id: 'spice', label: '2. Rare Spice Trail', icon: Compass },
            { id: 'fire', label: '3. Sigri & Charcoal Dum', icon: Flame },
            { id: 'philosophy', label: '4. Atithi Devo Bhava', icon: Heart },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                id={`story-tab-${tab.id}`}
                className={`px-5 py-3 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#D4A24C] text-[#0A1A14] shadow-xl'
                    : 'bg-[#0E2C20] hover:bg-[#143B2B] text-[#BACDC2] border border-[#1C4837]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Story Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Montage & Cinematic Player Trigger */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#205540] shadow-2xl bg-[#05120D] group">
              <div className="aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden relative">
                <video
                  key={current.video}
                  src={current.video}
                  poster={current.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06140E] via-black/20 to-transparent opacity-80" />

              {/* Play Video Trigger Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={onWatchStory}
                  id="story-play-overlay-btn"
                  aria-label="Play our story film"
                  className="w-20 h-20 rounded-full bg-[#D4A24C]/90 hover:bg-[#E5B65E] text-[#0A1813] flex items-center justify-center shadow-2xl transform hover:scale-110 active:scale-95 transition-all duration-300 border-4 border-white/20 group-hover:shadow-[#D4A24C]/50 cursor-pointer"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </button>
              </div>

              {/* Caption in Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0A1F17]/90 backdrop-blur-md p-4 rounded-2xl border border-[#214D3C] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#D4A24C] font-bold block">
                    {current.badge}
                  </span>
                  <span className="text-sm font-serif-display font-bold text-white">
                    {current.title}
                  </span>
                </div>
                <button
                  onClick={onWatchStory}
                  id="story-watch-mini-btn"
                  className="px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#D4A24C] text-[#0A1A14] flex items-center gap-1 hover:bg-[#E5B65E] transition-colors"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Watch Film</span>
                </button>
              </div>
            </div>

            {/* Overlapping Brand Seal */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-[#0E3527] border-2 border-[#D4A24C] rounded-2xl p-4 shadow-2xl items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#D4A24C]/60 bg-[#06140E]">
                <img
                  src={LOGO_IMAGE_PATH}
                  alt="RB Monogram"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4A24C] font-bold block">
                  Est. 1982 • Royal Heritage
                </span>
                <span className="text-sm font-serif-display font-bold text-white">
                  RB Royal Kitchens & Dining
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-[#12382B] text-[#D4A24C] border border-[#245D47]">
              <span>{current.subtitle}</span>
            </div>

            <h3 className="font-serif-display text-3xl sm:text-4xl font-bold text-white leading-tight">
              {current.title}
            </h3>

            <p className="text-base text-[#BACDC2] font-sans-ui leading-relaxed">
              {current.description}
            </p>

            {/* Master Chef Quote Box */}
            <div className="p-6 rounded-2xl bg-[#092218] border-l-4 border-[#D4A24C] border-y border-r border-[#1B4B38] shadow-lg">
              <p className="font-cormorant italic text-lg sm:text-xl text-[#F0EBE1] leading-relaxed mb-3">
                {current.quote}
              </p>
              <div className="flex items-center gap-3">
                <ChefHat className="w-4 h-4 text-[#D4A24C]" />
                <span className="text-xs uppercase tracking-wider text-[#A0BCAE] font-semibold">
                  {current.author}
                </span>
              </div>
            </div>

            {/* Three Heritage Attributes */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#1C4635]">
              <div>
                <span className="text-2xl sm:text-3xl font-serif-display font-bold text-[#D4A24C] block">
                  43+
                </span>
                <span className="text-[11px] text-[#8BA496] uppercase tracking-wider font-medium">
                  Years of Royalty
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-serif-display font-bold text-[#D4A24C] block">
                  100%
                </span>
                <span className="text-[11px] text-[#8BA496] uppercase tracking-wider font-medium">
                  Pure Charcoal Embers
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-serif-display font-bold text-[#D4A24C] block">
                  115+
                </span>
                <span className="text-[11px] text-[#8BA496] uppercase tracking-wider font-medium">
                  Authentic Recipes
                </span>
              </div>
            </div>

            {/* Main Action Button - The fixed button requested by user */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onWatchStory}
                id="watch-our-story-main-action-btn"
                className="px-8 py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-[#D4A24C] hover:bg-[#E5B65E] text-[#0A1A14] shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-3 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-[#0A1813] text-[#D4A24C] flex items-center justify-center">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>WATCH OUR STORY FILM</span>
              </button>

              <button
                onClick={() => {
                  const element = document.getElementById('specialities');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-4 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#0D3023] hover:bg-[#144231] text-[#F5F0E6] border border-[#235843] transition-colors"
              >
                Explore The Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
