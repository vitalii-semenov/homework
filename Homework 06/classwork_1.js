let i = -1;
function factory(arr){
    i++;
    if (i < arr.length){
        return arr[i];
    }
    return;
}
let step = factory([2,3,5,7,8]);
console.log(step);
step = factory([2,3,5,7,8]);
console.log(step);
step = factory([2,3,5,7,8]);
console.log(step);
step = factory([2,3,5,7,8]);
console.log(step);
step = factory([2,3,5,7,8]);
console.log(step);
step = factory([2,3,5,7,8]);
console.log(step);