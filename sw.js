const CACHE_NAME = 'hp-scound-v1';

// Script ini memastikan aplikasi selalu mengambil data terbaru dari internet
// Sangat penting untuk aplikasi yang terhubung ke Google Sheets
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});

self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed');
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activated');
});