function doFunction(a, b, func){
    if (typeof b == 'function'){
        return b(a);
    } else if (typeof func != 'function'){
        return 'Error';
    }
    return func(a,b);
}
function sum(a, b){
    return a + b;
}
function div(a,b){
    return a / b;
}
function mul(a,b){
    return a * b;
}
function power(a,b){
    return Math.pow(a,b);
}
function factorial(a){
    if (a == 0){
        return 1;
    } else {
        return a * factorial(a - 1);
    }
}
let res = doFunction(5, 3, power);
console.log(res);