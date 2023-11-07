// Create indicators for buttons
const indicatorButtons = document.querySelectorAll('.toggle-indicator-button');

indicatorButtons.forEach((button) => {
    const indicator = document.createElement('span');
    indicator.classList.add('indicator');
    button.appendChild(indicator);
});

// Toggle indicators
document.getElementById('debugMenu').addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('toggle-indicator-button')) {
        const indicator = target.querySelector('.indicator');

        if (indicator.classList.contains('on')) {
            indicator.classList.remove('on');
        } else {
            indicator.classList.add('on');
        }
    }
});
