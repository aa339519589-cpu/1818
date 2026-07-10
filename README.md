# LIFE//OS

LIFE//OS is a local-first personal reality operating system for understanding where money, time, household resources, and upcoming responsibilities are flowing.

## Recovery status

This repository contains the complete recovered application as a SHA-256-verified archive split across `.recovery/part-*`. A clean `dev` or `build` command automatically verifies and restores the full source tree before Vite runs.

Verified recovery archive SHA-256:

`419f5a97add6bed20d724eba25ed34ec1c8be87ad95c250d6fed2a9f00dbf106`

## Run locally

```bash
npm install
npm run dev
```

The app seeds a complete demo dataset on first launch and persists changes in browser `localStorage` under `life-os-state-v1`.

## Build

```bash
npm install
npm run build
npm run preview
```

The recovered source has been validated with a clean restore and production build.

## Deploy

Two static deployment paths are included:

- GitHub Pages via `.github/workflows/deploy-pages.yml`
- Render via `render.yaml`

Render settings:

- Build command: `npm install && npm run build`
- Publish directory: `dist`
- SPA fallback: every route rewrites to `index.html`

## Product surface

- Cashflow radar with an explainable 0–100 pressure index
- Time loss analyzer with 24-hour heatmap and personal baseline windows
- Household inventory with expiry, consumption-rate, waste-risk, and purchase recommendations
- 30-day pressure timeline with funding gap and event stress
- Decision engine limited to five data-driven actions
- Reality simulator for spending, rent, screen time, exercise, debt, and subscriptions
- Create, edit, and delete records with local persistence and undo
- CSV transaction import with field mapping and preview
- JSON export, global search, and `Cmd/Ctrl + K` command palette
