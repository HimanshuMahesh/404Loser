/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Function to toggle dropdown menu visibility
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown-content');
    // Toggle the display of the dropdown
    if (dropdown.classList.contains('show-dropdown')) {
        dropdown.classList.remove('show-dropdown');
    } else {
        dropdown.classList.add('show-dropdown');
    }
}

// JavaScript to toggle dropdown menu visibility on About button click
document.getElementById('about-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    toggleDropdown();
});

// Add click event for the box icon to toggle dropdown
navToggle.addEventListener('click', function(event) {
    event.preventDefault();
    toggleDropdown();
});

// Optional: Click outside to close dropdown
window.addEventListener('click', function(event) {
    const aboutBtn = document.getElementById('about-btn');
    const dropdown = document.getElementById('dropdown-content');

    if (!aboutBtn.contains(event.target) && !dropdown.contains(event.target) && !navToggle.contains(event.target)) {
        dropdown.classList.remove('show-dropdown');
    }
});

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '90px',
    duration: 3000,
});

sr.reveal(`.home__data`, {origin: 'top', delay: 400});
sr.reveal(`.home__img`, {origin: 'bottom', delay: 600});
sr.reveal(`.home__footer`, {origin: 'bottom', delay: 800});
