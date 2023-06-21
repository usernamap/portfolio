const toggle = document.querySelector('#toggleDarkMode');

// SI le mode existe dans le local storage
if (localStorage.getItem('mode')) {
  let mode = localStorage.getItem('mode');
  
  // Si le mode est light, on coche la case et on ajoute la classe 'light' au body
  if (mode === 'light') {
    toggle.checked = true;
    document.body.classList.add('light');
  } else {
    toggle.checked = false;
    document.body.classList.remove('light');
  }
} else {
  // SI le mode n'existe pas dans le local storage
  const hours = new Date().getHours();
  toggle.checked = hours < 7 || hours > 20;

  // SI l'heure est inférieure à 7 ou supérieure à 20, on coche la case et on ajoute la classe 'light' au body
  if (toggle.checked) {
    document.body.classList.add('light');
    localStorage.setItem('mode', 'light');
  } else {
    // Si l'heure est supérieure à 7 et inférieure à 20, on décoche la case et on supprime la classe 'light' du body
    document.body.classList.remove('light');
    localStorage.setItem('mode', 'dark');
  }
}

toggle.addEventListener('change', function() {
  // Toggle pour ajouter ou supprimer la classe 'light' du body
  document.body.classList.toggle('light');

 if (window.pJSDom && window.pJSDom.length > 0 && window.pJSDom[0].pJS.particles) {
    window.pJSDom[0].pJS.particles.array.splice(0, window.pJSDom[0].pJS.particles.array.length);
  }
  
  generateParticles(toggle.checked ? '#000000' : '#ffffff');

  
  // Si la case est cochée, on stocke 'light' dans le local storage
  if (document.body.classList.contains('light')) {
    localStorage.setItem('mode', 'light');
  } else {
    localStorage.setItem('mode', 'dark');
  }
});
