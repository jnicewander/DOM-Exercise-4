const number = () => document.getElementById('number').value;
const coin = () => document.getElementById('coin').value;

function displayCoins(number, coins) {
    const coinDisplay = document.getElementById('coinDisplay');
    for (let i = 0; i < number; i++) {
        coinDisplay.innerHTML += `<div class='coin ${coins}'>${coins}</div>`;
    };
};

document.getElementById('form').addEventListener('submit', event => {
    event.preventDefault();
    displayCoins(number(), coin());
});

document.getElementById('coinDisplay').addEventListener('click', event => {
    if(event.target !== event.currentTarget) {
        event.target.parentNode.removeChild(event.target);
    }
});

