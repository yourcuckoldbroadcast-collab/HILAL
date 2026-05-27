/* HILAL service worker
   - Halaman (navigasi/HTML): network-first  -> selalu versi terbaru saat online,
     jatuh ke cache saat offline.
   - Aset statis (ikon/manifest): cache-first -> cepat & hemat.
   - Instalasi tahan-banting: satu aset hilang TIDAK membatalkan SW
     (pakai allSettled, bukan addAll yang semua-atau-gagal).
   Bump CACHE setiap rilis untuk membersihkan cache lama. */
const CACHE = 'hilal-v13';
const CORE  = ['./', './index.html'];
const EXTRA = [
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './favicon-64.png',
  './emblem-truth.png',
  './emblem-puasa.png',
  './emblem-shalat.png',
  './emblem-qiyamul.png',
  './emblem-dzikir.png',
  './emblem-tilawah.png',
  './emblem-infaq.png',
  './emblem-majelis.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await Promise.allSettled(CORE.map((u) => c.add(u)));
    await Promise.allSettled(EXTRA.map((u) => c.add(u)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const isHTML = req.mode === 'navigate' ||
    (req.headers.get('accept') || '').includes('text/html');

  if (isHTML) {
    e.respondWith(
      fetch(req.url, { cache: 'no-store' })
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('./index.html', copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req).then((hit) => hit || caches.match('./index.html')))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        if (res && res.status === 200 && new URL(req.url).origin === location.origin) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      });
    })
  );
});
