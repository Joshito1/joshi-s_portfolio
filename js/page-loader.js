// $(document).ready(function () {
//     $('body').append('<div style="" id="loader-container"><div id="loader"><div id="loader-txt">Loading...</div></div></div>');

//     var progressInterval;
//     var loadingProgress = 0;
//     var increment = 1;
//     var xhr = new XMLHttpRequest();

//     function updateProgress(event) {
//         if (event.lengthComputable) {
//             var percentComplete = (event.loaded / event.total) * 100;
//             loadingProgress = percentComplete;
//             $('#loader').css('width', loadingProgress + '%');
//         }
//     }

//     function startProgress() {
//         progressInterval = setInterval(function () {
//             loadingProgress += increment;
//             $('#loader').css('width', loadingProgress + '%');

//             if (loadingProgress >= 100) {
//                 clearInterval(progressInterval);
//                 removeLoader();
//             }
//         }, 100);
//     }

//     function removeLoader() {
//         $('#loader-container').fadeOut(500, function () {
//             $(this).remove();
//             $('.content').fadeIn();
//         });
//     }

//     xhr.addEventListener('progress', updateProgress);
//     xhr.addEventListener('load', startProgress);
//     xhr.open('GET', window.location.href);
//     xhr.send();
// });

$(document).ready(function () {
    var loaderContainer = $('<div id="loader-container"><div id="loader"><div id="loader-txt">Loading...</div></div></div>');
    var loader = $('#loader');
    var loaderTxt = $('#loader-txt');
    var content = $('.content');

    $('body').append(loaderContainer);

    var progressInterval;
    var loadingProgress = 0;
    var increment = 1;

    function updateProgress(event) {
        if (event.lengthComputable) {
            var percentComplete = (event.loaded / event.total) * 100;
            loadingProgress = percentComplete;
            loader.css('width', loadingProgress + '%');
            loaderTxt.text('Loading ' + Math.round(loadingProgress) + '%');
        }
    }

    function removeLoader() {
        loaderContainer.fadeOut(500, function () {
            $(this).remove();
            content.fadeIn();
        });
    }

    function startProgress() {
        progressInterval = setInterval(function () {
            loadingProgress += increment;
            loader.css('width', loadingProgress + '%');
            loaderTxt.text('Loading ' + Math.round(loadingProgress) + '%');

            if (loadingProgress >= 100) {
                clearInterval(progressInterval);
                removeLoader();
            }
        }, 100);
    }

    var loadingTimeout = setTimeout(function () {
        startProgress();
    }, 1000); // Adjust the timeout value as needed

    window.addEventListener('progress', updateProgress);
    window.addEventListener('load', function () {
        clearTimeout(loadingTimeout);
        removeLoader();
    });
});




// $(document).ready(function () {
//     $('body').append('<div style="" id="loader-container"><div id="loader"></div></div>');

//     var progressInterval;
//     var loadingProgress = 0;
//     var increment = 1;

//     function startProgress() {
//         progressInterval = setInterval(function () {
//             loadingProgress += increment;
//             $('#loader').css('width', loadingProgress + '%');

//             if (loadingProgress >= 100) {
//                 clearInterval(progressInterval);
//                 removeLoader();
//             }
//         }, 50); // Adjust the interval duration as desired
//     }

//     function removeLoader() {
//         $('#loader-container').fadeOut(500, function () {
//             $(this).remove();
//             $('.content').fadeIn();
//         });
//     }

//     $(window).on('load', function () {
//         setTimeout(startProgress, 2000); // Wait for page load plus two seconds
//     });
// });
