// Service worker minimal: hanya agar aplikasi bisa DIINSTAL. Sengaja tidak menyimpan data/halaman
// untuk mode offline: transaksi divalidasi server, jadi harus online.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
