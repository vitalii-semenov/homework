let A = [],
    N = 21,
    mem;
for (let i = 0; i < N; i++){
    A[i] = Math.floor(Math.random() * 50);
}
console.log(A);
if (N%2){
    N -= 1;
}
for (i = 0; i < N; i += 2){
    // mem = +A.splice(i + 1, 1, A[i+1]);
    // A[i+1] = +A.splice(i, 1, A[i]);
    // A[i] = mem;
    mem = A[i+1];
    A[i+1] = A[i];
    A[i] = mem;
}
console.log(A);