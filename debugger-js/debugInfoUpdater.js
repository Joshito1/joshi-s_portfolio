// Function to refresh information when the screen rotates
function refreshOnRotate() {
    const information = document.getElementById('information');
    if (information.style.display === 'block') {
        updateScreenInfo();
        updateWindowSizeInfo();
        updateLocationInfo();
        updateNavigatorInfo();
    }
}

// Add an event listener for the window's resize event
window.addEventListener('resize', refreshOnRotate);

// Modify the existing functions to update text content
function updateScreenInfo() {
    const screenInfoDiv = document.getElementById('screenInfo');
    if (screenInfoDiv.style.display === 'block') {
        screenInfoDiv.innerHTML = `
            <p class="infoTitle">Screen Info:</p>
            <br>
            <p>Width: ${screen.width}</p>
            <p>Height: ${screen.height}</p>
            <p>Available Width: ${screen.availWidth}</p>
            <p>Available Height: ${screen.availHeight}</p>
            <p>Color Depth: ${screen.colorDepth}</p>
            <p>Pixel Depth: ${screen.pixelDepth}</p>
        `;
    }
}

function updateWindowSizeInfo() {
    const windowSizeInfoDiv = document.getElementById('windowSizeInfo');
    if (windowSizeInfoDiv.style.display === 'block') {
        windowSizeInfoDiv.innerHTML = `
            <p class="infoTitle">Window Size Info:</p>
            <br>
            <p>Inner Width: ${window.innerWidth}</p>
            <p>Inner Height: ${window.innerHeight}</p>
        `;
    }
}

function updateLocationInfo() {
    const locationInfoDiv = document.getElementById('winLocationInfo');
    if (locationInfoDiv.style.display === 'block') {
        locationInfoDiv.innerHTML = `
            <p class="infoTitle">Window Location Info:</p>
            <br>
            <p>URL: ${window.location.href}</p>
            <p>Host: ${window.location.hostname}</p>
            <p>Path: ${window.location.pathname}</p>
            <p>Protocol: ${window.location.protocol}</p>
        `;
    }
}

function updateNavigatorInfo() {
    const navigatorInfoDiv = document.getElementById('navigatorInfo');
    if (navigatorInfoDiv.style.display === 'block') {
        navigatorInfoDiv.innerHTML = `
            <p class="infoTitle">Navigator Info:</p>
            <br>
            <p>Cookies Enabled: ${navigator.cookieEnabled}</p>
            <p>Platform: ${navigator.platform}</p>
            <p>Language: ${navigator.language}</p>
            <p>Online: ${navigator.onLine}</p>
            <p>Java Enabled: ${navigator.javaEnabled}</p>
        `;
    }
}
