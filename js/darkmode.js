const toggle = document.querySelector('#toggleDarkMode');
const toggleDesktop = document.querySelector('#toggleDarkModeDesktop');

function updateMode(isLight) {
  if (isLight) {
    document.body.classList.add('light');
    localStorage.setItem('mode', 'light');
  } else {
    document.body.classList.remove('light');
    localStorage.setItem('mode', 'dark');
  }
  
  if (window.pJSDom && window.pJSDom.length > 0 && window.pJSDom[0].pJS.particles) {
    window.pJSDom[0].pJS.particles.array.splice(0, window.pJSDom[0].pJS.particles.array.length);
  }
  
  generateParticles(isLight ? '#000000' : '#ffffff');
}

function checkInitialMode() {
  // SI le mode existe dans le local storage
  if (localStorage.getItem('mode')) {
    let mode = localStorage.getItem('mode');
  
    // Si le mode est light, on coche la case et on ajoute la classe 'light' au body
    if (mode === 'light') {
      toggle.checked = true;
      toggleDesktop.checked = true;
      updateMode(true);
    } else {
      toggle.checked = false;
      toggleDesktop.checked = false;
      updateMode(false);
    }
  } else {
    // SI le mode n'existe pas dans le local storage
    const hours = new Date().getHours();
    const isLight = hours < 7 || hours > 20;
    toggle.checked = isLight;
    toggleDesktop.checked = isLight;
    updateMode(isLight);
  }
}

toggle.addEventListener('change', function() {
  // Toggle pour ajouter ou supprimer la classe 'light' du body
  document.body.classList.toggle('light');
  
  const isLight = document.body.classList.contains('light');
  updateMode(isLight);
  
  // Synchroniser l'autre bouton
  toggleDesktop.checked = isLight;
});

toggleDesktop.addEventListener('change', function() {
  // Toggle pour ajouter ou supprimer la classe 'light' du body
  document.body.classList.toggle('light');
  
  const isLight = document.body.classList.contains('light');
  updateMode(isLight);
  
  // Synchroniser l'autre bouton
  toggle.checked = isLight;
});

checkInitialMode();
