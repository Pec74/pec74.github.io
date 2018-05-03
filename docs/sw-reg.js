//Add this below content to your HTML page, or add the js file to your page at the very top to register sercie worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('service-worker.js', {
      scope: '././'
    }).then(function(reg) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', reg.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
      });
  });

  // SW READY
  
  navigator.serviceWorker.ready
  .then(function(registration) {
    console.log('A service worker is active:', registration.active);

    // At this point, you can call methods that require an active
    // service worker, like registration.pushManager.subscribe()
  });
  
  //SW CONTROLLER
  
   // Do a one-off check to see if a service worker's in control.
    if (navigator.serviceWorker.controller) {
        console.log('This page is currently controlled by:',
			navigator.serviceWorker.controller);
      } else {
        console.log('This page is not currently controlled ' +
        'by a service worker.');
      }


} else {
  console.log('Service workers are not supported.');
}
