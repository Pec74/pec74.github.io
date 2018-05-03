(function() {
  'use strict';

  // TODO add service worker code here
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js')
             .then(function() { console.log('Service Worker Registered'); });
        toast("We can't cache your app data yet..");
  }


})();
