// Infinite Canvas Service Worker
const CACHE_NAME = 'infinite-canvas-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/js/app.js',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Bebas+Neue&family=Space+Mono&display=swap'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.log('Cache error:', err);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(response => {
          // Check if valid response
          if(!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for reading progress
self.addEventListener('sync', event => {
  if (event.tag === 'sync-reading-progress') {
    event.waitUntil(syncReadingProgress());
  }
});

async function syncReadingProgress() {
  // Sync reading progress when back online
  const db = await openDB();
  const progress = await db.get('readingProgress');
  
  if (progress) {
    // Send to server when implemented
    console.log('Syncing reading progress:', progress);
  }
}

// IndexedDB for offline storage
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('InfiniteCanvasDB', 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = event => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('novels')) {
        db.createObjectStore('novels', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('readingProgress')) {
        db.createObjectStore('readingProgress', { keyPath: 'novelId' });
      }
    };
  });
}

// Push notifications for new releases
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'New graphic novel available!',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore Now',
        icon: '/icons/checkmark.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/xmark.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Infinite Canvas', options)
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'explore') {
    clients.openWindow('/#library');
  }
});