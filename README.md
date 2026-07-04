# Deepayan Sarkar — Portfolio

Personal portfolio at [deepayan.me](https://deepayan.me) — built with Next.js 14, TailwindCSS, Framer Motion, and a canvas-based animated grid background.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) + TypeScript |
| Styling | TailwindCSS |
| Animations | Framer Motion |
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
│   ├── CountUp.tsx          # Scroll-triggered animated number counter (rAF + cubic easeOut)
│   ├── FadeIn.tsx           # Framer Motion fade-in wrapper with optional delay
│   ├── GridBackground.tsx   # Canvas animated drifting grid (value noise)
│   └── MobileNav.tsx        # Mobile hamburger menu with portal overlay
├── public/
│   ├── deepayan.jpg         # Hero photo
│   ├── og-image.jpg         # OpenGraph social preview image (1200×630)
│   ├── tianyuan-zhang.png   # Testimonial avatar
│   └── taqabul-nisha.png    # Testimonial avatar
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
# Install dependencies
npm install

# Run dev server
npm run dev
# → http://localhost:3000
```

```bash
# Production build
npm run build
npm start
```

---

## Page Sections

| Section | Anchor | Description |
|---|---|---|
| Hero | — | Name, availability badge, CTA buttons, photo |
| Experience | `#experience` | Accenture — 2 roles with animated metrics |
| Testimonials | — | Two professional references with avatars |
| Projects | `#projects` | 4 project cards — BNP, L'Oréal, Vision App, Tableau |
| Stack | `#stack` | 3-column skill list with lucide-react icons |
| Education | `#education` | KEDGE + UEM degrees, 4 certifications |
| Footer | — | Contact, location, availability, links |

---

## Key Components

### `GridBackground.tsx`
Canvas-based animated background. Uses value noise (smooth hash interpolation) to drift a grid of line segments. Runs on `requestAnimationFrame`, cleans up on unmount. Configured values:

```ts
const CFG = { intensity: 0.79, cell: 45, speed: 10, patch: 9, lineWeight: 0.7 };
```

### `CountUp.tsx`
Scroll-triggered number animation using `useInView` from Framer Motion + `requestAnimationFrame` with cubic `easeOut`. Parses values like `"97.8%"`, `"10M+"`, `"<200ms"`.

### `MobileNav.tsx`
Hamburger menu that renders via `createPortal` into `document.body`. Uses `AnimatePresence` for enter/exit. Locks body scroll when open.

### `FadeIn.tsx`
Thin Framer Motion wrapper that fades + slides content up on scroll, with configurable `delay`.

---

## SEO

`layout.tsx` includes full SEO metadata:
- OpenGraph + Twitter Card
- `robots: index, follow`
- Canonical URL (`https://deepayan.me`)
- JSON-LD `Person` schema with social profile links

Required file: `/public/og-image.jpg` (1200×630px) for social link previews.

---

## Dependencies

```json
{
  "next": "14.x",
  "react": "18.x",
  "framer-motion": "latest",
  "lucide-react": "latest",
  "tailwindcss": "3.x",
  "typescript": "5.x"
}
```

---

## Deployment

Deployed on Vercel. Push to `main` triggers automatic deployment.

Live: [deepayan.me](https://deepayan.me)

---

## License

© 2026 Deepayan Sarkar. All rights reserved.
