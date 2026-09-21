import React, { useState, useEffect } from 'react';
import {
  ShoppingBag,
  Menu as MenuIcon,
  X,
  Home,
  BookOpen,
  Utensils,
  Sparkles,
  Award,
  PhoneCall,
} from 'lucide-react';
import { LOGO_IMAGE_PATH } from '../data/restaurantData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation?: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
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
    { label: 'HOME', href: 'hero', icon: Home },
    { label: 'OUR STORY', href: 'story', icon: BookOpen },
    { label: 'MENU', href: 'specialities', icon: Utensils },
    { label: 'OFFERS', href: 'offers', icon: Sparkles },
    { label: 'EXPERIENCES', href: 'experiences', icon: Award },
    { label: 'CONTACT', href: 'contact', icon: PhoneCall },
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

        {/* Desktop Navigation Links with Icons */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            const Icon = link.icon;
            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`flex items-center gap-2 text-xs tracking-[0.16em] font-semibold transition-all duration-200 uppercase relative py-2 group cursor-pointer ${
                  isActive
                    ? 'text-[#D4A24C]'
                    : 'text-[#D8D2C4] hover:text-[#D4A24C]'
                }`}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Icon
                  className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110 ${
                    isActive ? 'text-[#D4A24C]' : 'text-[#8EA89B] group-hover:text-[#D4A24C]'
                  }`}
                />
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4A24C] rounded-full shadow-[0_0_8px_#D4A24C]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Cart & Mobile Menu */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            id="header-cart-toggle-btn"
            aria-label="Open order bag"
            className="relative p-2.5 rounded-full bg-[#122E23] hover:bg-[#1A3D30] text-[#F5F0E6] hover:text-[#D4A24C] border border-[#234B3B] transition-colors cursor-pointer"
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
            className="lg:hidden p-2.5 rounded-full bg-[#122E23] text-[#F5F0E6] hover:text-[#D4A24C] border border-[#234B3B] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A1813]/98 backdrop-blur-xl border-b border-[#1E3A2F] px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center gap-3 text-left text-sm tracking-[0.16em] font-medium text-[#E0DACE] hover:text-[#D4A24C] py-2.5 border-b border-[#163327] cursor-pointer"
                >
                  <Icon className="w-4 h-4 text-[#D4A24C]" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

