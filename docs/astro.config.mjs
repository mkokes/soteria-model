// @ts-check
import fs from 'node:fs';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import pwa from './src/pwa/integration.mjs';

// Served at the domain root (soteriamodel.com). Override for a project-path deploy.
const base = process.env.BASE_PATH || '/';

// Sidebar group labels, translated per locale. Page labels come from each page's title.
const group = (label, translations, items) => ({ label, translations, collapsed: true, items });
const overview = (slug) => ({
  slug,
  label: 'Overview',
  translations: { es: 'Resumen', so: 'Guud mar', ar: 'نظرة عامة' },
});

// The VitePress site served translations under /locales/<lang>/ and pages as *.html.
// Keep those old URLs working by redirecting them to their new homes.
const LOCALES = ['es', 'so', 'ar'];
const docsDir = new URL('./src/content/docs/', import.meta.url);
const pages = fs
  .readdirSync(docsDir, { recursive: true })
  .map((f) => String(f).replace(/\\/g, '/'))
  .filter((f) => f.endsWith('.md'))
  .map((f) => f.replace(/(index)?\.md$/, ''));
const isLocalized = (page) => LOCALES.includes(page.split('/')[0]);
const legacyPath = (page) => (isLocalized(page) ? `locales/${page}` : page);

// /locales/es/model/ -> /es/model/
const localeRedirects = Object.fromEntries(
  pages.filter(isLocalized).map((page) => [`/locales/${page}`, `/${page}`]),
);

// /model/cells.html -> /model/cells/. Astro's redirects would emit cells.html/index.html,
// so write these as plain files after the build instead.
const htmlRedirects = {
  name: 'legacy-html-redirects',
  hooks: {
    'astro:build:done': ({ dir }) => {
      for (const page of pages.filter((p) => p && !p.endsWith('/'))) {
        const target = `${base.replace(/\/$/, '')}/${page}/`;
        const file = new URL(`${legacyPath(page)}.html`, dir);
        fs.mkdirSync(new URL('.', file), { recursive: true });
        fs.writeFileSync(
          file,
          `<!doctype html><title>Redirecting to: ${target}</title><meta http-equiv="refresh" content="0;url=${target}"><meta name="robots" content="noindex"><link rel="canonical" href="${target}"><a href="${target}">${target}</a>`,
        );
      }
    },
  },
};

export default defineConfig({
  site: process.env.SITE_URL || 'https://soteriamodel.com',
  base,
  redirects: localeRedirects,
  integrations: [
    htmlRedirects,
    starlight({
      title: {
        en: 'Soteria Model',
        es: 'Modelo Soteria',
        so: 'Qaabka Soteria',
        ar: 'نموذج سوتيريا',
      },
      description: 'A community safety and mutual aid blueprint for protecting vulnerable populations',
      logo: { src: './src/assets/logo.svg' },
      favicon: '/logo.svg',
      head: [
        { tag: 'meta', attrs: { name: 'robots', content: 'index, follow' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#4a7c59' } },
        { tag: 'link', attrs: { rel: 'manifest', href: `${base}manifest.webmanifest` } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: `${base}icons/apple-touch-icon.png` } },
      ],
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        es: { label: 'Español', lang: 'es' },
        so: { label: 'Soomaali', lang: 'so' },
        ar: { label: 'العربية', lang: 'ar', dir: 'rtl' },
      },
      social: [{ icon: 'github', label: 'Source', href: 'https://github.com/mkokes/soteria-model' }],
      customCss: ['./src/styles/custom.css'],
      components: {
        Footer: './src/components/Footer.astro',
      },
      plugins: [starlightLinksValidator()],
      sidebar: [
        group('The Soteria Model', { es: 'El Modelo Soteria', so: 'Qaabka Soteria', ar: 'نموذج سوتيريا' }, [
          overview('model'),
          'model/decentralization',
          'model/principles',
          'model/cells',
          'model/segments',
          'model/stewards',
          'model/trust',
          'model/scaling',
        ]),
        group('Know Your Rights', { es: 'Conoce Tus Derechos', so: 'Ogow Xuquuqdaada', ar: 'اعرف حقوقك' }, [
          overview('rights'),
          'rights/at-home',
          'rights/in-public',
          'rights/at-work',
          'rights/traffic-stop',
          'rights/if-detained',
          'rights/print-cards',
        ]),
        group('Resources Hub', { es: 'Centro de Recursos', so: 'Xarunta Kheyraadka', ar: 'مركز الموارد' }, [
          overview('resources'),
          'resources/technical',
          'resources/printable',
        ]),
        'get-support',
        'business-support',
        group('Start a Cell', { es: 'Iniciar una Célula', so: 'Bilaw Unug', ar: 'ابدأ خلية' }, [
          overview('start-a-cell'),
          'start-a-cell/founding-team',
          'start-a-cell/signal-setup',
          'start-a-cell/onboarding',
          'start-a-cell/tools-and-resources',
          'start-a-cell/templates',
        ]),
        group('Security Handbook', { es: 'Manual de Seguridad', so: 'Buugga Amniga', ar: 'دليل الأمان' }, [
          overview('security'),
          'security/devices',
          'security/communication',
          'security/physical',
          'security/compromise',
        ]),
      ],
    }),
    // Last, so the service worker's version hash covers everything other integrations write.
    pwa(),
  ],
});
