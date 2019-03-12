let Arr = [],
    N = 20,
    avr = 0;
for (let i = 0; i < N; i++){
    Arr[i] = Math.floor(Math.random() * 10);
    avr += Arr[i];
}
avr = avr / N;
console.log(Arr);
console.log('Arrvarage number ' + avr);
let min = Arr[0],
    max = Arr[0];
for (let i = 0; i < N; i++){
    if (Arr[i] < min){
        min = Arr[i];
    } else if (Arr[i] > max){
        max = Arr[i];
    }
}
let minus = max - min,
    moreThenAvr = '';
console.log('Min: ' + min);
console.log('Max: ' + max);
console.log('Max - min = ' + minus);
for (let i = 0; i < N; i++){
    if (Arr[i] > avr){
        // console.log('Number > avarage number: ' + Arr[i]);
        moreThenAvr += Arr[i] + '; ';
    }
}
console.log('Number > avarage number: ' + moreThenAvr);
let A = +prompt('Insert A: ', ''),
    B = +prompt('Insert B: ', ''),
    rangeIndex = '';
for (let i = 0; i < N; i++){
    if (((Arr[i] > A) && (Arr[i] < B)) || ((Arr[i] > B) && (Arr[i] < A))){
        rangeIndex += i + '; ';
    }
}
console.log('Index of element in a range from A to B: ' + rangeIndex);
for (let i = 0; i < Arr.length; i++){
    for (let j = i + 1; j < Arr.length; j++){
        if (Arr[i] == Arr[j]){
            Arr.splice(j, 1);
            j--;
        }
    }
}
console.log(Arr);