import React, { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, Compass, Flame } from 'lucide-react';
import { LOGO_IMAGE_PATH } from '../data/restaurantData';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, activeChapter]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  if (!isOpen) return null;

  const chapters = [
    {
      title: 'The Ancestral Sigri Fire',
      subtitle: 'Chapter I',
      quote: '“True tandoor craftsmanship is not about heat; it is about whispering through the embers.”',
      time: '0:14',
      videoUrl: '/videos/royal_sigri_fire.mp4',
      poster: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Saffron Steeping & Fragrant Rice Infusion',
      subtitle: 'Chapter II',
      quote: '“Every morning, purple saffron petals open at sunrise to perfume the royal dum handis.”',
      time: '0:07',
      videoUrl: '/videos/royal_rice_spices.mp4',
      poster: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'The 48-Hour Dal Bukhara Simmer',
      subtitle: 'Chapter III',
      quote: '“Patience is our primary ingredient. We let black lentils surrender slowly to smoke and white butter.”',
      time: '0:15',
      videoUrl: '/videos/royal_dum_simmer.mp4',
      poster: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#081510] text-[#F5F0E6] rounded-3xl border border-[#214D3C] shadow-2xl overflow-hidden flex flex-col">
        {/* Top bar with close button */}
        <div className="p-4 sm:p-6 border-b border-[#143325] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#D4A24C]">
              <img
                src={LOGO_IMAGE_PATH}
                alt="RB Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4A24C] font-bold block">
                Cinematic Heritage Documentary
              </span>
              <h3 className="font-serif-display text-base font-bold text-white">
                The Soul of Indian Gastronomy
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#11291E] hover:bg-[#1C4231] text-[#E0DACE] hover:text-[#D4A24C] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Real Video Screen */}
        <div className="relative aspect-video w-full bg-black overflow-hidden group">
          <video
            ref={videoRef}
            key={chapters[activeChapter].videoUrl}
            src={chapters[activeChapter].videoUrl}
            poster={chapters[activeChapter].poster}
            autoPlay={isPlaying}
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

          {/* Chapter Narrative Overlay */}
          <div className="absolute bottom-16 left-6 right-6 sm:left-10 sm:right-10">
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4A24C] font-bold">
              {chapters[activeChapter].subtitle}
            </span>
            <h4 className="font-serif-display text-2xl sm:text-3xl font-bold text-white mt-1 mb-2">
              {chapters[activeChapter].title}
            </h4>
            <p className="text-sm sm:text-base italic text-[#E0EAE3] font-cormorant max-w-xl">
              {chapters[activeChapter].quote}
            </p>
          </div>

          {/* Player Controls Bar */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-[#D4A24C] hover:text-white"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-[#A0B8AA] hover:text-white"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="text-[11px] text-[#A0B8AA]">{chapters[activeChapter].time}</span>
            </div>

            {/* Chapter Steppers */}
            <div className="flex items-center gap-2">
              {chapters.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveChapter(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    activeChapter === i ? 'w-8 bg-[#D4A24C]' : 'w-2 bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Chapter Selection Strip */}
        <div className="p-4 bg-[#0A1A14] border-t border-[#163627] grid grid-cols-1 sm:grid-cols-3 gap-3">
          {chapters.map((chap, idx) => (
            <button
              key={idx}
              onClick={() => setActiveChapter(idx)}
              className={`p-3 rounded-xl text-left transition-all ${
                activeChapter === idx
                  ? 'bg-[#12382B] border border-[#D4A24C]'
                  : 'bg-[#0E261D] hover:bg-[#122E23] border border-transparent'
              }`}
            >
              <span className="text-[10px] uppercase tracking-widest text-[#D4A24C] block font-semibold">
                {chap.subtitle}
              </span>
              <span className="text-xs font-bold text-white block truncate">
                {chap.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
