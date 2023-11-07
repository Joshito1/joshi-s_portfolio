// Function to check if a specific tip has been seen
function isTipSeen(tipKey, tipPage) {
    // Use a unique key combining tipKey and tipPage to avoid conflicts on different pages
    return localStorage.getItem(`${tipPage}_${tipKey}`) === 'true';
}

// Function to mark a specific tip as seen
function markTipAsSeen(tipKey, tipPage) {
    // Use a unique key combining tipKey and tipPage to avoid conflicts on different pages
    localStorage.setItem(`${tipPage}_${tipKey}`, 'true');
}

// Function to get the current tipPage from the body's data attribute
function getCurrentTipPage() {
    const body = document.querySelector('body');
    return body.getAttribute('data-tip-page') || 'default'; // Use 'default' or a default page name if not specified
}

// Function to show a specific tip
function showTip(tipKey, customMessage) {
    const tipPage = getCurrentTipPage();
    if (!isTipSeen(tipKey, tipPage)) {
        showAndCreateNotification(customMessage);
        markTipAsSeen(tipKey, tipPage);
    }
}

function showAndCreateNotification(customMessage) {
    // Create and show the notification with the custom message
    const tipWrap = document.createElement('div');
    tipWrap.className = 'tips_Wrap';
    tipWrap.id = 'tip';

    const tipContain = document.createElement('div');
    tipContain.className = 'tips_container';

    const tipCloseX = document.createElement('div');
    tipCloseX.className = 'close';

    const lineOne = document.createElement('div');
    lineOne.className = 'line line-1';

    const lineTwo = document.createElement('div');
    lineTwo.className = 'line line-2';

    const tip = document.createElement('div');
    tip.className = 'tip';
    tip.style.fontSize = '15px';

    const tipP = document.createElement('p');

    const titleSpan = document.createElement('span');
    titleSpan.className = 'title';
    titleSpan.style.fontSize = '16px';
    titleSpan.style.fontWeight = 'bold';
    titleSpan.textContent = 'Quick Tip';

    const lineBreak = document.createElement('br');
    const tipText = document.createTextNode(customMessage);

    tipP.appendChild(titleSpan);
    tipP.appendChild(lineBreak);
    tipP.appendChild(tipText);

    tip.appendChild(tipP);
    tipCloseX.appendChild(lineOne);
    tipCloseX.appendChild(lineTwo);
    tipContain.appendChild(tipCloseX);
    tipContain.appendChild(tip);
    tipWrap.appendChild(tipContain);

    document.body.appendChild(tipWrap);

    // Close function
    tipCloseX.onclick = function () {
        slideOutAndRemoveNotification(tipWrap);
    };

    // Show the notification
    showNotification(tipWrap);
}

// Function to slide out and remove the notification (similar to previous code)
function slideOutAndRemoveNotification(notification) {
    // Slide out animation
    notification.classList.add('slide-out');

    // Remove the notification after the animation completes
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300); // Should match the animation duration (.3s)
}

function showNotification(notification) {
    // Delay before showing the notification (set delay in milliseconds)
    const delayBeforeShow = 3000; // delay before show

    // Show the notification after the delay
    setTimeout(() => {
        // Show the notification
        notification.style.display = 'flex';
        notification.classList.add('slide-in');

        // Remove the notification after a few seconds
        setTimeout(() => {
            slideOutAndRemoveNotification(notification);
        }, 15000); // adjust the timeout as needed
    }, delayBeforeShow);
}

// Get all the Images
const images = document.querySelectorAll('.lazy.enlarged');

// Add a click event listener to each image
images.forEach((image) => {
    image.addEventListener('click', () => {
        // Show "Tip 2" when an image is clicked
        showTip('tip2', 'Want to see more Renders? You can Swipe left or right on mobile. For Computers, You can use the arrow keys. You can also Use the next and right buttons.');
    });
});

// Call showTip with a specific key and custom message for each tip
showTip('tip', 'Want to go back at one point? Click the "Universal Navigation button" on the bottom right. (Blue Button with three lines)');