import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Utensils, Calendar } from 'lucide-react';
import { LOGO_IMAGE_PATH } from '../data/restaurantData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
  activeSection,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: 'hero' },
    { label: 'OUR STORY', href: 'story' },
    { label: 'MENU', href: 'specialities' },
    { label: 'OFFERS', href: 'offers' },
    { label: 'EXPERIENCES', href: 'experiences' },
    { label: 'RESERVATIONS', href: 'reservations-section' },
    { label: 'CONTACT', href: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-20 ${
        isScrolled
          ? 'bg-[#081510]/95 backdrop-blur-md shadow-2xl border-b border-[#1E3A2F]'
          : 'bg-gradient-to-b from-[#06120D]/90 via-[#06120D]/60 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Brand & Logo */}
        <div
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 cursor-pointer group"
          id="header-brand-logo"
        >
          <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#D4A24C]/60 p-0.5 bg-[#0F2D22] shadow-md group-hover:border-[#D4A24C] transition-colors">
            <img
              src={LOGO_IMAGE_PATH}
              alt="RB Restaurant Royal Emblem"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-cinzel text-xl font-bold tracking-[0.2em] text-[#F5F0E6] group-hover:text-[#D4A24C] transition-colors">
                RB
              </span>
              <span className="text-[10px] tracking-[0.25em] font-medium text-[#D4A24C] border-l border-[#D4A24C]/40 pl-1.5 uppercase font-sans-ui">
                FOODIE+
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.28em] text-[#A3B8AC] font-light">
              Indian Fine Dining
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`text-xs tracking-[0.2em] font-medium transition-all duration-200 uppercase relative py-1 ${
                  isActive
                    ? 'text-[#D4A24C]'
                    : 'text-[#E0DACE] hover:text-[#D4A24C]'
                }`}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4A24C] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Reserve Button & Cart */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onOpenReservation}
            id="header-reserve-table-btn"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-[0.16em] uppercase bg-[#D4A24C] hover:bg-[#E5B65E] text-[#0A1A14] shadow-lg hover:shadow-[#D4A24C]/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>RESERVE A TABLE</span>
          </button>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            id="header-cart-toggle-btn"
            aria-label="Open order bag"
            className="relative p-2.5 rounded-full bg-[#122E23] hover:bg-[#1A3D30] text-[#F5F0E6] hover:text-[#D4A24C] border border-[#234B3B] transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#D4A24C] text-[#0A1813] text-[10px] font-bold flex items-center justify-center shadow-md animate-scale">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2.5 rounded-full bg-[#122E23] text-[#F5F0E6] hover:text-[#D4A24C] border border-[#234B3B]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A1813]/98 backdrop-blur-xl border-b border-[#1E3A2F] px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-sm tracking-[0.2em] font-medium text-[#E0DACE] hover:text-[#D4A24C] py-2 border-b border-[#163327]"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  onOpenReservation();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold tracking-[0.16em] uppercase bg-[#D4A24C] text-[#0A1A14]"
              >
                <Calendar className="w-4 h-4" />
                <span>RESERVE A TABLE</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
