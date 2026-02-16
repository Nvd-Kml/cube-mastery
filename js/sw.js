const CACHE_NAME = 'cubemastery-cache-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './css/style.css',
    './js/app.js',
    './js/data.js'
];

// Install Event: Cache App Shell
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Fetch Event: Serve from cache first, fallback to network
self.addEventListener('fetch', event => {
    // For VisualCube API requests, go to network first, then cache
    if (event.request.url.includes('visualcube.api.cubing.net')) {
        event.respondWith(
            caches.open('cubemastery-images').then(cache => {
                return fetch(event.request).then(response => {
                    cache.put(event.request, response.clone());
                    return response;
                }).catch(() => {
                    return cache.match(event.request);
                });
            })
        );
        return;
    }

    // For App Assets, Cache First
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );
});