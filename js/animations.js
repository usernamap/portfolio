
// apparition
gsap.from("header", {duration: 0.5, y: -300, opacity: 0, scale: 0.5});
// gsap.from("main", {duration: 1.5, y: -300, opacity: 0, scale: 0.5});
gsap.from("footer", {duration: 3, y: -300, opacity: 0, scale: 0.5});

// scroll
ScrollReveal().reveal('#about', { delay: 200 });
ScrollReveal().reveal('#skills', { delay: 600 });
ScrollReveal().reveal('#projects', { delay: 700 });
ScrollReveal().reveal('#contact', { delay: 800 });

// swiper uniquement sur la section projects (pour éviter les bugs)
var swiperInitiated = false;
window.onscroll = function() {
  var projectsSection = document.getElementById('projects');
  var rect = projectsSection.getBoundingClientRect();
  var isInView = (rect.top <= window.innerHeight) && ((rect.top + rect.height) >= 0);

  // Initialize Swiper when the #projects section is in view and swiper has not been initiated yet
  if (isInView && !swiperInitiated) {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    swiperInitiated = true; // Make sure swiper does not get initiated multiple times
  }
};

// background
  function generateParticles(color) {
    particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 60,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": color
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": color,
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }
    );
}

if (window.pJSDom && window.pJSDom.length > 0 && window.pJSDom[0].pJS.particles) {
  window.pJSDom[0].pJS.particles.array.splice(0, window.pJSDom[0].pJS.particles.array.length);
}

generateParticles(toggle.checked ? '#000000' : '#ffffff');

