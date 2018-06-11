(function() {
  'use strict';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js', {
      scope: '././'
    }).then(function(reg) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', reg.scope);
                    toast("We WIN !!!");
    }, function(err) {
      // registration failed :
      console.log('ServiceWorker registration failed: ', err);
              toast("We fail, but it's success for YOU ! ");
      });
  });
  }


})();

let installPromptEvent;

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome <= 67 from automatically showing the prompt
  event.preventDefault();
  // Stash the event so it can be triggered later.
  installPromptEvent = event;
  // Update the install UI to notify the user app can be installed
  document.querySelector('#install-button').disabled = false;
});
 
btnInstall.addEventListener('click', () => {
  // Update the install UI to remove the install button
  document.querySelector('#install-button').disabled = true;
  // Show the modal add to home screen dialog
  installPromptEvent.prompt();
  // Wait for the user to respond to the prompt
  installPromptEvent.userChoice.then((choice) => {
    if (choice.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt');
    } else {
      console.log('User dismissed the A2HS prompt');
    }
    // Clear the saved prompt since it can't be used again
    installPromptEvent = null;
  });
});
