# Product Requirements Document (PRD)
## Project: RB Luxury Restaurant Web Experience ("Ancient Flavours Served with Soul")

---

### 1. Executive Summary & Brand Identity
- **Brand Name**: RB Fine Dining & Culinary House (also presented in editorial digital form as FOODIE+ / RB)
- **Brand Essence**: Luxury Indian fine-dining that bridges ancient culinary secrets with contemporary gastronomy.
- **Tagline**: `— SPICE. INSPIRE. ELEVATE. —`
- **Heritage Motto**: `ROOTED IN HERITAGE. INSPIRED BY CULINARY ART.`
- **Headline Statement**: `ANCIENT FLAVOURS SERVED WITH SOUL.`
- **Brand Mission**: Deliver an unforgettable sensory journey of authentic tandoor, royal dum cooking, and heirloom spice craftsmanship wrapped in modern high-end editorial aesthetics.

---

### 2. Target Audience & Personas
1. **The Connoisseur**: Discerning diners seeking authentic regional Indian flavours presented with Michelin-grade finesse.
2. **Special Occasion Celebrators**: Diners booking anniversaries, corporate banquets, and intimate luxury dates.
3. **Culinary Explorers**: Food lovers drawn to heritage storytelling, artisanal cocktails, and royal degustation menus.

---

### 3. Design System & Visual Architecture
As codified in the design guidelines:
- **Color Palette**:
  - Primary Dark Green: `#0F3D2E` / `#1A4D3A`
  - Ultra Deep Charcoal/Forest Canvas: `#06120D` / `#0B1A14`
  - Metallic Warm Gold / Mustard CTA: `#D4A24C` / `#E5B358` (Accent highlight: `#F6E3B4`)
  - Light Contrast Neutral: `#FAFAF7` / `#F5F3ED`
  - Text: Off-white `#F5F0E6` on dark surfaces; Charcoal `#1C2421` on light surfaces
- **Typography**:
  - Display / Hero Headline: Playfair Display / Cormorant Garamond (Editorial serif with regal tracking)
  - Crest / Monograms: Cinzel (Classical Roman serif)
  - UI / Navigation / Body: Plus Jakarta Sans (Clean, high-legibility geometric sans)
- **Composition & Layout**:
  - Tall vertical split hero with dark ambiance, circular bokeh lights, authentic tandoor paneer dish presentation.
  - Sticky glassmorphism header (80px) with logo, navigation links, and fast action CTAs.
  - Distinctive stats panel with bold metrics (`50+ SIGNATURE DISHES`, `12K+ HAPPY GUESTS`, `8 PRESTIGIOUS AWARDS`, `1 UNFORGETTABLE EXPERIENCE`).
  - Seamless transition to the crisp light editorial section titled "Our Specialities".

---

### 4. Key Functional Modules & Features
1. **Interactive Navigation Header**:
   - Monogram logo: Royal Gold "RB" emblem
   - Menu items: `HOME`, `OUR STORY`, `MENU`, `EXPERIENCES`, `RESERVATIONS`, `CONTACT`
   - Primary CTA: `RESERVE A TABLE`
   - Real-time Cart Drawer toggle with badge counter
2. **Hero Section**:
   - Vertical gold motto: `ROOTED IN HERITAGE. INSPIRED BY CULINARY ART.`
   - Tagline: `— SPICE. INSPIRE. ELEVATE. —`
   - Master Headline: `ANCIENT FLAVOURS SERVED WITH SOUL.` (With `FLAVOURS` highlighted in opulent gold)
   - Supporting narrative: *"Rooted in India's rich culinary traditions, we bring together unforgettable dining experiences."*
   - Dual Rounded Action Buttons:
     - `EXPLORE OUR MENU` (Gold rounded button with dark text)
     - `WATCH OUR STORY` (Dark green rounded button with white text and modal experience)
   - Large dark green stats banner (`50+`, `12K+`, `8`, `1`)
3. **Our Specialities Section**:
   - Classic serif heading with clean horizontal accent line
   - Category filtering (All, Royal Starters, Main Curries, Tandoor & Breads, Desserts, Artisanal Sips)
   - Detailed dish cards featuring high-resolution photography, ingredients, dietary flags (Veg, Gluten-free, Chef's Choice), price, and instant Add-to-Cart functionality
4. **Cinematic Story Modal ("Watch Our Story")**:
   - Interactive modal detailing the slow-fire tandoor traditions, 48-hour slow-cooked Dal Bukhara, hand-pounded spices from Malabar, and royal Awadhi dum techniques.
5. **Table Reservation System**:
   - Interactive booking modal with guest counter, date picker, time slot selection (Lunch, Twilight, Dinner), seating preference (Main Dining, Chef's Table, Royal Verandah, Private Suite), and dietary requests.
   - Instant booking confirmation ticket state.
6. **Online Ordering & Cart Drawer**:
   - Slide-out side drawer with itemized orders, quantity modifiers, subtotal calculation, tax/delivery estimate, promo code input, and seamless mock checkout.
7. **Curated Experiences & Sufi Nights Band**:
   - Degustation menus, Chef's table sessions, and live acoustic sufi evenings.
8. **Luxury Footer**:
   - Brand overview, opening hours, location in prime arts & culinary district, contact information, newsletter subscription with instant confirmation.

---

### 5. Technical Stack & Non-Functional Requirements
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 + Custom Luxury Typography variables
- **Motion & Interactions**: `motion/react` for smooth fades, drawer slides, and staggered card entrances
- **Icons**: `lucide-react`
- **Performance**: Instant render, responsive across mobile (<768px), tablet (768–1199px), and desktop (1200px+).
- **Accessibility**: Minimum 4.5:1 color contrast, keyboard accessible modals, visible focus states.
