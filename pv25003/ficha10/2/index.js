const numbers = document.querySelectorAll('.number');
const operator = document.querySelector('.operator');
const btn = document.querySelectorAll('.btn');

let resultados = getData();
renderResultsList();

btn[0].addEventListener('click', () => {
    calc(operator)
    .then(result => { 
        resultados.push(`${numbers[0].value} ${operator.value.toLowerCase()} ${numbers[1].value} = ${result}`); 
        renderResultsList(); 
        localStorage.setItem('resultados', JSON.stringify(resultados)); 
    })
    .catch((error) => {console.log(error)});
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

function renderResultsList() {
    let lista = document.querySelector('.display');
    lista.innerHTML = '';

    resultados.forEach((resultado) => {
        let li = document.createElement('li');
        li.innerHTML = resultado;
        lista.appendChild(li);
    })
}