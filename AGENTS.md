# AGENTS.md

## Cursor Cloud specific instructions

This repository is a single self-contained **Next.js 16 / React 19** marketing website ("Celebration Cleaning") managed with **npm**. There is no backend, database, or external service — everything runs in the one Next.js process. Data for the programmatic SEO pages lives statically in `src/data/seo-data.ts`.

### Services

| Service | Command | Port | Notes |
|---|---|---|---|
| Next.js web app | `npm run dev` | 3000 | The only service. Dev server uses Turbopack. |

Standard commands are defined in `package.json` scripts: `dev`, `build`, `start`, `lint`.

### Non-obvious notes

- `npm run lint` currently reports pre-existing errors (mostly `react/no-unescaped-entities` and a few unused-var warnings) in the committed source. These are not environment problems — do not treat a non-zero lint exit as a setup failure, and do not "fix" them unless the task asks.
- `npm run build` generates ~149 static pages (14 cities × 9 services plus marketing pages) via `generateStaticParams`; a successful build takes several seconds.
- The contact form (`src/components/sections/ContactForm.tsx`) is mocked client-side (simulated with a `setTimeout`) and shows a success message; there is no API route or persistence behind it.
- No environment variables or `.env` files are required.
