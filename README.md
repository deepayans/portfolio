# Deepayan Sarkar — Portfolio

Personal portfolio at [deepayan.me](https://deepayan.me) — built with Next.js, TailwindCSS, and Framer Motion.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) + TypeScript 5.5 |
| Styling | TailwindCSS 3.4 |
| Animations | Framer Motion 11 |
| Icons | lucide-react |
| Background | Canvas API (custom value-noise grid) |
| Deployment | Vercel |

---

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Tailwind base + global styles
│   ├── layout.tsx           # Root layout, SEO metadata, JSON-LD schema
│   └── page.tsx             # Full page — all sections composed here
├── components/
│   ├── CountUp.tsx          # Scroll-triggered animated number counter
│   ├── FadeIn.tsx           # Framer Motion fade-in wrapper with optional delay
│   ├── GridBackground.tsx   # Canvas animated drifting grid (value noise)
│   └── MobileNav.tsx        # Mobile hamburger menu with portal overlay
├── public/
│   ├── deepayan.jpg         # Hero photo
│   ├── og-image.jpg         # OpenGraph social preview (1200×630)
│   ├── taqabul-nisha.png    # Testimonial avatar
│   └── tianyuan-zhang.png   # Testimonial avatar
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

```bash
npm run build
npm start
```

---

## Page Sections

| Section | Anchor | Description |
|---|---|---|
| Hero | — | Name, availability badge, photo, CTA buttons |
| Experience | `#experience` | Accenture — 2 roles with animated metrics |
| Testimonials | — | Two professional references with avatars |
| Projects | `#projects` | 4 project cards — BNP Paribas, L'Oréal, Vision App, Tableau |
| Stack | `#stack` | 3-column skill list with lucide-react icons |
| Education | `#education` | KEDGE + UEM degrees, 4 certifications |
| Footer | — | Contact, location, availability, links |

---

## Key Components

### `GridBackground.tsx`
Canvas-based animated background using value noise to drift a grid of line segments. Runs on `requestAnimationFrame`, cleans up on unmount.

### `CountUp.tsx`
Scroll-triggered number animation using `useInView` from Framer Motion + `requestAnimationFrame` with cubic `easeOut`. Handles values like `"97.8%"`, `"10M+"`, `"<200ms"`.

### `MobileNav.tsx`
Hamburger menu rendered via `createPortal` into `document.body`. Uses `AnimatePresence` for enter/exit transitions. Locks body scroll when open.

### `FadeIn.tsx`
Framer Motion wrapper that fades and slides content up on scroll, with configurable `delay`.

---

## SEO

`layout.tsx` includes full SEO metadata:
- OpenGraph + Twitter Card with `og-image.jpg`
- `robots: index, follow`
- Canonical URL (`https://deepayan.me`)
- JSON-LD `Person` schema with social profile links

---

## Dependencies

```json
{
  "next": "^16.2.2",
  "react": "18.3.1",
  "framer-motion": "11.3.19",
  "lucide-react": "^0.408.0",
  "tailwindcss": "3.4.6",
  "typescript": "5.5.3"
}
```

---

## Deployment

Deployed on Vercel. Push to `main` triggers automatic deployment.

Live: [deepayan.me](https://deepayan.me)

---

## License

© 2026 Deepayan Sarkar. All rights reserved.
