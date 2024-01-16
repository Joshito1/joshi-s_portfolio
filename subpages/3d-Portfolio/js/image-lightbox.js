var imageElements = document.getElementsByClassName('lazy enlarged');
var currentIndex = 0;
var images = Array.from(imageElements);
var modalImg = document.getElementById('modalImg');
var modalNumber = document.querySelector('.modal-number');
var modalInfo = document.querySelector('.modal-info');
var modal = document.getElementById('myModal');

var isEnabled = true;

var isSwipeEnabled = true;

for (var i = 0; i < imageElements.length; i++) {
    imageElements[i].addEventListener('click', function (event) {
        enlargeImage(event.target);
    });
}

function enlargeImage(img) {
    currentIndex = images.indexOf(img);

    // Update modal content
    modalImg.src = img.src;
    modalInfo.innerHTML = img.dataset.info;
    updateNumber();

    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Remove existing event listeners for arrow keys
    window.removeEventListener('keydown', handleArrowKeys);

    // Add new event listeners for arrow keys
    window.addEventListener('keydown', handleArrowKeys);
}

// Nav Functions
function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateModalContent();
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateModalContent();
}

// Keyboard Arrow Keys Functionality
function handleArrowKeys(e) {
    if (e.key === 'ArrowLeft') {
        showPreviousImage();
    } else if (e.key === 'ArrowRight') {
        showNextImage();
    }
}

// Update the number display
function updateNumber() {
    var label = (currentIndex === 0) ? 'latest' : (currentIndex === images.length - 1) ? 'oldest' : '';
    modalNumber.innerHTML = (currentIndex + 1) + '/' + images.length + ' ' + label;
}

// Update modal content
function updateModalContent() {
    modalImg.src = images[currentIndex].src;
    modalInfo.innerHTML = images[currentIndex].dataset.info;
    updateNumber(); // Update the number when navigating
}

// Close function
document.getElementById('closeX').addEventListener('click', function () {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Swipe functionality
function handleTouchStart(e) {
    if (!isSwipeEnabled) return;

    touchStartX = e.touches[0].clientX;
}

function handleTouchEnd(e) {
    if (!isSwipeEnabled) return;

    var touchEndX = e.changedTouches[0].clientX;
    var swipeThreshold = 50; // Adjust this threshold as needed

    if (touchStartX - touchEndX > swipeThreshold) {
        showNextImage();
    } else if (touchEndX - touchStartX > swipeThreshold) {
        showPreviousImage();
    }
}

function toggleSwipe() {
    var toggleSwipebtn = document.getElementById('toggleSwipeButton');
    isSwipeEnabled = !isSwipeEnabled;

    if (isSwipeEnabled) {
        // Enable swipe by adding event listeners
        enableSwipe();
        toggleSwipebtn.innerHTML = 'Swipe Enabled';
    } else {
        // Disable swipe by removing event listeners
        disableSwipe();
        toggleSwipebtn.innerHTML = 'Swipe Disabled';
    }
}

function enableSwipe() {
    modal.addEventListener('touchstart', handleTouchStart);
    modal.addEventListener('touchend', handleTouchEnd);
}

function disableSwipe() {
    modal.removeEventListener('touchstart', handleTouchStart);
    modal.removeEventListener('touchend', handleTouchEnd);
}

enableSwipe();

// Visibilty functionality
function toggleVis() {
    var modalNavContainer = document.querySelector('.modalNavContainer');
    var modalNumber = document.querySelector('.modal-number');
    var modalInfo = document.querySelector('.modal-info');

    isEnabled = !isEnabled;

    if (isEnabled) {
        modalNavContainer.style.display = 'block';
        modalNumber.style.display = 'block';
        modalInfo.style.display = 'block';
    } else {
        modalNavContainer.style.display = 'none';
        modalNumber.style.display = 'none';
        modalInfo.style.display = 'none';
    }
}