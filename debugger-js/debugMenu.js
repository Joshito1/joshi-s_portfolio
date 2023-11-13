// Create the HTML structure for the debug menu
function createDebugMenuStructure() {
    const debugMenuContainer = document.createElement('div');
    debugMenuContainer.id = 'debugMenuContainer';

    const debugMenu = document.createElement('div');
    debugMenu.id = 'debugMenu';

    debugMenu.innerHTML = `
    <p style="font-size: xx-large; margin-bottom: 10px;">Debug mode:</p>
    <button onclick="reloadPage()">Reload Page</button>
    <p>Web browser storage:</p>
    <button class="toggle-indicator-button" onclick="showWebStorage()">Show Web Storage</button>
    <br>
    <button onclick="clearLocalStorage()">Clear Local Storage</button>
    <br>
    <button onclick="clearLocalStorageReload()">Clear Local Storage &
                Reload</button>
    <br>
    <button onclick="clearSession()">Clear Session Storage</button>
    <br>
    <button onclick="clearSessionReload()">Clear Session Storage & Reload</button>
    <br>
    <button class="toggle-indicator-button" onclick="toggleAllInfo()" style="margin-top: 2em;">Toggle All
                Info</button>
    <p>Screen Info:</p>
    <button class="toggle-indicator-button" onclick="showScreenInfo()">Show Screen Info</button>
    <p>Window Size Info:</p>
    <button class="toggle-indicator-button" onclick="showWindowSizeInfo()">Show Window Size Info</button>
    <p>Location Info:</p>
    <button class="toggle-indicator-button" onclick="showLocationInfo()">Show Window Location Info</button>
    <p>Navigator Info:</p>
    <button class="toggle-indicator-button" onclick="showNavigatorInfo()">Show Navigator Info</button>
    <p>Clocks:</p>
    <button id="bothClocksButton" class="toggle-indicator-button" onclick="toggleBothClocks()">Show Both Clocks</button>
    <br>
    <button class="toggle-indicator-button" onclick="showAnalogClock()">Show Analog Clock</button>
    <button class="toggle-indicator-button" onclick="showDigitalClock()">Show Digital Clock</button>
    `;

    const information = document.createElement('div');
    information.id = 'information';
    information.style.display = 'none';

    information.innerHTML = `
    <div id="webStorageInfo"></div>
    <hr>
    <div id="screenInfo"></div>
    <hr>
    <div id="windowSizeInfo"></div>
    <hr>
    <div id="winLocationInfo"></div>
    <hr>
    <div id="navigatorInfo"></div>
    <hr>
    <div id="clocksContainer">
        <div class="clocks" id="analogClock" style="display: none;">
            <div class="clock">
                <div id="dig1" class="dig" style="top: -49.823px; left: 5.6814px;">1</div>
                <div id="dig2" class="dig" style="top: -35.2232px; left: 20.5112px;">2</div>
                <div id="dig3" class="dig" style="top: -15.1496px; left: 25.9997px;">3</div>
                <div id="dig4" class="dig" style="top: 4.96459px; left: 20.6614px;">4</div>
                <div id="dig5" class="dig" style="top: 19.6749px; left: 5.94125px;">5</div>
                <div id="dig6" class="dig" style="top: 24.9996px; left: -14.1765px;">6</div>
                <div id="dig7" class="dig" style="top: 19.4976px; left: -34.2464px;">7</div>
                <div id="dig8" class="dig" style="top: 4.65796px; left: -48.8363px;">8</div>
                <div id="dig9" class="dig" style="top: -15.5025px; left: -53.9968px;">9</div>
                <div id="dig10" class="dig" style="top: -35.527px; left: -48.3314px;">10</div>
                <div id="dig11" class="dig" style="top: -49.9953px; left: -33.3734px;">11</div>
                <div id="dig12" class="dig" style="top: -54.9914px; left: -13.1715px;">12</div>

                <div id="hour1" class="hour" style="top: 0px; left: 0px;"></div>
                <div id="hour2" class="hour" style="top: -3.31175px; left: 7.28233px;"></div>
                <div id="hour3" class="hour" style="top: -6.6235px; left: 14.5647px;"></div>
                <div id="hour4" class="hour" style="top: -9.93524px; left: 21.847px;"></div>

                <div id="min1" class="min" style="top: 0px; left: 0px;"></div>
                <div id="min2" class="min" style="top: -3.24807px; left: 7.31095px;"></div>
                <div id="min3" class="min" style="top: -6.49614px; left: 14.6219px;"></div>
                <div id="min4" class="min" style="top: -9.74422px; left: 21.9329px;"></div>
                <div id="min5" class="min" style="top: -12.9923px; left: 29.2438px;"></div>

                <div id="sec1" class="sec" style="top: 0px; left: 0px;"></div>
                <div id="sec2" class="sec" style="top: 0.829892px; left: -7.95684px;"></div>
                <div id="sec3" class="sec" style="top: 1.65978px; left: -15.9137px;"></div>
                <div id="sec4" class="sec" style="top: 2.48968px; left: -23.8705px;"></div>
                <div id="sec5" class="sec" style="top: 3.31957px; left: -31.8274px;"></div>
                <div id="sec6" class="sec" style="top: 4.14946px; left: -39.7842px;"></div>
            </div>
        </div>
        <div class="clocks" id="digitalClock" style="display: none;">Loading..</div>
    </div>
    `;

    debugMenuContainer.appendChild(debugMenu);
    debugMenuContainer.appendChild(information);
    document.body.appendChild(debugMenuContainer);
}

createDebugMenuStructure();
