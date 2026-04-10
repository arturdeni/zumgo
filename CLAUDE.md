# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install      # install dependencies
pnpm dev          # dev server at http://localhost:4321
pnpm build        # production build
pnpm preview      # preview production build
```

Use **pnpm**, not npm (the repo has `pnpm-lock.yaml`; `package-lock.json` is legacy). There are no tests or linter scripts configured — only Prettier with `prettier-plugin-astro`.

## Architecture

Single-page Astro 5 marketing site for Zumgo. **JavaScript only — no TypeScript** (the `tsconfig.json` exists only for editor support).

### Page composition
`src/pages/index.astro` is the only route. It imports each landing section as a top-level component in a fixed order: `Header → Hero → FloatingElements → QueEs → Maquina → Estadisticas → CTA → DondeEncaja → FAQs → Ubicaciones → Contact → Footer`. Adding a new section means creating a component folder and inserting it into this list.

### Component convention
Every component lives in its own PascalCase folder under `src/components/` with a paired `.astro` + `.css` file (e.g. `Hero/Hero.astro` + `Hero/Hero.css`). Keep this pattern for new components. Component CSS is imported from the `.astro` file — it is not global.

### Layout and global styles
`src/layouts/Layout.astro` wraps every page and also renders the `CookieModal` and `LegalModals` globally (legal company data is passed as props here — update it in one place). Global CSS lives in `src/styles/global.css` and `src/styles/variables.css`; custom `@font-face` and base typography are defined globally. The site is capped at **1400px max width**; content containers at 1200px.

### Design system (from TECH_DOCS.md)
- Brand colors as CSS vars: `--color-yellow #eaa021`, `--color-mint #249e75`, `--color-orange #d85a30`, `--color-forest #09432e`, `--color-cream #fce2b7`, plus `--color-gray-[100-900]`.
- Custom fonts served from `public/fonts/`: Coolvetica-Rg (H1/H2), HelveticaNeue-bold-condensed (H3), HelveticaNeue-regular (H4/body), EmiliaNote (H5). Do not add icon libraries — iconography is custom.
- Breakpoints: mobile 0, tablet 768, desktop 1024, large 1200.
- Animations: **GSAP** is the animation library of choice; prefer CSS animations for simple cases. Avoid unnecessary client-side JS.

### Deployment
Hosted on **Vercel**. `master` = production, `develop` = preproduction. Auto-deploys on push.

## Notes
- Copy and business-domain naming are in **Spanish** (`QueEs`, `Maquina`, `DondeEncaja`, `Ubicaciones`) — keep that convention.
- There is no CMS, no dynamic routes, no external data source. The only planned dynamic piece is the contact form (not yet wired up).
