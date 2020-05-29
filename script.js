const coins = {
    penny: 0,
    nickel: 0,
    dime: 0,
    quarter: 0,
    incrementCoins(number, coin) {
        coins[coin] += parseInt(number);
        console.log(coins);
    }
}

const number = () => document.getElementById('number').value;
const coin = () => document.getElementById('coin').value;

function displayCoins(number, coin) {
    const coinDisplay = document.getElementById('coinDisplay');
    for (let i = 0; i < number; i++) {
        coinDisplay.innerHTML += `<div class='coin ${coin}'>${coin}</div>`;
    };
};

document.getElementById('form').addEventListener('submit', event => {
    event.preventDefault();
    displayCoins(number(), coin());
    coins.incrementCoins(number(), coin());
});

document.getElementById('coinDisplay').addEventListener('click', event => {
    if(event.target !== event.currentTarget) {
        event.target.parentNode.removeChild(event.target);
    }
});
