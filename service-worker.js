self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v2').then(function(cache) {
      return cache.addAll([
        'css/style.css',
        'css/darkmode.css',
        'css/responsive.css',
        'css/animation.css',
        'css/construct_page.css',
        'js/animations.js',
        'js/construct_page.js',
        'js/darkmode.js',
        'js/main.js',
        '/index.html',
        '/'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('v2').then(function(cache) {
      return cache.match(event.request).then(function(response) {
        var fetchPromise = fetch(event.request).then(function(networkResponse) {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        })
        return response || fetchPromise;
      })
    })
  );
});
