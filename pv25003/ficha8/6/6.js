const submitBtn = document.getElementById('btn-submit');
const input = document.getElementById('inputNumber');
const number = getRandom();
console.log(number);

submitBtn.addEventListener('click', function() {
    if(Number(input.value) < number){
        alert("Muito baixo");
    } 
    else if(Number(input.value) > number){ 
        alert("Muito alto");
        input.value = '';
    }
    else{
        alert('Acertou');
        submitBtn.disabled = true;
    }
});

function getRandom() {
    return Math.floor(Math.random() * 101);
}