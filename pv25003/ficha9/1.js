const numbers = document.querySelectorAll('.number');
const operator = document.querySelector('.operator');
const btn = document.querySelector('.btn');

const add = (a, b) => a + b;
const mult = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;

btn.addEventListener('click', () => {
    switch(operator.value) {
        case 'add': calc(add); break;
        case 'mult': calc(mult); break;
        case 'sub': calc(sub); break;
        case 'add': calc(div); break;
    }
});

function calc(operation) {
    return operation(Number(numbers[0].value), Number(numbers[1].value));
}