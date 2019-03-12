// let a = +prompt("Введите a", "");
// let b = +prompt("Введите b >>> a", "");
// while (!isNaN(a) && !isNaN(b) && a < b){
//     if(a%2==0){
//         console.log(Math.pow(a,2));
//     }
//     a++;
// }
//---------------------------------------------
// let sum=0;
// for( let i = 0; i <= 250; i++){
//     let isPrime = true;
//     for(let j = 2; j < i; j++){
//         if(i % j == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime){
//         sum = sum + i;
//     }
// }
// console.log(sum);
//---------------------------------------------
// let n = +prompt("Write -n", "");
// let arr = new Array(n);
// for (i = 0; i < n; i++){
//     arr[i] = Math.floor(Math.random() * 66) - 20;
//     if ((arr[i] > 9) && (arr[i] < 100) || (arr[i] < -9) && (arr[i] > -100)) {
//         console.log(arr[i]);
//     }
// }
//---------------------------------------------
// let A = [],
//     B = [],
//     n = 20;
// for (let i = 0; i < n; i++){
//     A[i] = Math.floor(Math.random() * 100) - 50;  
//     B[i] = Math.floor(Math.random() * 100) - 50;  
//     for (let j = 0; j < A.length; j++){
//         if (A[j] == B[i]){
//             console.log(A[j]);
//         }
//     }  
// }
//---------------------------------------------
// let n = +prompt("Write -n", ""),
//     A = [],
//     isPrime;
// for (let i = 0; i < n; i++){
//     A[i] = Math.floor(Math.random() * 10 +1);
//     isPrime = true;
//     for (let j = 2; j < A[i]; j++){
//         if (A[i] % j == 0){
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime){
//         // console.log(A[i]);
//         A[i] = undefined;
//     }
// }
// console.log(A);
// ---------------------------------------------
// ---------------------------------------------
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.join('_'));
//---------------------------------------------
// document.write('<ul>');
// let arr = [6, 7, 2, 3, 5, 7];
// for (i = 0; i < arr.length; i++){
//     document.write('<li>' + arr.slice(i, i+1) + '</li>');
// }
// document.write('</ul>');
//---------------------------------------------
// let arr = [5, 6, 43, 3, 436, 7, 87, 76, 45, 3];
// let center = Math.ceil((arr.length / 2) - 1);
// if (arr.length%2){
//     console.log(arr.splice(center, 1));
// } else {
//     console.log(arr.splice(center, 2));
// }
//---------------------------------------------
// let A = [1,2,3];
// do {
//     var addNumber = prompt('Insert a number', '');
//     A.push(+addNumber);
// } while (addNumber != '&');
// console.log(A);
// ---------------------------------------------
// ---------------------------------------------
// let A = [],
//     N = 20;
// for (let i = 0; i < N; i++){
//     A[i] = Math.floor(Math.random() * 50 + 1);
// }
// console.log(A);
// let min = A[0];
// for (let i = 2; i < A.length; i+=2){
//     if (A[i] < min){
//         min = A[i];
//     }
// }
// console.log(min);
//---------------------------------------------
// let A = [],
//     N = 20;
// for (let i = 0; i < N; i++){
//     A[i] = Math.floor(Math.random() * 50 + 1);
// }
// console.log(A);
// let avg = 0;
//     current = 0;
// for (let i = 0; i < A.length; i++){
//     avg += A[i];
// }
// avg /= A.length;
// console.log(avg);
// for (let i = 0; i < A.length; i++){
//     current = (A[i] / avg) * 100;
//     console.log(current);
// }
//---------------------------------------------
// let A = [],
//     B = [],
//     N = 20,
//     count = 1;
// for (let i = 0; i < N; i++){
//     A[i] = Math.round(Math.random());
// }
// console.log(A);
// for (let i = 0; i < A.length; i++){
//     if (A[i] == A[i+1]){
//         count++;

//     } else {
//         A.splice(i - count + 1, count, count);
//         i-=count - 1;
//         count = 1;
//     }
// }
// console.log(A);
// ---------------------------------------------
// ---------------------------------------------
// function Sum(x, y){
//     return x + y;
// }
// console.log(Sum(5,25));
// ---------------------------------------------
// ---------------------------------------------
// function fofoFunction(){
//     let toBiggerArray = [];
//     for (let i = 0; i < arguments.length; i++){
//         toBiggerArray = toBiggerArray.concat(arguments[i]);
//     }
//     return toBiggerArray;
// }
// let res = fofoFunction([1,5,6], [5,2,7]);
// console.log(res);
// ---------------------------------------------
// ---------------------------------------------
 let obj = {
     x: 10,
     y: 20,
     inner: {
         x: 20,
         z: 30,
     },
     foo2: {
        k: 23,
        p: 13,
     }
 }
 function convert(obj){
     for (key in obj){
         if (typeof obj[key] == 'object'){
             for (innerK in obj[key]){
                obj[innerK] = obj[key][innerK];
             }
         } 
         delete obj[key];
     }
     return obj;
 }
 convert(obj);
 console.log(obj);