document.addEventListener('DOMContentLoaded', function () {

    // Assuming the tiles are wrapped in a container with the class "gallery"
    var galleryContainer = document.querySelector('.gallery');

    // Iterate through each tile and add the appropriate icon
    var tiles = galleryContainer.querySelectorAll('.tiles');
    tiles.forEach(function (tile) {
        var imgElement = tile.querySelector('.lazy.enlarged');

        if (imgElement) {
            // If there is an image, add the image icon
            var imgIcon = document.createElement('i');
            imgIcon.classList.add('ri', 'ri-image-fill');
            tile.appendChild(imgIcon);
        } else {
            // If there is no image, add the play icon
            var playIcon = document.createElement('i');
            playIcon.classList.add('ri', 'ri-play-fill');
            tile.appendChild(playIcon);
        }
    });
});
