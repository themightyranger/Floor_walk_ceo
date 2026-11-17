// Clean-up worker: removes any old cached copies from earlier versions of the guide, then unregisters itself.
self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.map(function(c){return caches.delete(c)}))}).then(function(){return self.registration.unregister()}))});
