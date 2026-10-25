// Soteria Model service worker.
// Template: the build (src/pwa/integration.mjs) replaces the __PLACEHOLDERS__ below
// and writes the result to dist/sw.js. No third-party code, no analytics.

const VERSION = '__VERSION__';
const PRECACHE_URLS = __PRECACHE_URLS__;
const BASE = '__BASE__';
const LOCALES = ['es', 'so', 'ar'];

const PRECACHE = `precache-${VERSION}`;
const RUNTIME = 'runtime';
// Static files only, so a cached copy is valid whatever the request headers (some servers send Vary: Origin).
const MATCH = { ignoreVary: true };

// Essentials (rights pages, get support, home, offline page, site assets) are saved on install.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(PRECACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

// Drop caches from previous builds.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('precache-') && k !== PRECACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

function offlinePageFor(url) {
  const rest = url.pathname.slice(BASE.length);
  const lang = LOCALES.find((l) => rest === l || rest.startsWith(`${l}/`));
  return `${BASE}${lang ? `${lang}/` : ''}offline/`;
}

async function putRuntime(request, response) {
  if (response.ok && response.type === 'basic') {
    const cache = await caches.open(RUNTIME);
    await cache.put(request, response.clone());
  }
  return response;
}

// Pages: network first so people always get the latest guidance when online;
// fall back to the saved copy, then to the offline page.
// Saved under the path alone: the Get Support form submits its fields in the query
// string, and those must never be stored on the device.
async function handleNavigation(request) {
  const url = new URL(request.url);
  const key = `${url.origin}${url.pathname}`;
  try {
    return await putRuntime(key, await fetch(request));
  } catch {
    return (
      (await caches.match(key, MATCH)) ||
      (await caches.match(offlinePageFor(url), MATCH)) ||
      Response.error()
    );
  }
}

// Hashed build assets never change: cache first.
async function handleImmutable(request) {
  return (await caches.match(request, MATCH)) || putRuntime(request, await fetch(request));
}

// Everything else (search index, icons): serve the saved copy, refresh it in the background.
async function handleStaleWhileRevalidate(event) {
  const cached = await caches.match(event.request, MATCH);
  const network = fetch(event.request).then((res) => putRuntime(event.request, res));
  if (cached) {
    event.waitUntil(network.catch(() => {}));
    return cached;
  }
  return network;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(handleNavigation(request));
  } else if (url.pathname.startsWith(`${BASE}_astro/`)) {
    event.respondWith(handleImmutable(request));
  } else {
    event.respondWith(handleStaleWhileRevalidate(event));
  }
});
