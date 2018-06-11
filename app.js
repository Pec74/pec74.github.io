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


      window.addEventListener('beforeinstallprompt', function(e) {
      // beforeinstallprompt Event fired
      // e.userChoice will return a Promise.
      e.userChoice.then(function(choiceResult) {
        console.log(choiceResult.outcome);
        if(choiceResult.outcome == 'dismissed') {
          alert('User cancelled home screen install');
        }
        else {
          alert('User added to home screen');
        }
      });
    });
 
