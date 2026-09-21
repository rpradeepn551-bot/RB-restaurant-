# Agent Guidelines for RB Luxury Restaurant Web Application

## Brand & Visual Philosophy
- **Brand Identity**: **RB Restaurant** (Monogram: Interlocking Serif Gold "RB" with regal crown & laurel insignia).
- **Aesthetic Tone**: Ultra-premium editorial dining, dark emerald green (`#0F3D2E` / `#0A1813`) and rich gold (`#D4A24C`), paired with airy off-white (`#FAFAF7`) for editorial contrast.
- **Visual Reference Directives**:
  - Always maintain the exact headline structure: `ANCIENT FLAVOURS SERVED WITH SOUL.` with `FLAVOURS` rendered in metallic gold.
  - Taglines must preserve exact wording: `— SPICE. INSPIRE. ELEVATE. —` and `ROOTED IN HERITAGE. INSPIRED BY CULINARY ART.`.
  - Statistics Panel metrics: `50+ SIGNATURE DISHES`, `12K+ HAPPY GUESTS`, `8 PRESTIGIOUS AWARDS`, `1 UNFORGETTABLE EXPERIENCE`.
  - Buttons: Pill/rounded geometry. Gold CTA (`EXPLORE OUR MENU`) and Forest Green secondary CTA (`WATCH OUR STORY`).

## Code Structure & Conventions
- **Modularity**: Break components cleanly into dedicated modules:
  - `src/components/Header.tsx`: Sticky navigation, brand emblem, mobile menu, cart toggle
  - `src/components/Hero.tsx`: Exact hero section layout with vertical gold tagline, headline, CTAs, food showcase, and stats panel
  - `src/components/Specialities.tsx`: "Our Specialities" section with thin divider, category tabs, and interactive dish cards
  - `src/components/Experiences.tsx`: Royal degustation, private dining, and sufi musical nights
  - `src/components/OurStory.tsx`: Heritage culinary storytelling, spice route map, master chef's manifesto
  - `src/components/ReservationModal.tsx`: Step-by-step reservation system with confirmation pass
  - `src/components/StoryModal.tsx`: Visual narrative player modal
  - `src/components/CartDrawer.tsx`: Sliding order drawer with cart calculations and checkout
  - `src/components/Footer.tsx`: Rich multi-column footer with newsletter, hours, and directions
- **Icons**: Exclusively use `lucide-react`.
- **Motion**: Use `motion/react` for smooth transitions, hover scalings, and drawer animations.
- **Images**: Always specify `referrerPolicy="no-referrer"` on `<img>` elements.
- **Responsive Handling**: Test and preserve layouts seamlessly on mobile (<768px), tablet (768–1199px), and desktop (1200px+).
