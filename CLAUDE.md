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

Single-page portfolio (`app/page.tsx`) that composes six sections in order: `Navbar → Hero → Skills → Projects → Contact → Footer`. All components live in `app/components/`.

**Design system** (defined as CSS variables in `globals.css`):
- Background: `#0f0f0f` (primary), `#141414` (secondary), `#1a1a1a` (cards)
- Accent: `#f5a623` (orange), dimmed `#c47d0e`
- Text: `#f0f0f0` (primary), `#9a9a9a` (muted)
- Border: `#2a2a2a`

All components use `"use client"` and inline Tailwind + hardcoded hex values matching the design system. Framer Motion animations follow a consistent `fadeUp(delay)` helper pattern (opacity 0→1, y 30→0) with `useInView` for scroll-triggered reveals.

**Projects data** is defined as static arrays directly in `Projects.tsx` (`academic` and `personal`). Each project has `title`, `description`, `tags[]`, optional `github`/`demo` URLs, and an optional `highlight` boolean for "Featured" badge treatment.

Section anchors: `#hero`, `#skills`, `#projects`, `#contact`.
