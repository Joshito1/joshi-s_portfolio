// Function to check if the pop-up has already been shown during the visit
function isPopUpShown() {
    return sessionStorage.getItem('popUpShown') === 'true';
}

// Function to set the flag indicating that the pop-up has been shown
function setPopUpShown() {
    sessionStorage.setItem('popUpShown', 'true');
}

// Function to show the pop-up
function showPopUp() {
    var popUp = document.getElementById('popup');
    popUp.style.display = 'flex';
    setPopUpShown();
}

// Function to close the pop-up
function closePopUp() {
    var popUp = document.getElementById('popup');
    popUp.style.display = 'none';
}

// Check if the pop-up should be shown or not
if (!isPopUpShown()) {
    showPopUp();
}

// Add an event listener to the close button
var closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click', closePopUp);
