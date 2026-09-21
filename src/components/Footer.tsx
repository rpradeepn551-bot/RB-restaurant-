import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, Check, Sparkles } from 'lucide-react';
import { LOGO_IMAGE_PATH } from '../data/restaurantData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenReservation }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  const footerNav = [
    { label: 'Home', id: 'hero' },
    { label: 'Our Story', id: 'story' },
    { label: 'Menu', id: 'specialities' },
    { label: 'Offers', id: 'offers' },
    { label: 'Experiences', id: 'experiences' },
    { label: 'Reservations', id: 'reservations-section' },
    { label: 'Contact Us', id: 'contact' },
  ];

  return (
    <footer id="footer" className="bg-[#050E0A] text-[#F5F0E6] border-t border-[#163627] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#143325]">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#D4A24C] p-0.5 bg-[#0F2D22]">
                <img
                  src={LOGO_IMAGE_PATH}
                  alt="RB Restaurant Emblem"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-cinzel text-2xl font-bold tracking-[0.2em] text-[#F5F0E6]">
                  RB
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4A24C] block font-semibold">
                  FOODIE+ FINE DINING
                </span>
              </div>
            </div>

            <p className="text-sm text-[#9AB3A5] leading-relaxed mb-6 font-sans-ui max-w-sm">
              Rooted in India's rich culinary traditions, we celebrate ancient charcoal embers, courtly heritage, and transcendent flavours served with soul.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-[#D4A24C] font-semibold tracking-wider uppercase">
              <span>— SPICE. INSPIRE. ELEVATE. —</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif-display text-sm uppercase tracking-[0.2em] font-bold text-[#D4A24C] mb-5">
              Navigate
            </h4>
            <ul className="space-y-3 text-xs tracking-wider uppercase font-medium">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-[#B5C7BD] hover:text-[#D4A24C] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Location (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif-display text-sm uppercase tracking-[0.2em] font-bold text-[#D4A24C] mb-5">
              Hours & Location
            </h4>
            <div className="space-y-4 text-xs text-[#A0B8AA]">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D4A24C] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Daily Dining Services:</span>
                  <span>Royal Lunch: 12:00 PM – 3:30 PM</span>
                  <br />
                  <span>Imperial Dinner: 6:30 PM – 11:30 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4A24C] shrink-0 mt-0.5" />
                <span>
                  RB House of Ancient Flavours, 142 Royal Crescent, Arts & Heritage Quarter
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4A24C] shrink-0" />
                <span className="text-white font-medium">+1 (800) 724-3463 (RB-DINE)</span>
              </div>
            </div>
          </div>

          {/* Newsletter (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif-display text-sm uppercase tracking-[0.2em] font-bold text-[#D4A24C] mb-3">
              The Epicure Society
            </h4>
            <p className="text-xs text-[#90ABA0] mb-4">
              Receive private invitations to seasonal tasting menus, sufi acoustic soirees, and master chef masterclasses.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-full bg-[#0A1F17] border border-[#1C4736] text-xs text-white placeholder-[#5A7A6C] focus:outline-none focus:border-[#D4A24C]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1 bottom-1 px-3 rounded-full bg-[#D4A24C] text-[#0A1813] hover:bg-[#E5B65E] transition-colors flex items-center justify-center"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
              {subscribed && (
                <span className="text-[11px] text-[#D4A24C] flex items-center gap-1 mt-1">
                  <Sparkles className="w-3 h-3" /> Welcome to the RB Society.
                </span>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#143B2C] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6F8A7D]">
          <p>© {new Date().getFullYear()} RB Restaurant & Culinary House. All rights reserved.</p>
          <p className="text-[#8FA89B] tracking-wider uppercase text-[11px]">
            Ancient Flavours Served with Soul
          </p>
        </div>
      </div>
    </footer>
  );
};
