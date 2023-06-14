// Model project
// Get the modal
var modal = document.getElementById("myModal");

// Get the slide and insert it inside the modal
var slides = document.getElementsByClassName('swiper-slide');
var modalContent = document.getElementById("modalContent");

for (var i = 0; i < slides.length; i++) {
  slides[i].onclick = function() {
    modal.style.display = "block";
    var projectImage = this.getElementsByTagName('img')[0].src; // Get the project image

    // Copy slide content (excluding image)

    // Add a carousel
    modalContent.innerHTML = `
      <div class="swiper-container modalSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="${projectImage}" class="rounded-lg shadow-2xl" alt="Projet" ></div>
          <div class="swiper-slide"><img src="${projectImage}" class="rounded-lg shadow-2xl" alt="Random image 1"></div>
          <div class="swiper-slide"><img src="${projectImage}" class="rounded-lg shadow-2xl" alt="Random image 2"></div>
        </div>
        <div class="swiper-pagination project-in"></div>
        <div class="swiper-button-next project-in"></div>
        <div class="swiper-button-prev project-in"></div>
      </div>`+ this.getElementsByClassName('bg-gray-800')[0].outerHTML;

    // Initialize Swiper for the modal
    var modalSwiper = new Swiper('.modalSwiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      spaceBetween: 10,
    });
  }
}

var span = document.getElementsByClassName("close")[0];

// Close modal when clicking outside of the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modalContent.classList.add("close-animation");
    setTimeout(function() {
      modal.style.display = "none";
      modalContent.classList.remove("close-animation");
    }, 1000);
  }
}

span.onclick = function() {
  modalContent.classList.add("close-animation");
  setTimeout(function() {
    modal.style.display = "none";
    modalContent.classList.remove("close-animation");
  }, 1000);
}

