const images = document.querySelectorAll('.gallery img');

let currentImage;

images.forEach((image) => {
    image.addEventListener('click', () => {
        if (currentImage) {
            currentImage.classList.remove('active');
        }
        image.classList.add('active');
        currentImage = image;
    });
});

let startX;
let scrollLeft;
let isDown = false;

document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - document.querySelector('.gallery').offsetLeft;
    scrollLeft = document.querySelector('.gallery').scrollLeft;
    isDown = true;
});

document.addEventListener('touchend', () => {
    isDown = false;
});

document.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - document.querySelector('.gallery').offsetLeft;
    const walk = (x - startX) * 3;
    document.querySelector('.gallery').scrollLeft = scrollLeft - walk;
});
