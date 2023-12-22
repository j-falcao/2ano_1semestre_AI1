const numbers = document.querySelectorAll('.number');
const operator = document.querySelector('.operator');
const btn = document.querySelectorAll('.btn');

let resultados = getData();
renderResultsList();

btn[0].addEventListener('click', () => {
    let resultado;
    calc(operator)
    .then(result => { 
        resultado = `${numbers[0].value} ${operator.value.toLowerCase()} ${numbers[1].value} = ${result}`;
    })
    .catch((error) => resultado = `${error.message}`)
    .finally(() => updateData(resultado));
});

btn[1].addEventListener('click', () => {
    localStorage.clear();
    resultados = getData();
    renderResultsList();
});

const add = (a, b) => a + b;
const mult = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;

function getData() {
    let resultados = JSON.parse(localStorage.getItem('resultados'));
    if (!Array.isArray(resultados)) resultados = [];
    return resultados;
}

function updateData(resultado) {
    resultados.push(resultado);
    renderResultsList(); 
    localStorage.setItem('resultados', JSON.stringify(resultados)); 
}

function calc(operation) {
    return new Promise((resolve, reject) => {
        switch(operation.value.toLowerCase()) {
            case 'add': resolve(add(Number(numbers[0].value), Number(numbers[1].value))); break;
            case 'mult': resolve(mult(Number(numbers[0].value), Number(numbers[1].value))); break;
            case 'sub': resolve(sub(Number(numbers[0].value), Number(numbers[1].value))); break;
            case 'div': resolve(div(Number(numbers[0].value), Number(numbers[1].value))); break;
            default: reject(new Error("Erro! Operador invalido!")); break;
        }
    });
}

function renderResultsList() {
    let lista = document.querySelector('.display');
    lista.innerHTML = '';

    resultados.forEach((resultado) => {
        let li = document.createElement('li');
        li.innerHTML = resultado;
        lista.appendChild(li);
    })
}