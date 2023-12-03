// Hamburger Menu //
///////////////////
const exteriorLinks = document.querySelector('.exterior-menu-links');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.burger-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  exteriorLinks.classList.toggle('fade');
});
