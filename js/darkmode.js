const toggle = document.querySelector('#toggleDarkMode');

// Check if the 'mode' data exists in the local storage
if (localStorage.getItem('mode')) {
  let mode = localStorage.getItem('mode');
  
  // If mode is 'light', check the toggle and add the class 'light' to the body
  if (mode === 'light') {
    toggle.checked = true;
    document.body.classList.add('light');
  } else {
    toggle.checked = false;
    document.body.classList.remove('light');
  }
} else {
  // If no 'mode' data exists in the local storage, check the time
  const hours = new Date().getHours();
  toggle.checked = hours < 7 || hours > 20;

  // If it's daytime, add the class 'light' to the body and store 'light' in the local storage
  if (toggle.checked) {
    document.body.classList.add('light');
    localStorage.setItem('mode', 'light');
  } else {
    // If it's night, remove the class 'light' from the body and store 'dark' in the local storage
    document.body.classList.remove('light');
    localStorage.setItem('mode', 'dark');
  }
}

toggle.addEventListener('change', function() {
  // Toggle the class 'light' on the body
  document.body.classList.toggle('light');

 if (window.pJSDom && window.pJSDom.length > 0 && window.pJSDom[0].pJS.particles) {
    window.pJSDom[0].pJS.particles.array.splice(0, window.pJSDom[0].pJS.particles.array.length);
  }
  
  generateParticles(toggle.checked ? '#000000' : '#ffffff');

  
  // If the class 'light' is on the body, store 'light' in the local storage, else store 'dark'
  if (document.body.classList.contains('light')) {
    localStorage.setItem('mode', 'light');
  } else {
    localStorage.setItem('mode', 'dark');
  }
});
