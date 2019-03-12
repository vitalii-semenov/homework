var A = [],
    B = [],
    n = 20,
    minIndex = 0,
    maxIndex = 0;
for (let i = 0; i < n; i++){
    A[i] = Math.floor(Math.random()*50 +1);

}
var max = A[0],
    min = A[0];

for (let i = 0; i < A.length; i++){
    if (A[i] > max){
        max = A[i];
        maxIndex = i;
    } else if (A[i] < min) {
        min = A[i];
        minIndex = i;
    }
}
console.log(A);
console.log("Max: " + max);
console.log("Min: " + min);
A[maxIndex] = min;
A[minIndex] = max;
console.log(A);