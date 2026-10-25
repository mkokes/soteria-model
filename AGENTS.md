# AGENTS.md

The Soteria Model is a documentation site, not an application. It's a multilingual field guide for community mutual aid and protection networks, built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) and published to GitHub Pages at https://soteriamodel.com.

See [README.md](README.md) for the project's purpose and contribution rules.

## Structure

```
.github/workflows/deploy.yml   # Builds on PRs; builds + deploys to GitHub Pages on main
docs/                          # The Astro project (all npm commands run here)
├── astro.config.mjs           # Site config: locales, sidebar, legacy redirects, plugins
├── src/content/docs/          # Every page (Markdown)
│   ├── index.md               # English home (splash template)
│   ├── model/ rights/ resources/ get-support/ business-support/ start-a-cell/ security/
│   └── es/ so/ ar/            # Translations; same relative paths as English
├── src/styles/custom.css      # Theme + component classes used by raw HTML in pages
├── src/components/Footer.astro# Starlight Footer override (site tagline/license line)
├── src/pwa/                   # Offline support: service worker template + build integration
├── public/                    # Copied as-is: logo.svg, CNAME, manifest.webmanifest, icons/
└── .husky/pre-push            # Runs the build before every push
TRANSLATION_*.md               # Translation status and planning
```

## Commands

Run all commands from `docs/`. Node 22 is used in CI.

```bash
cd docs
npm install        # also installs the husky pre-push hook
npm run dev        # dev server at http://localhost:4321
npm run build      # static build to docs/dist/, plus link validation
npm run preview    # serve the built site
```

There are no tests or linters. `npm run build` is the check: the `starlight-links-validator` plugin fails the build on any broken internal link or `#anchor`.

## Content conventions

- **Every page needs `title` frontmatter.** Starlight renders it as the H1, so don't also put a `# Heading` in the body. The sidebar label comes from this title unless `astro.config.mjs` overrides it.
- **Internal links are absolute with a trailing slash:** `/model/cells/`, `/es/rights/at-home/`. Don't use relative links (`../security/x`). Pages are served as `page/index.html`, so relative links resolve one level deeper than you'd expect.
- **Anchors in translated pages use the translated heading's slug.** For example, `/so/resources/printable/#liiska-hubinta-hubinta-amniga`.
- **Asides:** `:::tip[Title]`, `:::caution`, `:::danger`, `:::note`. Close them with `:::`.
- **Raw HTML is allowed in `.md`** and is used heavily (segment cards, resource cards, forms, home page sections). Its classes are defined in `src/styles/custom.css`. Theme colors are `--sot-*` variables, defined for both dark (default) and `[data-theme='light']` modes. Use those variables, not hard-coded hex values.
- **Home pages** (`index.md`, `es/index.md`, …) use `template: splash` with `hero:` frontmatter.
- **Offline pages** (`offline.md` in each language) are the service worker's fallback. They have `pagefind: false` and are kept out of the sidebar.

## Adding or changing pages

1. Add the English page under `src/content/docs/<section>/`.
2. Add its slug to the matching group in the `sidebar` array in `astro.config.mjs`. Slugs are locale-independent, so one entry covers all languages.
3. Add translations at the same path under `es/`, `so/`, `ar/`. A missing translation falls back to the English page with a notice, so the build still passes.

To add a language, add it to `locales`, to the `title` map, and to each sidebar group's `translations` in `astro.config.mjs`. Set `dir: 'rtl'` for right-to-left scripts.

## Gotchas

- **Legacy URLs must keep working.** The old VitePress site used `/locales/<lang>/…` and `*.html` URLs, and links may have been printed or shared. `astro.config.mjs` generates redirects for every page automatically: Astro `redirects` for the locale paths and a build hook that writes `*.html` stubs. Don't remove this.
- **The site is served at the domain root** (`base: '/'`). `BASE_PATH` and `SITE_URL` env vars override this for a subpath deploy, but Markdown links don't get the base prefixed automatically.
- **`public/CNAME`** holds the custom domain (`soteriamodel.com`). Keep it.
- **The Get Support page form is a placeholder.** It has no `action`, so submitting it reloads the page with the fields in the query string. Don't wire it to any service without discussing privacy first.
- **The site is an installable PWA that works offline.** `src/pwa/integration.mjs` generates `dist/sw.js` at build time from the `src/pwa/sw.js` template. It's hand-written with no Workbox or CDN dependency, on purpose: the site promises no third-party requests.
  - On install, it saves the essentials in all languages: `/_astro/` assets, icons, home pages, everything under `rights/`, `get-support/`, and the offline pages. Change `isEssentialPage` to change that set, and keep it small, because every first-time visitor downloads it (about 440 KB gzipped today).
  - Other pages are network-first and saved once visited. Pages are cached by path only, so form fields in a query string are never stored on the device. Keep it that way.
  - The worker's version is a hash of the whole build, so any content change ships a new worker, which replaces the old cache on activation. The worker isn't registered under `npm run dev`. Use `npm run build && npm run preview` to test offline behavior.
- **Content is safety-sensitive.** Never add real names, locations, contacts, or operational details of any actual network. The README lists what not to contribute.
