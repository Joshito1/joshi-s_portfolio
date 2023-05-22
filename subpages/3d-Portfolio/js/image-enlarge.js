// Get all the image elements with the specified class
var imageElements = document.getElementsByClassName('lazy loading');

// Add event listeners to each image element
for (var i = 0; i < imageElements.length; i++) {
    imageElements[i].addEventListener('click', enlargeImage);
}

function enlargeImage(event) {
    var img = event.target;
    var info = img.dataset.info; // Get the info for the clicked image

    var modal = document.createElement('div');
    modal.className = 'modal';

    var modalImg = document.createElement('img');
    modalImg.className = 'modal-content';
    modalImg.src = img.src;

    var modalInfo = document.createElement('div');
    modalInfo.className = 'modal-info';
    modalInfo.innerHTML = info; // Use innerHTML to interpret the <br> tags as line breaks

    modal.appendChild(modalImg);
    modal.appendChild(modalInfo);

    document.body.appendChild(modal);

    modal.onclick = function () {
        document.body.removeChild(modal);
    };
}