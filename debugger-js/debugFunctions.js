// Displayer for the debug menu
document.getElementById('debugButton').addEventListener('click', function () {
    const debugMenu = document.getElementById('debugMenu');
    const information = document.getElementById('information');

    if (debugMenu.style.display === 'none' || debugMenu.style.display === '') {
        debugMenu.style.display = 'block';
        information.style.display = 'block';
    } else {
        debugMenu.style.display = 'none';
        information.style.display = 'none';
    }
});

// Function to toggle all information displays
function toggleAllInfo() {
    const information = document.getElementById('information');

    if (information.style.display === 'block') {
        information.style.display = 'block';
        showScreenInfo();
        showWindowSizeInfo();
        showLocationInfo();
        showNavigatorInfo();
    } else {
        information.style.display = 'none';
    }

}

// Page Reload
function reloadPage() {
    location.reload();
}

// Clear Local storage
function clearLocalStorage() {
    localStorage.clear();
    alert('Local Storage has been cleared.');
}

// Clear Local storage With reload
function clearLocalStorageReload() {
    localStorage.clear();
    location.reload();
    alert('Local Storage has been cleared. Page will reload momentarily..');
}

// Function to clear the session
function clearSession() {
    sessionStorage.clear();
    alert('Session has been cleared.');
}

function clearSessionReload() {
    sessionStorage.clear();
    location.reload();
    alert('Session has been cleared. Page will reload momentarily..');
}

// Screen Info
function showScreenInfo() {
    const screenInfoDiv = document.getElementById('screenInfo');
    if (screenInfoDiv.style.display === 'none' || screenInfoDiv.style.display === '') {
        screenInfoDiv.style.display = 'block';
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
    } else {
        screenInfoDiv.style.display = 'none';
    }
}

// Window size info
function showWindowSizeInfo() {
    const windowSizeInfoDiv = document.getElementById('windowSizeInfo');

    if (windowSizeInfoDiv.style.display === 'none' || windowSizeInfoDiv.style.display === '') {
        windowSizeInfoDiv.style.display = 'block';
        windowSizeInfoDiv.innerHTML = `
            <p class="infoTitle">Window Size Info:</p>
            <br>
            <p>Inner Width: ${window.innerWidth}</p>
            <p>Inner Height: ${window.innerHeight}</p>
        `;
    } else {
        windowSizeInfoDiv.style.display = 'none';
    }
}


// Window Location Info
function showLocationInfo() {
    const locationInfoDiv = document.getElementById('winLocationInfo');
    if (locationInfoDiv.style.display === 'none' || locationInfoDiv.style.display === '') {
        locationInfoDiv.style.display = 'block';
        locationInfoDiv.innerHTML = `
            <p class="infoTitle">Window Location Info:</p>
            <br>
            <p>URL: ${window.location.href}</p>
            <p>Host: ${window.location.hostname}</p>
            <p>Path: ${window.location.pathname}</p>
            <p>Protocol: ${window.location.protocol}</p>
        `;
    } else {
        locationInfoDiv.style.display = 'none';
    }
}

// Navigator Info
function showNavigatorInfo() {
    const navigatorInfoDiv = document.getElementById('navigatorInfo');
    if (navigatorInfoDiv.style.display === 'none' || navigatorInfoDiv.style.display === '') {
        navigatorInfoDiv.style.display = 'block';
        navigatorInfoDiv.innerHTML = `
            <p class="infoTitle">Navigator Info:</p>
            <br>
            <p>Cookies Enabled: ${navigator.cookieEnabled}</p>
            <p>Platform: ${navigator.platform}</p>
            <p>Language: ${navigator.language}</p>
            <p>Online: ${navigator.onLine}</p>
            <p>Java Enabled: ${navigator.javaEnabled}</p>
        `;
    } else {
        navigatorInfoDiv.style.display = 'none';
    }
}

// Analog Clock
function showAnalogClock() {
    const analogClockDiv = document.getElementById('analogClock');
    if (analogClockDiv.style.display === 'none' || analogClockDiv.style.display === '') {
        analogClockDiv.style.display = 'block';
        clock()
    } else {
        analogClockDiv.style.display = 'none';
    }
}

var H = '....';
var H = H.split('');
var M = '.....';
var M = M.split('');
var S = '......';
var S = S.split('');
var Ypos = 0;
var Xpos = 0;
var Ybase = 8;
var Xbase = 8;
var dots = 12;

function clock() {
    var time = new Date();
    var secs = time.getSeconds();
    var sec = -1.57 + Math.PI * secs / 30;
    var mins = time.getMinutes();
    var min = -1.57 + Math.PI * mins / 30;
    var hr = time.getHours();
    var hrs = -1.57 + Math.PI * hr / 6 + Math.PI * parseInt(time.getMinutes()) / 360;
    for (i = 0; i < dots; ++i) {
        document.getElementById("dig" + (i + 1)).style.top = 0 - 15 + 60 * Math.sin(-0.49 + dots + i / 1.9).toString() + "px";
        document.getElementById("dig" + (i + 1)).style.left = 0 - 14 + 60 * Math.cos(-0.49 + dots + i / 1.9).toString() + "px";
    }
    for (i = 0; i < S.length; i++) {
        document.getElementById("sec" + (i + 1)).style.top = Ypos + i * Ybase * Math.sin(sec).toString() + "px";
        document.getElementById("sec" + (i + 1)).style.left = Xpos + i * Xbase * Math.cos(sec).toString() + "px";
    }
    for (i = 0; i < M.length; i++) {
        document.getElementById("min" + (i + 1)).style.top = Ypos + i * Ybase * Math.sin(min).toString() + "px";
        document.getElementById("min" + (i + 1)).style.left = Xpos + i * Xbase * Math.cos(min).toString() + "px";
    }
    for (i = 0; i < H.length; i++) {
        document.getElementById("hour" + (i + 1)).style.top = Ypos + i * Ybase * Math.sin(hrs).toString() + "px";
        document.getElementById("hour" + (i + 1)).style.left = Xpos + i * Xbase * Math.cos(hrs).toString() + "px";
    }
    setTimeout(clock, 50);
}

// Digital Clock
function showDigitalClock() {
    const digitalClockDiv = document.getElementById('digitalClock');
    if (digitalClockDiv.style.display === 'none' || digitalClockDiv.style.display === '') {
        digitalClockDiv.style.display = 'block';
        setInterval(myTimer, 1000);
        function myTimer() {
            const d = new Date();
            document.getElementById("digitalClock").innerHTML = d.toLocaleTimeString();
        }
    } else {
        digitalClockDiv.style.display = 'none';
    }
}
// Function to toggle the "Show Both Clocks" button
function toggleBothClocks() {
    const analogClockDiv = document.getElementById('analogClock');
    const digitalClockDiv = document.getElementById('digitalClock');

    if (analogClockDiv.style.display === 'none' || analogClockDiv.style.display === '') {
        analogClockDiv.style.display = 'block';
        digitalClockDiv.style.display = 'block';
        clock(); // Start the analog clock

        // Start the digital clock
        const digitalClockDisplay = document.getElementById('digitalClock');
        setInterval(myTimer, 1000);

        function myTimer() {
            const d = new Date();
            digitalClockDisplay.innerHTML = d.toLocaleTimeString();
        }
    } else {
        analogClockDiv.style.display = 'none';
        digitalClockDiv.style.display = 'none';
    }
}