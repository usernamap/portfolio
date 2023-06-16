// Modal pour la section "projects"
var modal = document.getElementById("myModal");
var slides = document.getElementsByClassName('swiper-slide');
var modalContent = document.getElementById("modalContent");

var description_time = '<span class="tooltiptext"> Temps maximum du projet </span>';
var description_person = '<span class="tooltiptext"> Personne dans le projet </span>';

var description_difficulty = '<span class="tooltiptext">Difficulté du projet </span>';
var description_star = '<span class="tooltiptext"> Satisfaction du projet </span>';

//slide 1 icon
var icon_time = `<div class="tooltip-container"><img src="assets/images/icon/chronometer.png" class="icon-project" alt="temps icon" width="15" height="15" margin-right= 1em>${description_time}</div>`;
var icon_person = `<div class="tooltip-container"><img src="assets/images/icon/user.png" class="icon-project" alt="personne icon" width="15" height="15">${description_person}</div>`;

//slide 2 icon
var easy_difficulty = `<span class="span-difficulty--project"> <div class="tooltip-container"> <img src="assets/images/icon/easy_difficulty.png" class="icon-project" alt="personne icon" width="30" height="30"> ${description_difficulty}</div></span>`;
var medium_difficulty = `<span class="span-difficulty--project"> <div class="tooltip-container"> <img src="assets/images/icon/medium_difficulty.png" class="icon-project" alt="personne icon" width="30" height="30"> ${description_difficulty}</div></span>`;
var hard_difficulty = `<span class="span-difficulty--project"> <div class="tooltip-container"> <img src="assets/images/icon/hard_difficulty.png" class="icon-project" alt="personne icon" width="30" height="30">${description_difficulty} </div></span>`;

//slide 3 icon
var star_one = `<span class="span-star--project"> <div class="tooltip-container" style="display: flex !important;"> <img src="assets/images/icon/star.png" class="icon-project" alt="personne icon" width="15" height="15"> <img src="assets/images/icon/star_empty.png" class="icon-project" alt="personne icon" width="15" height="15"> <img src="assets/images/icon/star_empty.png" class="icon-project" alt="personne icon" width="15" height="15"> <img src="assets/images/icon/star_empty.png" class="icon-project" alt="personne icon" width="15" height="15"> <img src="assets/images/icon/star_empty.png" class="icon-project" alt="personne icon" width="15" height="15"> ${description_star} </div>`;
var star_two = `<span class="span-star--project"> <div class="tooltip-container" style="display: flex !important;"> <img src="assets/images/icon/star.png" class="icon-project" alt="personne icon" width="15" height="15"> <img src="assets/images/icon/star.png" class="icon-project" alt="personne icon" width="15" height="15"> <img src="assets/images/icon/star_empty.png" class="icon-project" alt="personne icon" width="15" height="15"> <img src="assets/images/icon/star_empty.png" class="icon-project" alt="personne icon" width="15" height="15"> <img src="assets/images/icon/star_empty.png" class="icon-project" alt="personne icon" width="15" height="15"> ${description_star} </div>`;
var star_three = `<span class="span-star--project"> <div class="tooltip-container" style="display: flex !important;"> <img src="assets/images/icon/star.png" class="icon-project" alt="personne icon" width="15" height="15"> <img src="assets/images/icon/star.png" class="icon-project" alt="personne icon" width="15" height="15"> <img src="assets/images/icon/star.png" class="icon-project" alt="personne icon" width="15" height="15"> <img src="assets/images/icon/star_empty.png" class="icon-project" alt="personne icon" width="15" height="15"> <img src="assets/images/icon/star_empty.png" class="icon-project" alt="personne icon" width="15" height="15"> ${description_star} </div>`;
var star_four = `<span class="span-star--project"> <div class="tooltip-container" style="display: flex !important;"> <img src="assets/images/icon/star.png" class="icon-project" alt="personne icon" width="15" height="15"> <img src="assets/images/icon/star.png" class="icon-project" alt="personne icon" width="15" height="15"> <img src="assets/images/icon/star.png" class="icon-project" alt="personne icon" width="15" height="15"> <img src="assets/images/icon/star.png" class="icon-project" alt="personne icon" width="15" height="15"> <img src="assets/images/icon/star_empty.png" class="icon-project" alt="personne icon" width="15" height="15"> ${description_star} </div>`;
var star_five = `<span class="span-star--project"> <div class="tooltip-container" style="display: flex !important;"> <img src="assets/images/icon/star.png" class="icon-project" alt="personne icon" width="15" height="15"> <img src="assets/images/icon/star.png" class="icon-project" alt="personne icon" width="15" height="15"> <img src="assets/images/icon/star.png" class="icon-project" alt="personne icon" width="15" height="15"> <img src="assets/images/icon/star.png" class="icon-project" alt="personne icon" width="15" height="15"> <img src="assets/images/icon/star.png" class="icon-project" alt="personne icon" width="15" height="15"> ${description_star} </div>`;

var projects = [
  {
    images: ["assets/images/projects/my-snapchat/snapchat_result.png", "assets/images/projects/my-snapchat/snapchat_code.png", "assets/images/projects/my-snapchat/spapchat_pdf.png"],
    descriptions: [`Un projet où nous réinventons l'application populaire Snapchat en utilisant React Native et une API REST pour une expérience mobile immersive <br> <span class="span-time_person--project" style='left: 0; margin-left: 1em;'> ${icon_time} 1 semaine </span><br><span class="span-time_person--project" style='right: 0; margin-right: 1em;'>${icon_person} 2 <br></span> `, `<p class='description-technique--project'>Il implique la création d'une application qui permet aux utilisateurs de s'inscrire, de se connecter, de choisir une image à envoyer à leurs amis à partir de leur galerie ou de leur appareil photo, de définir une durée d'affichage pour l'image, puis de la supprimer une fois cette durée écoulée. Les caractéristiques supplémentaires comprennent l'ajout d'une photo de profil, la modification des données de l'utilisateur, la gestion des amis, et la sauvegarde des images lorsqu'il n'y a pas de réseau.</p>${hard_difficulty}`, `<p class='description-technique--project'>Mettant en pratique mes compétences en React et React Native. La construction d'une application qui imite Snapchat, avec une emphase sur la gestion des médias et les interactions utilisateur, représente un défi significatif qui me pousse à explorer de nouvelles stratégies de développement. C'est l'occasion idéale pour améliorer mon expertise en matière d'applications mobiles tout en créant quelque chose d'amusant et d'interactif.</p>${star_five}`]
  },
  {
    images: ["assets/images/projects/free-ads/free-ads_result.png", "assets/images/projects/free-ads/free-ads_code.png", "assets/images/projects/free-ads/free-ads_pdf.png"],
    descriptions: [`Un projet où nous façonnons une plateforme d'annonces dynamique, basée sur le robuste Framework Laravel <br> <span class="span-time_person--project" style='left: 0; margin-left: 1em;'> ${icon_time} 1 semaine </span><br><span class="span-time_person--project" style='right: 0; margin-right: 1em;'>${icon_person} 1 <br></span> `, `<p class='description-technique--project'>Englobant diverses fonctionnalités : authentification utilisateur, création et gestion de profils, publication et gestion d'annonces, et une fonction de messagerie interne. Le système offre également des capacités de recherche d'annonces avec filtres et une fonction de matching d'annonces. De plus, une attention particulière a été portée au processus de test et de débogage pour garantir une expérience utilisateur fluide et efficace</p>${medium_difficulty}`, `<p class='description-technique--project'>Il me permet d'exploiter pleinement les fonctionnalités de Laravel, tout en approfondissant mes compétences en PHP. La création d'un système complet d'annonces, y compris des fonctionnalités comme la messagerie interne et le matching d'annonces, offre un large éventail de problèmes intéressants à résoudre.</p>${star_four}`]
  },
  {
    images: ["assets/images/projects/tweet-academy/tweet_result.png", "assets/images/projects/tweet-academy/tweet_code.png", "assets/images/projects/tweet-academy/tweet_pdf.png"],
    descriptions: [`Un projet captivant où nous recréons Twitter pour un public académique en utilisant PHP, HTML, CSS et JS <br> <span class="span-time_person--project" style='left: 0; margin-left: 1em;'> ${icon_time} 4 semaine </span><br><span class="span-time_person--project" style='right: 0; margin-right: 1em;'>${icon_person} 3 <br></span> `, `<p class='description-technique--project'>Il inclut des fonctionnalités telles que les comptes utilisateurs, la publication de tweets, le suivi d'autres utilisateurs, un système de hashtags, des mentions, un système de messagerie privée et l'intégration de photos. L'authentification est sécurisée avec des mots de passe hashés et il utilise un micro-framework CSS pour assurer la réactivité du design</p>${medium_difficulty}`, `<p class='description-technique--project'> Il permet d'approfondir mes compétences en PHP, HTML, CSS, et JavaScript, et aussi de travailler sur des fonctionnalités de médias sociaux réalistes.De plus, l'implémentation de la sécurité, comme le hachage des mots de passe, renforce l'importance des meilleures pratiques de sécurité dans le développement web.</p>${star_five}`]
  },
  {
    images: ["assets/images/projects/spotify/spotify_result.png", "assets/images/projects/spotify/spotify_code.png", "assets/images/projects/tweet-academy/tweet_pdf.png"],
    descriptions: [`Un projet ambitieux pour créer un lecteur multimédia en ligne en exploitant les API REST et React et JavaScript <br> <span class="span-time_person--project" style='left: 0; margin-left: 1em;'> ${icon_time} 2 jour </span><br><span class="span-time_person--project" style='right: 0; margin-right: 1em;'>${icon_person} 3 <br></span> `, `<p class='description-technique--project'>Exploite les API REST pour l'échange de données, manipule efficacement le JSON, et gère la pagination et la recherche. Un conteneur Docker est utilisé pour configurer l'API en local. Le site offre plusieurs pages de navigation détaillées, y compris des pages pour lister et détailler des albums, des genres et des artistes, ainsi qu'une page de recherche globale</p>${hard_difficulty}`, `<p class='description-technique--project'> C'est l'occasion d'appliquer et de renforcer mes compétences en HTML, CSS, JavaScript, React et la gestion des API.De plus, le défi technique de manipuler correctement les données de l'API, d'implémenter un lecteur audio HTML5 et de gérer la pagination et la recherche, tout en maintenant une expérience utilisateur fluide, offre une grande satisfaction en tant que développeur.</p>${star_four}`]
  },
    {
    images: ["assets/images/projects/my-quizz/my-quizz_result.png", "assets/images/projects/my-quizz/my-quizz_code.png", "assets/images/projects/my-quizz/my-quizz_pdf.png"],
    descriptions: [`Un projet équipé du framework Symfony, ce projet offre des catégories de quiz 	à choix, un suivi des performances des utilisateurs, et des capacités d'administration avancées <br> <span class="span-time_person--project" style='left: 0; margin-left: 1em;'> ${icon_time} 2 semaine </span><br><span class="span-time_person--project" style='right: 0; margin-right: 1em;'>${icon_person} 2 <br></span> `, `<p class='description-technique--project'>Basé sur le framework PHP Symfony utilsant plusieurs composants clés de Symfony, notamment : Les Repositories Doctrine, Entities, Relations de models, Form Builder et Twig. Il est conçu pour proposer des quiz pour tester la culture générale de ses utilisateurs. Le système devrait également collecter des informations sur les utilisateurs pour personnaliser leurs expériences.</p>${easy_difficulty}`, `<p class='description-technique--project'>Symfony permet d'aborder diverses facettes du développement web moderne. Avec Symfony, je peux utiliser des principes de programmation orientée objet, ce qui est une compétence précieuse pour tout développeur web. De plus, j'apprécie le fait que Symfony est basé sur le modèle MVC (Modèle-Vue-Contrôleur), qui aide à structurer et organiser le code.</p>${star_two}`]
  }
];

for (let i = 0; i < slides.length; i++) {
  slides[i].onclick = function() {
    modal.style.display = "block";
    document.body.classList.add("no-scroll");

    // Récupérez le projet correspondant à l'image cliquée
    var project = projects[i];

    // Générez le contenu du carrousel
    var carouselContent = "";
    for (var j = 0; j < project.images.length; j++) {
      carouselContent += `
      <div class="swiper-slide">
      <img src="${project.images[j]}" class="rounded-lg shadow-2xl img-fit" alt="Projet" >
      <div class="bg-gray-800 rounded-lg p-4" style="height: 8.5em;">
        <p class="project--text text-gray-200 mb-8">
          ${project.descriptions[j]}
        </p>
      </div>
    </div>`;
    }

    // Add a carousel
    modalContent.innerHTML = `
      <div class="swiper-container modalSwiper">
        <div class="swiper-wrapper">
          ${carouselContent}
        </div>
        <div class="swiper-pagination project-in"></div>
        <div class="swiper-button-next project-in"></div>
        <div class="swiper-button-prev project-in"></div>
      </div>`;

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

// Close modal when clicking on the close button
span.onclick = function() {
  modalContent.classList.add("close-animation");
  setTimeout(function() {
    modal.style.display = "none";
    modalContent.classList.remove("close-animation");
  }, 1000);
}

// fusionnage des fermeture des deux modals
// Lorsqu'on clique en dehors des modals
window.onclick = function(event) {
  if (event.target == modal) {
    modalContent.classList.add("close-animation");
    setTimeout(function() {
      modal.style.display = "none";
      modalContent.classList.remove("close-animation");
      modalContent.classList.remove("open-animation"); // Supprimez l'animation d'ouverture
      document.body.classList.remove("no-scroll");
    }, 1000);
  } else if (event.target == modal_cv) {
    cvModalContent.classList.add("close-animation"); // Modifiez cette ligne
    setTimeout(function() {
      modal_cv.style.display = "none";
      document.querySelector(".modal").classList.remove("open");
      cvModalContent.classList.remove("close-animation"); // Modifiez cette ligne
      cvModalContent.classList.remove("open-animation"); // Supprimez l'animation d'ouverture
      document.body.classList.remove("no-scroll");
    }, 1000);
  }
}

// Modal pour la section "À propos"
var modal_cv = document.getElementById("cvModal");
var cvModalContent = document.getElementById("cvModalContent"); // Ajoutez cette ligne
var btn = document.getElementById("cvPreview");
var span = document.getElementsByClassName("cv-modal-close")[0];

btn.onclick = function() {
  modal_cv.style.display = "block";
  cvModalContent.classList.add("open-animation");
  document.querySelector(".modal").classList.add("open");
  document.body.classList.add("no-scroll");
}

span.onclick = function() {
  cvModalContent.classList.add("close-animation"); // Modifiez cette ligne
  setTimeout(function() {
    modal_cv.style.display = "none";
    document.querySelector(".modal").classList.remove("open");
    cvModalContent.classList.remove("close-animation"); // Modifiez cette ligne
    cvModalContent.classList.remove("open-animation"); // Ajoutez cette ligne
    document.body.classList.remove("no-scroll");
  }, 1000);
}