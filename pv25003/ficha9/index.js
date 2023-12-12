const numbers = document.querySelectorAll('.number');
const operator = document.querySelector('.operator');
const btn = document.querySelector('.btn');
const display = document.querySelector('.display');

const add = (a, b) => a + b;
const mult = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;

btn.addEventListener('click', () => {
    let result = 0;
    switch(operator.value.toLowerCase()) {
        case 'add': 
            result = calc(add); 
        break;

        case 'mult': 
            result = calc(mult); 
        break;

        case 'sub': 
            result = calc(sub); 
        break;

        case 'add': 
            result = calc(div); 
        break;
    }

    display.innerHTML = "A calcular a sua operação em 3";
    let count = 2;
    const interval = setInterval(() => display.innerHTML = `A calcular a sua operação em ${count--}`, 1000);
    setTimeout(() => {clearInterval(interval); display.innerHTML = `O resultado e: ${result}`}, 3000);
});

function calc(operation) {
    return operation(Number(numbers[0].value), Number(numbers[1].value));
}