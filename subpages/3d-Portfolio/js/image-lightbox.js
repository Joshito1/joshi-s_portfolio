var imageElements = document.getElementsByClassName('lazy enlarged');
var currentIndex = 0;

for (var i = 0; i < imageElements.length; i++) {
    imageElements[i].addEventListener('click', enlargeImage);
}

function enlargeImage(event) {
    var img = event.target;
    var info = img.dataset.info;
    var images = document.getElementsByClassName('lazy enlarged');
    currentIndex = Array.from(images).indexOf(img);

    // Exit
    var modalClose = document.createElement('div');
    modalClose.id = 'close_container';

    var modalCloseX = document.createElement('div');
    modalCloseX.className = 'close';
    modalCloseX.textContent = '\u00D7';

    // Modal
    var modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'myModal';

    var modalContainContent = document.createElement('div');
    modalContainContent.className = 'modal_container';

    var modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    var modalImg = document.createElement('img');
    modalImg.src = img.src;

    var modalInfo = document.createElement('div');
    modalInfo.className = 'modal-info';
    modalInfo.innerHTML = info;

    // Modal Nav
    var modalNavContain = document.createElement('div');
    modalNavContain.className = 'modalNavContainer';

    var prevButton = document.createElement('a');
    prevButton.textContent = '\u276E'; // Left arrow
    prevButton.className = 'prev';
    prevButton.addEventListener('click', showPreviousImage);

    var nextButton = document.createElement('a');
    nextButton.textContent = '\u276F'; // Right arrow
    nextButton.className = 'next';
    nextButton.addEventListener('click', showNextImage);

    // Modal Number
    var modalNumber = document.createElement('div');
    modalNumber.className = 'modal-number';
    updateNumber(); // Call the function to set the initial number

    // Children
    // Close
    modalClose.appendChild(modalCloseX);
    modal.appendChild(modalClose);
    // Content
    modal.appendChild(modalContainContent);
    modalContainContent.appendChild(modalContent);
    modalContent.appendChild(modalNumber);
    modalContent.appendChild(modalImg);
    modalContent.appendChild(modalInfo);
    // Nav
    modalContainContent.appendChild(modalNavContain);
    modalNavContain.appendChild(prevButton);
    modalNavContain.appendChild(nextButton);

    document.body.appendChild(modal);

    // Close function
    modalCloseX.onclick = function () {
        document.body.removeChild(modal);
        document.body.style.overflow = 'auto';
    };

    // Update the number display
    function updateNumber() {
        var label = (currentIndex === 0) ? 'latest' : (currentIndex === images.length - 1) ? 'oldest' : '';
        modalNumber.innerHTML = (currentIndex + 1) + '/' + images.length + ' ' + label;
    }

    // Nav Functions
    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentIndex].src;
        modalInfo.innerHTML = images[currentIndex].dataset.info;
        updateNumber(); // Update the number when navigating
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        modalImg.src = images[currentIndex].src;
        modalInfo.innerHTML = images[currentIndex].dataset.info;
        updateNumber(); // Update the number when navigating
    }

    // Swipe functionality
    var touchStartX = 0;
    modalContent.addEventListener('touchstart', function (e) {
        touchStartX = e.touches[0].clientX;
    });

    modalContent.addEventListener('touchend', function (e) {
        var touchEndX = e.changedTouches[0].clientX;
        var swipeThreshold = 50; // Adjust this threshold as needed

        if (touchStartX - touchEndX > swipeThreshold) {
            showNextImage();
        } else if (touchEndX - touchStartX > swipeThreshold) {
            showPreviousImage();
        }
    });

    // Keyboard arrow key functionality
    window.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
            showPreviousImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        }
    });

    document.body.style.overflow = 'hidden';
}
