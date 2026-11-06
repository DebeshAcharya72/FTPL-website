# FTPL (Flasho Tech Private Limited) Corporate Website

> Modern, production-ready company website for **Flasho Tech Private Limited (FTPL)**, a technology enterprise based in Bhubaneswar, Odisha, India. Creators of **JSJ Card** ("The World's First Purpose Driven Universal Card"), Smart Business Solutions, Career Management, Event Systems, and AI & Data consulting.

---

## 🚀 Tech Stack

- **Framework**: React 18 + JavaScript (ES6+, JSX) bootstrapped with Vite
- **Styling**: Tailwind CSS with custom theme palette & dark mode class strategy
- **Routing**: React Router DOM v6 with route-based code splitting (`React.lazy` + `Suspense`) and auto-scroll-to-top
- **Animations**: Framer Motion for scroll-reveals (`whileInView`), 3D card perspective tilt, and interactive card flips
- **Icons**: Lucide React
- **SEO & Meta**: `react-helmet-async` for titles, OpenGraph, Twitter cards, and canonical links
- **Forms**: React Hook Form with validation for Contact and Careers application modal
- **Email Delivery**: EmailJS integration (`@emailjs/browser`) with fallback support
- **Design Tokens**:
  - Primary (Deep Navy): `#0B1F3A`
  - Accent (Electric Blue): `#2F6BFF`
  - Highlight (Warm Saffron): `#FF9933`
  - Background (Off-white): `#F8FAFC`
  - Typography: **Plus Jakarta Sans** (headings) & **Inter** (body) via Google Fonts

---

## 📁 Project Structure

```text
FTPL-website/
├── public/
│   ├── favicon.svg          # Custom FTPL brand icon
│   ├── robots.txt           # Search crawler directives
│   ├── sitemap.xml          # Canonical XML sitemap
│   └── _redirects           # Netlify SPA redirect rule
├── src/
│   ├── assets/              # Static branding and graphics
│   ├── components/          # Reusable UI pieces (.jsx)
│   │   ├── Accordion.jsx    # Expandable FAQ component
│   │   ├── Button.jsx       # Universal button & link component
│   │   ├── CTASection.jsx   # Banner call-to-action
│   │   ├── FeatureCard.jsx  # Feature card with hover micro-interactions
│   │   ├── FloatingWhatsApp.jsx # Bottom-right quick WhatsApp launcher
│   │   ├── Footer.jsx       # Comprehensive legal & navigation footer
│   │   ├── JSJCardVisual.jsx# 3D tilt & interactive flip JSJ Card pass
│   │   ├── Modal.jsx        # Accessible dialog for job applications
│   │   ├── Navbar.jsx       # Sticky navbar with mobile slide-in drawer
│   │   ├── PartnerMarquee.jsx # Infinite marquee of partner logos
│   │   ├── ScrollToTop.jsx  # Route change scroll reset
│   │   ├── SectionHeading.jsx # Section header with badges
│   │   ├── SEO.jsx          # Dynamic helmet meta tag provider
│   │   ├── StatCard.jsx     # Animated counter on viewport enter
│   │   ├── TestimonialCarousel.jsx # Multi-stakeholder carousel
│   │   └── ThemeToggle.jsx  # Light/Dark mode toggle (persisted)
│   ├── data/                # Text & lists as independent JS data files
│   │   ├── audiences.js     # Who we serve data (6 segments)
│   │   ├── company.js       # Corporate CIN, mission, vision, values, contact
│   │   ├── ecosystem.js     # One Ecosystem Three Ways In
│   │   ├── jobs.js          # Open career vacancies & culture
│   │   ├── jsjCard.js       # Card specs, steps, benefits, FAQs
│   │   ├── leadership.js    # Founders (IIT Bhubaneswar MTech) & advisors
│   │   ├── milestones.js    # Toshali Mela 2026, Job Fairs, USBM Drive
│   │   ├── navigation.js    # Navlinks, legal links, quick links
│   │   ├── partners.js      # Marquee partners data
│   │   ├── services.js      # Consulting services & engagement framework
│   │   ├── solutions.js     # SBS, Amplify, Careers, Events systems
│   │   ├── stats.js         # Verified numerical milestone counters
│   │   └── testimonials.js  # Verified partner reviews
│   ├── layouts/
│   │   └── MainLayout.jsx   # Shell with Navbar, Outlet, Footer, WhatsApp
│   ├── pages/               # One file per page (.jsx)
│   │   ├── Home.jsx         # /
│   │   ├── About.jsx        # /about
│   │   ├── JSJCard.jsx      # /jsj-card
│   │   ├── Solutions.jsx    # /solutions
│   │   ├── Services.jsx     # /services
│   │   ├── Careers.jsx      # /careers
│   │   ├── Contact.jsx      # /contact
│   │   ├── PrivacyPolicy.jsx# /privacy-policy
│   │   ├── Terms.jsx        # /terms
│   │   └── NotFound.jsx     # 404 handler
│   ├── App.jsx              # Routes configuration & Suspense fallback
│   ├── index.css            # Tailwind directives, 3D transforms & styles
│   └── main.jsx             # React 18 DOM root & BrowserRouter
├── .env.example             # Environment variables template
├── tailwind.config.js       # Custom colors, fonts, shadows, and animations
├── vercel.json              # Vercel SPA rewrite rule
├── vite.config.js           # Vite configuration
└── package.json
```

---

## ⚙️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Open `.env` and configure your credentials:
```env
# EmailJS Configuration (https://www.emailjs.com)
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key

# Website Base URL
VITE_SITE_URL=https://flashotech.in
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized static build will be generated in the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## 🌐 Deployment Guidelines

Because this application utilizes client-side routing with `react-router-dom`, SPA redirects are pre-configured to ensure direct links like `/about` or `/jsj-card` do not result in a 404 error on page refresh.

### Deploying to Vercel
1. Install the Vercel CLI (`npm i -g vercel`) or link your Git repository in the Vercel dashboard.
2. The included `vercel.json` ensures all route requests rewrite to `index.html`:
   ```json
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ]
   }
   ```
3. Add the `VITE_EMAILJS_*` environment variables in your Vercel Project Settings under **Environment Variables**.
4. Deploy:
   ```bash
   vercel --prod
   ```

### Deploying to Netlify
1. Connect your repository to Netlify.
2. The included `public/_redirects` file is automatically published to the root of your build:
   ```text
   /*    /index.html   200
   ```
3. Set your Build Command to `npm run build` and Publish Directory to `dist`.
4. Add the `VITE_EMAILJS_*` environment variables under **Site Settings > Environment Variables**.

---

## 🏢 Corporate Details
- **Company Name**: Flasho Tech Private Limited (FTPL)
- **CIN**: `U74999OR2020PTC032827`
- **Incorporation**: 2020 • Bhubaneswar, Odisha, India
- **Headquarters**: OCAC Tower, Acharya Vihar, Bhubaneswar, Odisha 751013
- **Flagship Portal**: [www.jsjcard.com](https://www.jsjcard.com)
