const coins = {
    penny: 0,
    nickel: 0,
    dime: 0,
    quarter: 0,
    incrementCoins(number, coin) {
        coins[coin] += parseInt(number);
        console.log(coins);
    },
    decrementCoins(coin) {
        coins[coin] -= 1;
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

function calculateTotal() {
    let pennies = coins.penny * 0.01;
    let nickels = coins.nickel * 0.05;
    let dimes = coins.dime * 0.10;
    let quarters = coins.quarter * 0.25;
    return pennies + nickels + dimes + quarters;
}

function displayAmount() {
    let display = document.getElementById('total');
    display.innerText = "";
    display.append(`$ ${calculateTotal().toFixed(2)}`);
}

document.getElementById('form').addEventListener('submit', event => {
    event.preventDefault();
    displayCoins(number(), coin());
    coins.incrementCoins(number(), coin());
    displayAmount();
});

document.getElementById('coinDisplay').addEventListener('click', event => {
    if(event.target !== event.currentTarget) {
        event.target.parentNode.removeChild(event.target);
        coins.decrementCoins(event.target.classList[1]);
    }
    displayAmount();
});
