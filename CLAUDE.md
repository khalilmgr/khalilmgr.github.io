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

## Architecture

Single-page, single-scroll portfolio (`app/page.tsx`) composing `Hero → About → Projects → Skills → Contact`, wrapped by `Navbar` and `Footer` in `app/layout.tsx`. All components live in `app/components/`. Bilingual FR/EN via `app/context/LanguageContext.tsx` (`useLang()` returns `{ lang, toggle }`); every component branches its copy on `lang`.

Navigation is anchor-based (`#hero`, `#about`, `#projects`, `#skills`, `#contact`) — `Navbar.tsx` uses an `IntersectionObserver` to highlight the active section, no client-side routing. Old multi-page routes (`/presentation`, `/formations`, `/competences`, `/projets/*`, `/contact`) are kept as thin `redirect()` pages to the matching anchor, for previously-indexed URLs.

`About.tsx` merges what used to be three separate pages (Presentation, Formations, sports career, interests) into one section with an internal tab switcher (`Formations` / `Parcours sportif` / `Centres d'intérêt`); the sports-career tab embeds a photo lightbox, the interests tab embeds `TravelMap.tsx`.

**Design system — "liquid glass" monochrome** (tokens in `globals.css`, applied via Tailwind arbitrary values, not CSS var utilities):
- Background: `#07070a` (primary), `#101014` (elevated / solid fallback, e.g. mobile menu)
- Text: `#f5f5f7` (primary), `white/50`–`white/70` (muted, via opacity modifiers)
- No accent color — strictly black/white/gray, no vivid hues anywhere (including third-party skill icons, which get a `grayscale` filter)
- Glass surfaces: `bg-white/[0.04-0.06] backdrop-blur-xl backdrop-saturate-150 border border-white/10`, brightening to `bg-white/[0.1] border-white/20` on hover
- Primary CTA: solid `bg-white text-black`; secondary CTA: the glass surface above
- Typography: system font stack (`-apple-system, BlinkMacSystemFont, …`) so it renders as SF Pro on Apple devices, no webfont dependency

All components use `"use client"` and inline Tailwind. Framer Motion: `initial`/`whileInView` + `viewport={{ once: true }}` for scroll reveals, `layoutId` shared-element pills for the navbar and tab switchers (Projects: Academic/Personal, About: the three sub-tabs).

**Projects data** is defined as static arrays directly in `Projects.tsx` (`academic` and `personal`, keyed by `lang`). Each academic project has `title`, `description`, `github`, and an optional `highlight` boolean for the "Featured" badge; personal projects render as a single CTA card (no per-project repos exist yet for that category).
