# Stellar Media — Creative & Digital Marketing Agency (Abu Dhabi)

A bilingual (**Arabic-first RTL** & **English LTR**) web application for **Stellar Media**, a creative, branding, luxury packaging, and digital marketing agency based in Abu Dhabi, UAE. Built with the **Cosmic Editorial** design system.

---

## 1. Tech Stack

- **Frontend Framework:** React 19 + TypeScript + Vite 6
- **Routing:** React Router DOM v7
- **Styling & Design Tokens:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Typography:** `Alexandria` (Arabic Display), `Readex Pro` (Arabic UI/Body), `Inter` (English Display/Body)
- **Forms & Validation:** React Hook Form + Zod + `@hookform/resolvers`
- **Icons:** Lucide React
- **Backend / API:**
  - **Express.js (`server/contactServer.mjs`):** Standalone REST API server (`npm run server`)
  - **Vite Middleware (`vite.config.ts`):** Integrated `/api/contact` & `/api/contact/status` endpoints during local `npm run dev`
  - **Vercel Serverless Functions (`api/contact/`):** Production serverless handlers + SPA route rewrites (`vercel.json`)
  - **Email Delivery Provider:** Resend REST API (`https://api.resend.com/emails`)

---

## 2. Project Structure

```text
Stellar/
├── api/
│   └── contact/
│       ├── index.js                 # Vercel Serverless POST /api/contact handler
│       └── status.js                # Vercel Serverless GET /api/contact/status handler
├── public/
│   ├── background.png
│   └── stellar_logo.png
├── server/
│   └── contactServer.mjs            # Standalone Express.js contact API backend
├── src/
│   ├── assets/
│   │   ├── portfolio/               # Agency case study imagery
│   │   ├── background.png           # Cosmic nebula background asset
│   │   └── stellar_logo.png         # Official Stellar Media emblem
│   ├── components/
│   │   ├── layout/
│   │   │   ├── LanguageSwitcher.tsx # Bilingual AR/EN switcher
│   │   │   ├── SiteFooter.tsx       # Shared agency footer
│   │   │   └── SiteHeader.tsx       # Sticky responsive header & mobile drawer
│   │   ├── portfolio/
│   │   │   └── ProjectCarousel.tsx  # Continuous draggable Coverflow carousel
│   │   └── ui/
│   │       ├── Button.tsx           # Reusable button & link primitive
│   │       ├── Container.tsx        # Responsive container wrapper
│   │       └── SectionHeading.tsx   # Editorial section heading component
│   ├── data/
│   │   ├── projects.ts              # Typed bilingual studio case studies
│   │   └── services.ts              # Typed bilingual agency capabilities
│   ├── i18n/
│   │   ├── LanguageContext.tsx      # Language state, localStorage persistence & dir/lang sync
│   │   └── translations.ts          # Full Arabic & English translation dictionaries
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── ServiceDetailPage.tsx
│   │   ├── WorkPage.tsx
│   │   ├── ProjectDetailPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env.example                     # Environment variable template (no secrets)
├── vercel.json                      # Vercel SPA rewrites & API routing
├── vite.config.ts
└── package.json
```

---

## 3. Application Routes

### Primary Routes
- `/` — Home (Hero → Featured Projects Coverflow Carousel → Creative & Marketing Capabilities → About Preview → Methodology → Contact CTA)
- `/about` — About Us (Strategic Perspective, Core Philosophy Pillars, Central Statement, 4-Step Methodology)
- `/services` — Services Overview (5 Agency Capabilities)
- `/work` — Selected Work & Studio Case Studies (Transparency Banner, Interactive Coverflow Carousel, Editorial Monographs)
- `/contact` — Contact & Consultation Portal (Live Gateway Status + Validated Form)
- `*` — Custom 404 Not Found Page

### Service Detail Routes (`/services/:slug`)
- `/services/strategy-consulting`
- `/services/branding-identity`
- `/services/creative-production`
- `/services/digital-marketing`
- `/services/digital-experiences`

### Project Case Study Detail Routes (`/work/:slug`)
- `/work/qasr-al-nour` (also accessible via legacy alias `/work/cultural-destination`)
- `/work/lumina-parfums` (also accessible via legacy alias `/work/future-mobility`)
- `/work/al-reem-luxury`
- `/work/digital-culture`

---

## 4. Setup & Run Instructions

### Prerequisites
- Node.js `v20+` (tested on `v24.16.0`)
- npm `v10+`

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` in the `Stellar/` root directory and provide your values:
```bash
cp .env.example .env
```

Required environment variable names (do **not** commit real secret values to Git):
- `RESEND_API_KEY` — Resend transactional email API key (`re_...`)
- `CONTACT_RECIPIENT_EMAIL` — Destination inbox for contact form inquiries
- `CONTACT_SENDER_EMAIL` — Verified sender address on Resend (e.g., `Stellar Media <onboarding@resend.dev>`)
- `PORT` — Optional port for standalone Express backend (defaults to `3001`)

### 3. Run Development Server
```bash
npm run dev
```
Opens on `http://localhost:5173`. The Vite server includes built-in middleware for `/api/contact/status` and `/api/contact`.

### 4. Run Standalone Express Backend
```bash
npm run server
```
Starts `server/contactServer.mjs` on `http://localhost:3001`.

### 5. Type-Check & Build for Production
```bash
npm run build
```
Runs `tsc -b && vite build` and outputs the production bundle to `dist/`.

---

## 5. Portfolio Integrity & AI Tool Disclosure

- **Portfolio Honesty:** All case studies (`Qasr Al-Nour`, `Lumina Parfums`, `Al Reem Haute Joaillerie`, `Digital Culture`) are transparently labeled as **Studio Portfolio Case Studies / دراسات حالة استوديو** with an explicit attribution banner on `/work`. No real client names, fabricated testimonials, or unverified KPI metrics are claimed.
- **AI Tools Used:**
  - **Google Stitch:** Initial design system exploration, color tokens (`Cosmic Editorial`), and layout reference generation.
  - **Antigravity (AI Coding Assistant):** Assisted with React/TypeScript component implementation, bilingual Arabic/English dictionary structuring, Express.js + Resend API integration, and continuous physics-based Coverflow carousel engineering.
