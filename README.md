# Deepayan Sarkar — Portfolio

A futuristic, high-converting, responsive portfolio built with:
- **Next.js 14** (App Router) + **TypeScript**
- **TailwindCSS** for utility styling
- **Framer Motion** for all animations
- **Canvas API** for the animated background (no extra libs)

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open
open http://localhost:3000
```

For production:
```bash
npm run build
npm start
```

---

## Project Structure

```
ds-portfolio/
├── app/
│   ├── globals.css          # Tailwind base + custom scrollbar, print styles
│   ├── layout.tsx           # Root layout + metadata
│   └── page.tsx             # Main page — composes all sections
├── components/
│   ├── AnimatedBackground.tsx  # Canvas: mesh gradient + particles + faint lines
│   ├── SplashScreen.tsx        # 1.4s intro: DS monogram SVG + progress bar
│   ├── Nav.tsx                 # Sticky nav, scroll-spy, progress bar, mobile bottom nav
│   ├── Hero.tsx                # Full-viewport hero with grid overlay + CTAs
│   ├── TopImpact.tsx           # Animated counter strip (top 3 resume metrics)
│   ├── Experience.tsx          # Accordion timeline with impact chips
│   ├── Achievements.tsx        # 16 animated counter cards, grouped by type
│   ├── Projects.tsx            # 4 project cards with per-color theming
│   ├── Skills.tsx              # Skill group cards with pill hover effects
│   ├── Education.tsx           # Degree cards + certifications
│   ├── Contact.tsx             # Contact links + availability card + CTA
│   └── Footer.tsx              # Minimal footer
├── data/
│   └── resume.ts            # Single source of truth — every resume line structured
├── hooks/
│   ├── useReducedMotion.ts  # Respects prefers-reduced-motion
│   └── useScrollSpy.ts      # Active section detection for nav
├── lib/
│   └── utils.ts             # cn() helper
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── postcss.config.js
```

---

## Sitemap

| Section | ID | Description |
|---|---|---|
| Splash | — | 1.4s cinematic intro with DS monogram |
| Hero | `#hero` | Name, title, short summary, CTAs |
| Top Impact | — | 3 animated counters from resume |
| Experience | `#experience` | Accordion timeline — Accenture + KEDGE |
| Achievements | — | 16 metric cards with animated counters |
| Projects | `#projects` | L'Oréal, Spotify, BNP Paribas, Tableau |
| Skills | `#skills` | 4 groups — all resume skills included |
| Education | `#education` | Both degrees + 3 certifications |
| Contact | `#contact` | Email, phone, LinkedIn, GitHub, Tableau |

---

## Resume JSON Structure

All resume content lives in `data/resume.ts`:

```ts
{
  basics: { name, initials, title, summary, shortSummary, location, email, phone, availability, workAuth, links },
  topImpact: [ { metric, label, icon } ],
  experience: [ { company, role, dates, location, type, bullets[], metrics[], tags[] } ],
  education: [ { school, degree, level, period, location, current } ],
  projects: [ { id, title, context, type, stack[], bullets[], metrics[], color, link } ],
  skills: [ { category, icon, items[] } ],
  certifications: [ { name, issuer, icon } ],
  achievements: [ { metric, label, context, group } ],
}
```

Every line from the original resume appears in one of these fields.

---

## Customisation

- **Update content** → edit `data/resume.ts` only. All sections auto-update.
- **Change accent colour** → find `#00e5c4` in components and replace with your colour.
- **Disable splash** → set `const [splashDone, setSplashDone] = useState(true)` in `app/page.tsx`.
- **Add projects** → push to `resume.projects[]` in `data/resume.ts`.

---

## Features

- ✅ Cinematic 1.4s splash with animated SVG monogram + progress bar
- ✅ Canvas animated background: mesh gradient + drifting particles + faint connecting lines
- ✅ Sticky nav with scroll-spy active section + scroll progress bar
- ✅ Mobile bottom navigation (touch-friendly, 44px+ targets)
- ✅ Accordion experience timeline with impact metric chips
- ✅ 16 animated counter cards (Framer Motion + requestAnimationFrame)
- ✅ Responsive: 360px mobile → 1280px+ desktop
- ✅ `prefers-reduced-motion` respected everywhere
- ✅ Dark mode default, light toggle available
- ✅ Print-friendly "Download Resume" via `window.print()`
- ✅ All resume content — zero lines dropped
