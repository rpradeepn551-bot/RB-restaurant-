import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OffersMarquee } from './components/OffersMarquee';
import { Specialities } from './components/Specialities';
import { SpecialOffers } from './components/SpecialOffers';
import { Experiences } from './components/Experiences';
import { OurStory } from './components/OurStory';
import { ContactSection } from './components/ContactSection';
import { ReservationModal } from './components/ReservationModal';
import { StoryModal } from './components/StoryModal';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { CartItem, Dish } from './types';
import { ShoppingBag, Phone, Sparkles } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [appliedPromoCode, setAppliedPromoCode] = useState<string>('');

  const handleAddToCart = (dish: Dish) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.dish.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.dish.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { dish, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (dishId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.dish.id === dishId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (dishId: string) => {
    setCart((prev) => prev.filter((item) => item.dish.id !== dishId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyPromo = (code: string) => {
    setAppliedPromoCode(code);
    setCartOpen(true);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#07130E] text-[#F5F0E6] flex flex-col font-sans-ui selection:bg-[#D4A24C] selection:text-[#0A1A14]">
      {/* Sticky Glassmorphism Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenReservation={() => setReservationOpen(true)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Exact Hero Section */}
        <Hero
          onExploreMenu={() => scrollToSection('specialities')}
          onWatchStory={() => setStoryOpen(true)}
        />

        {/* Marquee Ticker */}
        <OffersMarquee />

        {/* "Our Specialities" with thin elegant horizontal line & 115+ Dishes */}
        <Specialities
          onAddToCart={handleAddToCart}
          cartDishIds={cart.map((c) => c.dish.id)}
        />

        {/* 30 Restaurant Offers Section */}
        <SpecialOffers
          onApplyPromoCode={handleApplyPromo}
          appliedPromoCode={appliedPromoCode}
          onOpenCart={() => setCartOpen(true)}
        />

        {/* Our Story Section with Interactive Chapters & Working Watch Story Button */}
        <OurStory onWatchStory={() => setStoryOpen(true)} />

        {/* Experiences Section */}
        <Experiences onReserveExperience={() => setReservationOpen(true)} />

        {/* Direct Contact Us Section with phone, email, hours, and direct inquiry form */}
        <ContactSection />

        {/* Call-to-Action Royal Banquet Banner */}
        <section
          id="reservations-section"
          className="relative py-20 bg-gradient-to-b from-[#0B261D] to-[#071510] border-t border-[#1C4635] text-center px-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.28em] text-[#D4A24C] uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE ROYAL BANQUET AWAITS</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-white mb-6">
              An Evening of Ancient Flavours
            </h2>
            <p className="text-base sm:text-lg text-[#BACDC2] max-w-2xl mx-auto mb-8 font-sans-ui">
              Whether celebrating milestones or indulging in an intimate culinary getaway, our kitchen welcomes you with timeless Indian warmth.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => scrollToSection('specialities')}
                id="cta-explore-menu-btn"
                className="px-8 py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-[#D4A24C] hover:bg-[#E5B65E] text-[#0A1A14] shadow-2xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Explore Signature Menu
              </button>
              <a
                href="tel:+918007243463"
                className="px-8 py-4 rounded-full text-xs font-semibold tracking-[0.16em] uppercase bg-[#0D3325] hover:bg-[#144734] text-white border border-[#235843] transition-all flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4A24C]" />
                <span>Call Concierge (+91 800 724 3463)</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenReservation={() => setReservationOpen(true)}
      />

      {/* Floating Bottom Bag on Mobile */}
      {totalCartCount > 0 && (
        <div className="lg:hidden fixed bottom-5 right-4 z-30">
          <button
            onClick={() => setCartOpen(true)}
            className="py-3 px-5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#D4A24C] text-[#0A1A14] shadow-2xl border border-[#F5E2B4] flex items-center gap-2 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>ORDER BAG ({totalCartCount})</span>
          </button>
        </div>
      )}

      {/* Interactive Modals */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      <StoryModal
        isOpen={storyOpen}
        onClose={() => setStoryOpen(false)}
      />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        appliedPromoCode={appliedPromoCode}
        onApplyPromoCode={setAppliedPromoCode}
      />
    </div>
  );
}
