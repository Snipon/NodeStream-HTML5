//Should this be a separate file?

// Inform the user of applicationCache activities.
window.applicationCache.addEventListener('downloading', function() {
  console.log("downloading resources");
}, false);

window.applicationCache.addEventListener('progress', function() {
}, false);

window.applicationCache.addEventListener('updateready', reloadApplication, false);
window.applicationCache.addEventListener('obsolete', reloadApplication, false);

window.applicationCache.addEventListener('noupdate', initializeApplication, false);
window.applicationCache.addEventListener('cached', initializeApplication, false);
window.applicationCache.addEventListener('error', handleAppcacheError, false);

function reloadApplication(){
  window.location.reload();
}

function handleAppcacheError() {
  try{
    window.applicationCache.update();
  }
  catch(err){
    console.log("No application cache available");
  }

  if(window.applicationCache.status == window.applicationCache.UPDATEREADY) {
    window.applicationCache.swapCache();
    reloadApplication();
  } else {
    initializeApplication();
  }
}

// Should replace document.ready
function initializeApplication(){
  console.log('initialize');
}