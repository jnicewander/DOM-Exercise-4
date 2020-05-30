const bankAccount = [
    {
        name: 'penny',
        qty: 0,
        mutiplier: 0.01
    },
    {
        name: 'nickel',
        qty: 0,
        mutiplier: 0.05
    },
    {
        name: 'dime',
        qty: 0,
        mutiplier: 0.10
    },
    {
        name: 'quarter',
        qty: 0,
        mutiplier: 0.25
    }
];

function incrementCoins(number, coin) {
    bankAccount.forEach(obj => {
        if(obj.name === coin) {
            obj.qty += parseInt(number);
        }
    });
    console.log(bankAccount);
}

function decrementCoins(coin) {
    bankAccount.forEach(obj => {
        if(obj.name === coin) {
            obj.qty -= 1;
        }
    });
    console.log(bankAccount);
}


const number = () => document.getElementById('number').value;
const coin = () => document.getElementById('coin').value;

function displayCoins(number, coin) {
    const coinDisplay = document.getElementById('coinDisplay');
    for (let i = 0; i < number; i++) {
        coinDisplay.innerHTML += `<div class='coin ${coin}'>${coin}</div>`;
    };
};

function calculateTotal(arr) {
    let total = 0;
    arr.forEach(obj => {
        total += obj.qty * obj.mutiplier
    })

    return total;
}

function displayAmount() {
    let display = document.getElementById('total');
    display.innerText = "";
    display.append(`$ ${calculateTotal(bankAccount).toFixed(2)}`);
}

document.getElementById('form').addEventListener('submit', event => {
    event.preventDefault();
    displayCoins(number(), coin());
    incrementCoins(number(), coin());
    displayAmount();
});

document.getElementById('coinDisplay').addEventListener('click', event => {
    if(event.target !== event.currentTarget) {
        event.target.parentNode.removeChild(event.target);
        decrementCoins(event.target.classList[1]);
    }
    displayAmount();
});
