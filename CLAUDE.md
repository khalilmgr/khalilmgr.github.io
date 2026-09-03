# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — configured via `@import "tailwindcss"` in `globals.css`, no `tailwind.config` file
- **Framer Motion** — used for all animations across every component
- **pdfjs-dist** — renders PDF pages to canvas for the in-page report viewer (`PdfViewer.tsx`); its worker script is checked into `public/pdf.worker.min.mjs`

## Architecture

Single-page, single-scroll portfolio (`app/page.tsx`) composing `Hero → About → Projects → Skills → Contact`, wrapped by `Navbar` and `Footer` in `app/layout.tsx`. All components live in `app/components/`. Bilingual FR/EN via `app/context/LanguageContext.tsx` (`useLang()` returns `{ lang, toggle }`); every component branches its copy on `lang`.

Navigation is anchor-based with French ids (`#accueil`, `#a-propos`, `#projets`, `#competences`, `#contact`) — `Navbar.tsx` uses an `IntersectionObserver` to highlight the active section. Links intercept the click and call `scrollToSection()` (`app/lib/scroll.ts`) instead of letting the browser navigate, so the URL bar never shows a `#…` fragment. Old multi-page routes (`/presentation`, `/formations`, `/competences`, `/projets/*`, `/contact`) are kept as thin `redirect()` pages to the matching anchor, for previously-indexed URLs.

`About.tsx` merges what used to be three separate pages (Presentation, Formations, sports career, interests) into one section with an internal tab switcher (`Formations` / `Parcours sportif` / `Centres d'intérêt`); the sports-career tab embeds a photo lightbox, the interests tab shows a stat-led "Voyages" tile (country flag pills) alongside two indexed cards.

**Design system — "liquid glass" on a warm light palette** (tokens in `globals.css`, applied via Tailwind arbitrary values, not CSS var utilities). This palette matches KORA, a client project built during the user's internship:
- `volet` `#1e5f8c` — primary accent: buttons, links, active nav/tab pills
- `indigo` `#1c2f4a` — primary text color; darker end of the navbar/button gradient and hover states
- `atlantique` `#3f8fa8` — secondary accent, used for hover borders on glass surfaces
- `sable` `#d9c7a3` — neutral border color on glass surfaces (`border-[#d9c7a3]/40`, stronger on hover via atlantique)
- `medina` `#f7f5f0` — main page background
- `light` `#ede5d5` — secondary/elevated background (mobile menu panel)
- `gris` `#a8b0b5` — secondary/muted text
- `terracotta` `#b5562e` — reserved for a future danger/error state; not currently used anywhere
- Glass surfaces: `bg-white/50 backdrop-blur-xl backdrop-saturate-150 border border-[#d9c7a3]/40`, brightening to `bg-white/70 border-[#3f8fa8]/45` on hover
- Primary CTA: solid `bg-[#1e5f8c] text-white hover:bg-[#1c2f4a]`; secondary CTA: the glass surface above
- Navbar pill on scroll: `bg-gradient-to-r from-[#1e5f8c]/90 to-[#1c2f4a]/90` (translucent, blurred) with white text; unscrolled it's transparent with indigo text over the light page background
- Skill icons in "Ma Stack" render in their real brand colors (no grayscale/invert filter) — Simple Icons brand marks ship as flat black shapes, so devicon (colored) and Simple Icons (black) coexist as-is against the light cards
- Typography: **Inter** (Google Fonts, `next/font/google`) for body/headings; Geist Mono kept for small mono labels (eyebrows, dates, tags)

All components use `"use client"` and inline Tailwind. Framer Motion: `initial`/`whileInView` + `viewport={{ once: true }}` for scroll reveals, `layoutId` shared-element pills for the navbar and tab switchers (Projects: Academic/Personal, About: the three sub-tabs).

**Projects data** is defined as static arrays directly in `Projects.tsx`. Academic projects are grouped by year (`academicYears`, keyed by `lang`); a project can be `highlight: true` (renders full-width above the grid, e.g. KORA) and/or `private: true` with no `github` url (renders a non-clickable "Plateforme privée" badge instead of a repo link, since KORA's code isn't public). Personal projects are three PDF reports (`pdfReports`) opened in the in-page `PdfViewer` modal rather than linked out.
