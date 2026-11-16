# Lux Salon — Modern Hair Salon & Appointment Booking System Template

A luxurious, production-ready hair salon website with a 5-step online appointment booking engine, built with **Next.js (App Router)**, **Tailwind CSS**, **TypeScript**, and **next-intl** for **English & Amharic** localization.

Designed as a **100% white-label rebrandable template**: change your salon's name, logo, color palette, staff, services, and pricing from a single configuration file!

---

## 🌟 Key Features

- **🌐 Full Bilingual Support (English & Amharic)**: Complete translation coverage with custom Noto Sans Ethiopic typography for native Ethiopic script rendering.
- **⚡ 5-Step Under-1-Minute Booking Wizard**:
  - **Step 1: Style / Service selection**: Multiple service selection with real-time total duration and price calculation.
  - **Step 2: Stylist selection**: Dynamically filtered to stylists qualified for chosen services, plus "Any Available Stylist" option.
  - **Step 3: Date & Time Picker**: Live slot calculation preventing double-booking; 12h/24h toggle; optional Ethiopian calendar toggle; "Next available slot" recommendation.
  - **Step 4: Contact details**: Ethiopian phone validation, optional email, notes.
  - **Step 5: Review & Confirmation**: Summary, Google Calendar sync, Apple/Outlook (.ics) download, direct WhatsApp notification link, and cancellation/reschedule actions.
- **🇪🇹 Ethiopian Market Features**:
  - Native Amharic language support with natural phrasing (`ቀጠሮ ያዙ`, `የፀጉር ሳሎን`, etc.).
  - Realistic ETB pricing and popular local styles (Box Braids, Knotless Braids, Locs, Keratin, Balayage, Fades).
  - Ethiopian Calendar display toggle (13 months with accurate Ge'ez month conversion).
  - Timezone locked to `Africa/Addis_Ababa` (GMT+3).
  - Placeholders for local mobile payments: **Telebirr**, **CBE Birr**, and **Chapa**.
- **🎨 Luxury Aesthetic & Design Tokens**:
  - Warm cream base (`#FAF7F2`), charcoal accents (`#2C2C2C`), gold highlights (`#C9A84C`), and deep plum highlights (`#3D1A3E`).
  - Cormorant Garamond serif headings paired with clean Inter and Noto Sans Ethiopic body typography.
  - Dark mode support via Tailwind class toggle.
- **📱 Mobile-First & Responsive**:
  - Sticky mobile header with quick "Book Now" CTA.
  - Floating WhatsApp, phone call, and calendar appointment setter button.
- **🔒 Admin Dashboard**:
  - Calendar overview with daily/weekly booking breakdown.
  - Live statistics: Today's bookings, weekly volume, total revenue, pending confirmations.
  - Most popular styles analytics and stylist workload metrics.
  - Service and stylist management editors.
  - Demo login at `/admin/login` (`admin@luxsalon.et` / `admin123`).

---

## 📁 Project Structure

```text
├── config/
│   └── salon.ts                 # Root re-export for quick rebranding
├── src/
│   ├── app/
│   │   ├── [locale]/            # Next-intl localized route group
│   │   │   ├── layout.tsx       # Root layout: fonts, providers, HTML metadata
│   │   │   ├── page.tsx         # Home page
│   │   │   ├── services/page.tsx# Services & Styles explorer
│   │   │   ├── team/page.tsx    # Stylists & portfolio page
│   │   │   ├── gallery/page.tsx # Masonry photo gallery + lightbox
│   │   │   ├── about/page.tsx   # Salon story, values, photos & access
│   │   │   ├── contact/page.tsx # Contact form, WhatsApp, Telegram & map
│   │   │   ├── booking/page.tsx # Core booking wizard
│   │   │   ├── admin/           # Admin dashboard & management
│   │   │   ├── faq/page.tsx     # Frequently asked questions
│   │   │   └── policies/page.tsx# Cancellation & salon policies
│   │   ├── globals.css          # CSS variables & Tailwind styling
│   │   └── layout.tsx           # Base App Router layout
│   ├── components/
│   │   ├── booking/             # Wizard steps, calendar & time slot picker
│   │   ├── home/                # Hero, features, stylists, gallery, CTA
│   │   ├── layout/              # Header, Footer, LanguageSwitcher, FloatingActions
│   │   ├── services/            # ServiceCard, ServiceGrid (search & filters)
│   │   ├── team/                # StylistCard, StylistGrid
│   │   ├── gallery/             # GalleryGrid, GalleryLightbox
│   │   └── admin/               # Admin stats, calendar, booking list, editors
│   ├── config/
│   │   └── salon.ts             # MASTER REBRANDING CONFIGURATION FILE
│   ├── data/
│   │   ├── services.ts          # 14 realistic services (ETB pricing & duration)
│   │   ├── stylists.ts          # 5 detailed stylists with working hours & breaks
│   │   ├── bookings.ts          # Sample bookings seed data
│   │   ├── gallery.ts           # 12 gallery portfolio entries
│   │   └── testimonials.ts      # Client reviews (English & Amharic)
│   ├── lib/
│   │   ├── booking.ts           # Slot availability engine & conflict resolution
│   │   ├── ethiopianCalendar.ts # Julian Day Gregorian ↔ Ethiopian conversion
│   │   └── utils.ts             # cn, currency format, duration format, ICS builder
│   ├── messages/
│   │   ├── en.json              # English dictionary
│   │   └── am.json              # Amharic dictionary
│   └── i18n.ts                  # Routing configuration (en, am)
```

---

## 🚀 How to Rebrand in Under 5 Minutes

All brand identities, contact numbers, working hours, and social media handles are centralized in **`/src/config/salon.ts`** (or `/config/salon.ts`):

```typescript
export const salonConfig = {
  salonName: 'Lux Salon',                     // Change salon name
  tagline: 'Where Beauty Meets Elegance',     // English tagline
  taglineAm: 'ውበት ከብስለት ጋር የሚገናኝበት ቦታ',    // Amharic tagline
  logo: '/images/placeholder-logo.svg',       // Logo image or SVG

  contact: {
    phone: '+251 911 234 567',                // Salon phone
    whatsapp: '+251911234567',                // WhatsApp direct number
    email: 'hello@luxsalon.et',
    telegram: '@luxsalonet',
    instagram: 'https://instagram.com/luxsalon.et',
  },

  colors: {
    primary: '#C9A84C',                       // Brand gold
    secondary: '#3D1A3E',                     // Brand deep plum
    accent: '#B76E79',                        // Rose gold
    background: '#FAF7F2',                    // Cream
    text: '#2C2C2C',                          // Charcoal
  },

  currency: 'ETB',
  timezone: 'Africa/Addis_Ababa',
  ...
}
```

### Changing Colors
Adjust the color definitions in:
1. `src/config/salon.ts` (for runtime reference)
2. `src/app/globals.css` (CSS variables `--primary`, `--secondary`, `--accent`)
3. `tailwind.config.ts` (Tailwind classes `bg-gold`, `bg-plum`, `bg-cream`)

### Updating Services & Stylists
- **Services**: Edit `src/data/services.ts`. Every service includes `name`, `category`, `price`, `duration` (in minutes), `stylistIds`, and photo URL.
- **Stylists**: Edit `src/data/stylists.ts`. Define stylists, their weekly schedule, break times, days off, and portfolio images.

---

## 🔌 Connecting a Real Backend (Supabase / Firebase / Postgres)

The project currently uses mock data in `src/data/` structured to map 1:1 with standard relational databases:

### Recommended Schema (Supabase / Postgres)
```sql
create table stylists (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  name_am text,
  photo_url text,
  role text,
  rating numeric(2,1) default 5.0,
  working_hours jsonb,
  created_at timestamptz default now()
);

create table services (
  id uuid primary key default gen_random_uuid(),
  name jsonb not null, -- { "en": "...", "am": "..." }
  category text not null,
  price integer not null,
  duration integer not null,
  image_url text,
  created_at timestamptz default now()
);

create table bookings (
  id text primary key,
  client_name text not null,
  client_phone text not null,
  client_email text,
  stylist_id uuid references stylists(id),
  services jsonb not null,
  booking_date date not null,
  start_time text not null,
  end_time text not null,
  total_price integer not null,
  status text default 'confirmed',
  created_at timestamptz default now()
);
```

To connect:
1. Install `@supabase/supabase-js`.
2. Replace mock calls in `src/components/booking/BookingStepReview.tsx` and `src/components/admin/AdminBookingList.tsx` with Supabase queries:
   ```ts
   const { data, error } = await supabase.from('bookings').insert([...])
   ```

---

## 🛠️ Running Locally

```bash
# 1. Install dependencies
npm install --legacy-peer-deps

# 2. Run the development server
npm run dev

# 3. Open in your browser
http://localhost:3000/en
```

To test the Amharic version, switch the language toggle in the header or visit `http://localhost:3000/am`.
