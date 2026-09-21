import React from 'react';
import { Sparkles, Clock, Crown, ArrowRight } from 'lucide-react';
import { EXPERIENCES_LIST } from '../data/restaurantData';

interface ExperiencesProps {
  onReserveExperience: () => void;
}

export const Experiences: React.FC<ExperiencesProps> = ({ onReserveExperience }) => {
  return (
    <section
      id="experiences"
      className="py-24 sm:py-32 bg-[#0E2E23] text-[#F5F0E6] relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4A24C]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#164D3B]/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#D4A24C] text-xs font-bold tracking-[0.28em] uppercase mb-3">
            <Crown className="w-4 h-4" />
            <span>EXCLUSIVE CURATIONS</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F0E6] mb-5">
            Immersive Dining Experiences
          </h2>
          <div className="w-20 h-0.5 bg-[#D4A24C] mx-auto mb-6" />
          <p className="text-base text-[#BFD4C9] font-sans-ui leading-relaxed">
            Beyond dining, RB offers multisensory evenings that intertwine ancestral folklore, bespoke tableside plating, and mystical classical acoustics.
          </p>
        </div>

        {/* 3 Column Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPERIENCES_LIST.map((exp, index) => (
            <div
              key={index}
              className="bg-[#092219]/90 rounded-2xl p-8 border border-[#1E4D3B] hover:border-[#D4A24C]/80 shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="inline-block bg-[#D4A24C]/15 text-[#D4A24C] border border-[#D4A24C]/30 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">
                  {exp.tag}
                </div>

                <h3 className="font-serif-display text-2xl font-bold text-[#F5F0E6] group-hover:text-[#D4A24C] transition-colors mb-2">
                  {exp.title}
                </h3>
                <h4 className="text-xs uppercase tracking-[0.18em] text-[#D4A24C] font-semibold mb-4">
                  {exp.subtitle}
                </h4>

                <p className="text-sm text-[#A8BFB3] leading-relaxed mb-6 font-sans-ui">
                  {exp.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#163D2E]">
                <div className="flex items-center gap-2 text-xs text-[#9BB3A5] mb-2">
                  <Clock className="w-3.5 h-3.5 text-[#D4A24C]" />
                  <span>{exp.timing}</span>
                </div>

                <div className="flex items-baseline justify-between mt-4">
                  <span className="font-serif-display text-lg font-bold text-[#F5F0E6]">
                    {exp.price}
                  </span>
                  <button
                    onClick={onReserveExperience}
                    className="text-xs font-bold tracking-wider uppercase text-[#D4A24C] hover:text-[#E8C27E] flex items-center gap-1 group-hover:translate-x-1 transition-all"
                  >
                    <span>Explore Experience</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Private Dining Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#081813] via-[#0B251D] to-[#081813] border border-[#235843] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-[0.25em] text-[#D4A24C] uppercase block mb-1">
              Bespoke Banquets & Celebrations
            </span>
            <h4 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#F5F0E6] mb-2">
              The Maharaja Private Dining Suite
            </h4>
            <p className="text-sm text-[#A3B8AD]">
              Accommodating up to 24 distinguished guests with dedicated butler service, antique silver tableware, and customized tasting menus.
            </p>
          </div>
          <button
            onClick={onReserveExperience}
            className="px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase bg-[#D4A24C] hover:bg-[#E5B65E] text-[#0A1A14] whitespace-nowrap shadow-lg transition-colors"
          >
            Inquire Private Suite
          </button>
        </div>
      </div>
    </section>
  );
};
