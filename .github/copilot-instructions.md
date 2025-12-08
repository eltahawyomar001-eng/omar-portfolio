# Omar Portfolio - Copilot Instructions

## Overview
Bilingual (German/English) portfolio website: **Next.js 15 App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**. Dark theme only.

## Architecture

### Component Pattern
- **Active components end with `New`**: `HeroNew.tsx`, `ProjectsSectionNew.tsx` (legacy files without suffix exist but are unused)
- **Above-the-fold**: Direct imports (`NavbarNew`, `HeroNew`)
- **Below-the-fold**: Dynamic imports with black loading placeholders:
```tsx
const ProjectsSectionNew = dynamic(() => import("@/components/ProjectsSectionNew"), {
  loading: () => <div className="min-h-screen bg-black" />,
});
```

### Data Architecture
- **Static TypeScript files** in `data/` (no database)
- `data/projects.ts` - Project array with `Project` interface
- `data/content.ts` - About, contact, skills data
- **Admin API** (`/api/projects`, `/api/content`) reads/writes to `.ts` files via regex + `eval()`

## Bilingual Pattern (CRITICAL)
German is PRIMARY, English is secondary. Always include both:
```tsx
// Component data structure:
{ titleDe: "...", textDe: "...", textEn: "..." }

// Rendering pattern:
<p className="text-white/60">{textDe}</p>      {/* German - prominent */}
<p className="text-white/40 text-xs">{textEn}</p> {/* English - smaller, dimmer */}
```

## Styling Rules
| Element | Style |
|---------|-------|
| Background | `#000000` (always black) |
| Primary text | `text-white` or `text-white/60` |
| Secondary text | `text-white/40` |
| Headings | `font-display` (Cormorant Garamond serif) |
| Body | `font-sans` (Inter) |
| Borders | `border-white/10` hover: `border-white/20` |
| Cards | `bg-white/[0.02]` |

### Animation Conventions
- **CSS for performance**: `animate-float`, `animate-pulse-slow` (defined in `globals.css`, `tailwind.config.ts`)
- **Framer Motion for scroll reveals**:
```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1 }}  // stagger for lists
```
- **Heavy visuals**: Wrap in `memo()` (see `Abstract3DVisual` in `HeroNew.tsx`)

## Adding New Sections
1. Create `components/[Name]SectionNew.tsx` with `"use client"`
2. Add section ID for navbar: `<section id="section-name">`
3. Import dynamically in `app/page.tsx` (see existing pattern)
4. Include bilingual content (De primary, En secondary)
5. Follow animation pattern above

## Project Data Schema
```typescript
// data/projects.ts
interface Project {
  title: string;
  slug: string;           // URL-safe, unique identifier
  descriptionDe: string;  // German description
  description: string;    // English description  
  resultDe: string;       // German results/outcome
  resultEn: string;       // English results/outcome
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;         // Path: "/projects/[slug].png"
  highlight: string;      // Brief stack summary
  role?: string;
}
```

## Commands
```bash
npm run dev    # localhost:3000
npm run build  # Production build (run before deploying)
npm run lint   # ESLint
```

## Environment
- `NEXT_PUBLIC_ADMIN_PASSWORD` - Admin dashboard (`/admin`) access
