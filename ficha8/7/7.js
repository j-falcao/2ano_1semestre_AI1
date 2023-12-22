const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');

function calc(n1, n2, op){
    if(op === '/'){
        if(n2 === 0){ 
            console.log("zero division error!");
            return 'error';
        }
        return n1 / n2;
    }
    else if(op === '*') return n1 * n2;
    else{
        console.log('Invalid operator!');
        return 'error';
    } 
}

document.getElementById('mult').addEventListener('click', function() {
    document.getElementById('res').innerHTML = calc(Number(n1.value), Number(n2.value), '*');
});
document.getElementById('divi').addEventListener('click', function() {
    document.getElementById('res').innerHTML = calc(Number(n1.value), Number(n2.value), '/');
});