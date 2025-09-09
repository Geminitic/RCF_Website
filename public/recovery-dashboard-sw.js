// Syria Recovery Dashboard Service Worker
const CACHE_NAME = 'recovery-dashboard-cache-v1';
const OFFLINE_PAGE = '/recovery-dashboard-offline.html';
const API_CACHE_NAME = 'recovery-dashboard-api-cache-v1';

// Resources to pre-cache
const PRECACHE_URLS = [
  OFFLINE_PAGE,
  '/assets/recovery-dashboard/styles.css',
  '/assets/recovery-dashboard/dashboard-utils.js',
  '/assets/leaflet/leaflet.css',
  '/assets/leaflet/leaflet.js',
  '/assets/recovery-dashboard/markers.png',
  '/assets/recovery-dashboard/rhizome-logo.png',
  '/favicon.ico',
];

// API endpoints to cache
const API_URLS = [
  '/api/dashboard',
  '/api/refugees',
  '/api/idps',
  '/api/aid',
  '/api/returnees',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching recovery dashboard static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              console.log('Deleting old recovery dashboard cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Helper function to determine if request is for an API
const isApiRequest = (request) => {
  return request.url.includes('/api/') || request.url.includes('/data/');
};

// Helper function to determine if request is for an image
const isImageRequest = (request) => {
  const url = new URL(request.url);
  return url.pathname.match(/\.(jpe?g|png|gif|svg|webp)$/i);
};

// Helper function to determine if request is for a static asset
const isStaticAsset = (request) => {
  const url = new URL(request.url);
  return STATIC_ASSETS.includes(url.pathname);
};

// Fetch event - handle network requests
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Handle API requests (network first, fallback to cached)
  if (isApiRequest(event.request)) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Clone the response for caching
          const responseToCache = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }

            // If we have no cached API response, return an empty JSON with offline flag
            return new Response(
              JSON.stringify({
                offline: true,
                message:
                  'Data not available offline. Please check your connection.',
              }),
              {
                headers: { 'Content-Type': 'application/json' },
              }
            );
          });
        })
    );
    return;
  }

  // Handle image requests (cache first, fallback to network)
  if (isImageRequest(event.request)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)
          .then((response) => {
            // Cache the fetched image
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });

            return response;
          })
          .catch(() => {
            // Return a placeholder image if offline and no cached image
            return new Response(
              `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
                  <rect width="200" height="200" fill="#f0f0f0"/>
                  <text x="50%" y="50%" text-anchor="middle" fill="#999" font-size="20">Offline</text>
                </svg>`,
              {
                headers: { 'Content-Type': 'image/svg+xml' },
              }
            );
          });
      })
    );
    return;
  }

  // For static assets, use cache-first strategy
  if (isStaticAsset(event.request)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
    );
    return;
  }

  // For all other requests, use network-first strategy
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache successful responses for non-API requests
        if (response.ok && !isApiRequest(event.request)) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          // If this is a navigation request and we're offline, serve the offline page
          if (event.request.mode === 'navigate') {
            return caches.match(OFFLINE_PAGE);
          }

          // Otherwise, we have no response for this request while offline
          return new Response('Offline content not available', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/plain',
            }),
          });
        });
      })
  );
});

// Listen for messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches
      .delete(CACHE_NAME)
      .then(() => {
        console.log('Recovery dashboard cache cleared');
        event.ports[0].postMessage({ status: 'Cache cleared successfully' });
      })
      .catch((error) => {
        console.error('Error clearing cache:', error);
        event.ports[0].postMessage({
          status: 'Error clearing cache',
          error: error.toString(),
        });
      });
  }
});
