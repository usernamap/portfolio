let isMenuOpen = false;

function toggleMenu() {
    const navContainer = document.querySelector("#nav-container");
    const navTitle = document.querySelector("#nav-title");
    const toggleDarkMode = document.querySelector("#toggleDarkMode");
    const desktopDarkModeToggle = document.querySelector(".desktop-toggle--darkmode");
    const menuIcon = document.querySelector("#menu-icon");
    const mobileMenu = document.querySelector("#mobile-menu");
    const nav = document.querySelector("#nav");
    const burgerIcon = document.getElementById('menu-burger');
    const closeIcon = document.getElementById('menu-cross');
    
    // Check if the viewport is in mobile view
    const isMobileView = window.matchMedia("(max-width: 768px)").matches;
  
    if (isMenuOpen) {
      if (isMobileView) {
        navContainer.classList.remove("flex-col");
        toggleDarkMode.classList.add("hidden");
        desktopDarkModeToggle.classList.remove("hidden");
        menuIcon.classList.remove("justify-end");
        menuIcon.classList.add("justify-start");
        mobileMenu.classList.add("hidden"); 
        nav.classList.add("px-6");
        nav.classList.add("py-3");
        closeIcon.classList.add('hidden');
        burgerIcon.classList.remove('hidden');

        navTitle.classList.remove("mt-2");
        navTitle.classList.remove("ml-28");
        navTitle.classList.remove("text-3xl");
        toggleDarkMode.classList.remove("hidden");
        closeIcon.classList.remove('mb-8');
        closeIcon.classList.remove('h-10');
      }
    } else {
      if (isMobileView) {
        navContainer.classList.add("flex-col");
        toggleDarkMode.classList.remove("hidden");
        desktopDarkModeToggle.classList.add("hidden");
        menuIcon.classList.add("justify-end");
        menuIcon.classList.remove("justify-start");
        mobileMenu.classList.remove("hidden"); 
        nav.classList.remove("px-6");
        nav.classList.remove("py-3");
        burgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');

        navTitle.classList.add("mt-2");
        navTitle.classList.add("ml-28");
        navTitle.classList.add("text-3xl");
        toggleDarkMode.classList.add("hidden");
        closeIcon.classList.add('mb-8');
        closeIcon.classList.add('h-10');
      }
    }
  
    isMenuOpen = !isMenuOpen;
  }
  
  document.querySelector("#burger").addEventListener("click", toggleMenu);