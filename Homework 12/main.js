// First exersice
// -----------------------------------------------
let sumText = document.querySelector('#txtarea'),
    input = document.querySelectorAll('input');
function toTextArea(){
    let sum = '';
    for (let i = 0; i < input.length; i++){
            sum += input[i].value + ' ';
    }
    return sumText.value = sum;
}
let res = setInterval(toTextArea, 100);