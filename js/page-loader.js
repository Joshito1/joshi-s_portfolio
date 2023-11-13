$(document).ready(function () {
    $('body').append('<div id="loader-container"><div id="loader"><div id="loader-bar"><div id="loader-txt">Loading...</div></div></div></div>');

    var progressInterval;
    var loadingProgress = 0;
    var increment = 1;
    var xhr = new XMLHttpRequest();

    function updateProgress(event) {
        if (event.lengthComputable) {
            var percentComplete = (event.loaded / event.total) * 100;
            loadingProgress = percentComplete;
            $('#loader-bar').css('width', loadingProgress + '%');
        }
    }

    function startProgress() {
        progressInterval = setInterval(function () {
            loadingProgress += increment;
            $('#loader-bar').css('width', loadingProgress + '%');

            if (loadingProgress >= 100) {
                clearInterval(progressInterval);
                removeLoader();

                // Call showTip after the loader is complete
                showTip('tip', 'Want to go back at one point? Click the "Universal Navigation button" on the bottom right. (Blue Button)');
            }
        }, 100);
    }

    function removeLoader() {
        $('#loader-container').fadeOut(500, function () {
            $(this).remove();
            $('.content').fadeIn();
        });
    }

    xhr.addEventListener('progress', updateProgress);
    xhr.addEventListener('load', startProgress);
    xhr.open('GET', window.location.href);
    xhr.send();
});