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
if (maxIndex > minIndex){
    for (let i = 0; i < ((maxIndex - minIndex) - 1); i++){
        B[i] = A[minIndex + i + 1];
    }
} else if (maxIndex < minIndex){
    for (let i = 0; i < ((minIndex - maxIndex) - 1); i++){
        B[i] = A[maxIndex + i + 1];
    }
}
console.log(A);
console.log(B);
console.log("Max: " + max);
console.log("Min: " + min);
console.log(maxIndex);
console.log(minIndex);