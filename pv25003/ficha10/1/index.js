const numbers = document.querySelectorAll('.number');
const operator = document.querySelector('.operator');
const btn = document.querySelectorAll('.btn');
const display = document.querySelector('.display');

const add = (a, b) => a + b;
const mult = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;

btn[0].addEventListener('click', () => {
    let resultado;
    calc(operator).then(result => resultado = result).catch((error) => {console.log(error)}).finally(() => console.log(resultado));
});

function calc(operation) {
    return new Promise((resolve, reject) => {
        switch(operation.value.toLowerCase()) {
            case 'add': resolve(add(Number(numbers[0].value), Number(numbers[1].value))); break;
            case 'mult': resolve(mult(Number(numbers[0].value), Number(numbers[1].value))); break;
            case 'sub': resolve(sub(Number(numbers[0].value), Number(numbers[1].value))); break;
            case 'div': resolve(div(Number(numbers[0].value), Number(numbers[1].value))); break;
            default: reject("Erro! Operador invalido!"); break;
        }
    });
}