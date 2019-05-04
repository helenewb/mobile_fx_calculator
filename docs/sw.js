self.addEventListener('install', (event) => {
    event.waitUntil(caches.open('fxcalc-v1')
        .then(cache => cache.addAll([
            '/mobile_fx_calculator/',
            'index.html',
            'style.css',
            'app.js',
            'icon512.png',
            'icon16.png',
            'rates.json',
            'manifest.webmanifest'
        ]))
    );
});

//cache only 
self.addEventListener('fetch',(event) => {
    event.respondWith(caches.open('fxcalc-v1')
        .then(cache => cache.match(event.request))
    );
});