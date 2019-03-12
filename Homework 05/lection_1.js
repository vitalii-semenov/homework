//First exercise
// function toDisplay(Arr){
//     for (let i = 0; i < Arr.length; i++){
//         document.write(Arr[i] + '; ');
//     }
// }
// let Arr = [1, 5, 7, 12, 3, 8, 5];
// toDisplay(Arr);
//---------------------------------------------
//Second exersice
function fillArray(Arr){
    let lengthArray = +prompt('Input Arrays length', ''),
        rangeA = +prompt('Input range of numbers from A', ''),
        rangeB = +prompt('Input range of numbers from B', '');
    for (let i = 0; i < lengthArray; i++){
        Arr[i] = Math.floor(Math.random() * (rangeB - rangeA) + rangeA);
    }
}
let Arr = [];
fillArray(Arr);
console.log(Arr);