# Omar Portfolio - Copilot Instructions

## Project Overview

A bilingual (German/English) portfolio website built with **Next.js 15 App Router**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Deployed on Vercel.

## Architecture & Key Patterns

### Component Structure
- **Dual component pattern**: Legacy components (`Hero.tsx`) alongside new versions (`HeroNew.tsx`). New components are the active ones used in `app/page.tsx`.
- **Dynamic imports**: Below-the-fold sections use `next/dynamic` for code splitting (see `app/page.tsx`)
- **Memoization**: Performance-critical visual components use `memo()` (e.g., `Abstract3DVisual` in `HeroNew.tsx`)

### Data Flow
- **Static data**: Content lives in `data/content.ts` (about, contact, skills) and `data/projects.ts` (portfolio projects)
- **Admin API routes**: CRUD operations at `/api/projects`, `/api/content`, `/api/cv` that read/write directly to TypeScript files using regex parsing + `eval()`
- **Admin dashboard**: Password-protected at `/admin` using `NEXT_PUBLIC_ADMIN_PASSWORD` env var

### Styling Conventions
```tsx
// Theme: Dark mode only, black background (#000000)
// Typography: Inter (sans) + Cormorant Garamond (display/headings)
// Use CSS variables: var(--font-inter), var(--font-cormorant)

// Color palette (from tailwind.config.ts):
// - background: "#000000"
// - foreground: "#ffffff" 
// - muted: "#666666"
// - accent: "#ffffff"

// Animation approach: CSS animations for performance, Framer Motion for interactions
// Custom animations: animate-float, animate-pulse-slow, animate-rotate-slow
```

### Bilingual Content Pattern
```tsx
// All user-facing text includes German and English variants:
interface Service {
  titleDe: string;  // German
  textDe: string;
  textEn: string;   // English
}
// German is primary display language, English in secondary position
```

## Key Files

| Purpose | File |
|---------|------|
| Main page composition | `app/page.tsx` |
| SEO/metadata | `app/layout.tsx` |
| Project data schema | `data/projects.ts` |
| Content/contact data | `data/content.ts` |
| Tailwind theme | `tailwind.config.ts` |
| Global CSS + animations | `app/globals.css` |
| Admin dashboard | `app/admin/page.tsx` |

## Development Commands

```bash
npm run dev    # Start dev server at localhost:3000
npm run build  # Production build
npm run lint   # ESLint check
```

## When Adding New Sections

1. Create component as `components/[Name]SectionNew.tsx` with `"use client"` directive
2. Include bilingual content (German primary, English secondary)
3. Use dynamic import in `app/page.tsx` with loading skeleton
4. Follow animation pattern: `initial={{ opacity: 0, y: 30 }}` → `whileInView={{ opacity: 1, y: 0 }}`
5. Add section ID for navbar anchor links (e.g., `id="services"`)

## Performance Patterns

- **LCP optimization**: Hero text renders immediately; animations are progressive enhancement via `useState(mounted)`
- **Images**: Use `next/image` with `loading="lazy"` and `sizes` prop
- **Fonts**: Preloaded via `next/font/google` with `display: "swap"`

## Project Data Structure

```typescript
// data/projects.ts
interface Project {
  title: string;
  slug: string;
  description: string;      // English
  descriptionDe: string;    // German
  resultEn: string;
  resultDe: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;           // Path in /public/projects/
  highlight: string;
  role?: string;
}
```

## Environment Variables

- `NEXT_PUBLIC_ADMIN_PASSWORD` - Admin dashboard access
