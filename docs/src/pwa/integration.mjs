// Builds dist/sw.js from src/pwa/sw.js after Astro finishes, filling in the list of
// pages and assets to save on install and a version hash of the whole build.
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const LOCALE_PREFIXES = ['', 'es/', 'so/', 'ar/'];

// Pages someone may need with no signal, in every language.
const isEssentialPage = (page) =>
  LOCALE_PREFIXES.some(
    (p) => page === p || page === `${p}offline/` || page === `${p}get-support/` || page.startsWith(`${p}rights/`),
  );

const isEssentialAsset = (file) =>
  file.startsWith('_astro/') || file.startsWith('icons/') || file === 'logo.svg' || file === 'manifest.webmanifest';

export default function pwa() {
  let base = '/';
  return {
    name: 'soteria-pwa',
    hooks: {
      'astro:config:setup': ({ config, command, injectScript }) => {
        base = config.base.endsWith('/') ? config.base : `${config.base}/`;
        if (command !== 'build') return;
        injectScript(
          'head-inline',
          `if ('serviceWorker' in navigator) addEventListener('load', () => navigator.serviceWorker.register(${JSON.stringify(`${base}sw.js`)}));`,
        );
      },
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const files = fs
          .readdirSync(root, { recursive: true })
          .map((f) => String(f).split(path.sep).join('/'))
          .filter((f) => f !== 'sw.js' && fs.statSync(path.join(root, f)).isFile())
          .sort();

        const hash = crypto.createHash('sha256');
        for (const f of files) hash.update(f).update(fs.readFileSync(path.join(root, f)));
        const version = hash.digest('hex').slice(0, 12);

        const urls = [
          ...files.filter(isEssentialAsset),
          ...files
            .filter((f) => f === 'index.html' || f.endsWith('/index.html'))
            .map((f) => f.slice(0, -'index.html'.length))
            .filter(isEssentialPage),
        ].map((f) => `${base}${f}`);

        const template = fs.readFileSync(new URL('./sw.js', import.meta.url), 'utf8');
        const sw = template
          .replace("'__VERSION__'", JSON.stringify(version))
          .replace('__PRECACHE_URLS__', JSON.stringify(urls, null, 2))
          .replace("'__BASE__'", JSON.stringify(base));
        fs.writeFileSync(path.join(root, 'sw.js'), sw);
        logger.info(`sw.js ${version}: ${urls.length} URLs saved for offline use`);
      },
    },
  };
}
