const submitBtn = document.getElementById('btn-submit');
const input = document.getElementById('inputNumber');

submitBtn.addEventListener('click', function() {
    const number = getRandom();
    if(Number(input.value) == number){
        alert("Acertou");
        submitBtn.disabled = true;
    } 
    else{ 
        alert("errou" + number);
        input.value = '';
    }
});

function getRandom() {
    return Math.floor(Math.random() * 11);
}