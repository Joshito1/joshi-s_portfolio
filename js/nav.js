// Hamburger Menu //
///////////////////
const universal_hamburger = document.querySelector('#univ_nav_button');
const universal_menu_bg = document.querySelector('#universal_nav_bg');
const universal_menu = document.querySelector('#universal_nav');

universal_hamburger.addEventListener('click', () => {
    universal_hamburger.classList.toggle('active');
    universal_menu.classList.toggle('active');
    universal_menu_bg.classList.toggle('active');
});