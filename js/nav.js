// Hamburger Menu //
///////////////////
const universal_hamburger = document.querySelector('#nav-toggle');
const universal_menu = document.querySelector('#nav');

universal_hamburger.addEventListener('click', () => {
    universal_hamburger.classList.toggle('active');
    universal_menu.classList.toggle('active');
});
