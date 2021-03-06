var CACHE_NAME = 'webpub-viewer';
var urlsToCache = [
  'index.html',
  'viewer.js',
  'polyfills/fetch.js',
  'polyfills/urlsearchparams.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  clients.claim();
});

/*
For a publication, it seems better to do network then cache than the opposite.
Could be problematic when the network is very slow, but has the benefit of being fresh.
*/

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );

});