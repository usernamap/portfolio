self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
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
      caches.match(event.request).then(function(response) {
        if (response !== undefined) {
          return response;
        } else {
          return fetch(event.request).then(function (response) {
            let responseClone = response.clone();
            
            caches.open('v1').then(function (cache) {
              cache.put(event.request, responseClone);
            });
  
            return response;
          }).catch(function () {
            return caches.match('/index.html');
          });
        }
      })
    );
  });
  