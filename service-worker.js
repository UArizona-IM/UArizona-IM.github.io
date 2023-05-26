self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('my-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/src/script.js',
          '/images/logo2.png',
          '/style.css'
        ]);
      })
    );
  });
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
    );
  });
self.addEventListener('install', function() {
  var updateCheckScript = document.createElement('script');
  updateCheckScript.src = '/update-check.js';
  document.body.appendChild(updateCheckScript);
});
