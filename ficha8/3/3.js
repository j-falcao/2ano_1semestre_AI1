const labels = document.querySelectorAll('label');
const divPaint = document.getElementById('div-paint');

for(let i = 0; i < labels.length; i++){
    labels[i].addEventListener('mouseover', function() {
        divPaint.style.backgroundColor = labels[i].innerHTML;
    });
    labels[i].addEventListener('mouseout', function() {
        divPaint.style.backgroundColor = ''; // Define a cor como vazia para remover a cor de fundo
    });
}