var A = [],
    B = [],
    n = 20;
for (let i = 0; i < n; i++){
    A[i] = Math.floor(Math.random()*50 +1);
    let isPrime = true;
    for (let j = 2; j < A[i]; j++){
        if (A[i]%j == 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime){
        B[B.length] = A[i];
    }
}
var max = A[0],
    min = A[0];

for (let i = 0; i < A.length; i++){
    if (A[i] > max){
        max = A[i];
    } else if (A[i] < min) {
        min = A[i];
    }
}
console.log(A);
console.log(B);
console.log("Max: " + max);
console.log("Min: " + min);