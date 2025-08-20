document.addEventListener('DOMContentLoaded', function() {
  const splash = document.querySelector('.splash-screen-new-battle');

  if (splash) {
    setTimeout(function() {
      splash.classList.add('hidden');
    }, 2000); 
  }
});