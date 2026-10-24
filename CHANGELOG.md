# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `LICENSE` file with the full CC BY-SA 4.0 legal code, matching the license stated in the README.
- Build-time link checking (`starlight-links-validator`). `npm run build` now fails on broken internal links or heading anchors.
- Redirects from old VitePress URLs: `/locales/<lang>/…` goes to `/<lang>/…`, and `/page.html` goes to `/page/`.
- Full-text search in all four languages (Pagefind, built into Starlight).
- Donate button and GoFundMe campaign links on the home page and README.
- Tier 1 translations for Spanish, Somali, and Arabic, and a 12-language translation roadmap.
- Decentralization page, Resources hub, visual segment cards, and printable rights cards with translated backs.
- Detailed operational guidance, including license plate database guidance for Sentinels.

### Changed

- Migrated the site from VitePress to Astro + Starlight. The project still lives in `docs/`, and content moved from `docs/content/` to `docs/src/content/docs/`.
- Translated pages are now served from `/es/`, `/so/`, and `/ar/` instead of `/locales/<lang>/`. Pages without a translation fall back to English.
- All internal links are now absolute paths with a trailing slash.
- The sidebar is configured once, with translated group labels, replacing the per-locale VitePress sidebars. Page labels come from each page's title.
- The GitHub Pages workflow builds the Astro site at the domain root (soteriamodel.com) on Node 22. It also builds pull requests, without deploying, so broken links fail before merge.
- The pre-push hook now runs the site build (which includes link validation) instead of ESLint.
- Ported the custom green theme to Starlight's light and dark modes. Headings now have readable contrast in dark mode.

### Fixed

- Three broken links in the Spanish, Somali, and Arabic resources hubs: a link to a Spanish print-cards page that doesn't exist, and two anchors to the security audit checklist.
- Dead links in the Spanish resources pages.

### Removed

- Coolify and Docker hosting: `Dockerfile`, `docker-compose.yml`, `nginx.conf`, `.dockerignore`, `.coolify`, and their guides (`COOLIFY_DEPLOYMENT.md`, `COOLIFY_QUICKSTART.md`, `DEPLOYMENT_SUMMARY.md`, `STYLING_FIX.md`).
- The Coolify dual-deploy workflow example (`.github/workflows/deploy-dual.yml.example`).
- VitePress, Vue, and the Vue-focused ESLint setup.
- The placeholder form on the business support page.
