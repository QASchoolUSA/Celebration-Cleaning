# AGENTS.md

## Cursor Cloud specific instructions

This repository is a single self-contained **Next.js 16 / React 19** marketing website ("Celebration Cleaning") managed with **npm**. There is no database — SEO data lives statically in `src/data/seo-data.ts`. Contact form submissions are forwarded to **Booking Broom** via `POST /api/bookings`.

### Services

| Service | Command | Port | Notes |
|---|---|---|---|
| Next.js web app | `npm run dev` | 3000 | The only service. Dev server uses Turbopack. |

Standard commands are defined in `package.json` scripts: `dev`, `build`, `start`, `lint`.

### Environment variables

Copy `.env.example` to `.env.local` and set:

| Variable | Purpose |
|---|---|
| `BOOKING_BROOM_URL` | Booking Broom base URL (e.g. `https://bookings.kedrik.com`) |
| `BOOKING_BROOM_API_KEY` | Per-site API key for slug `celebration` |
| `BOOKING_BROOM_SITE_SLUG` | Optional; defaults to `celebration` |

Without these, the contact form API returns 503.

### Non-obvious notes

- `npm run lint` currently reports pre-existing errors (mostly `react/no-unescaped-entities` and a few unused-var warnings) in the committed source. These are not environment problems — do not treat a non-zero lint exit as a setup failure, and do not "fix" them unless the task asks.
- `npm run build` generates ~149 static pages (14 cities × 9 services plus marketing pages) via `generateStaticParams`; a successful build takes several seconds.
- The contact form (`src/components/sections/ContactForm.tsx`) posts to `/api/bookings`, which forwards to Booking Broom.
