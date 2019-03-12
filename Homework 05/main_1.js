//----------------------------------------------------------------
//Exersice 1-a
//----------------------------------------------------------------
function newArray(Arr){
    for (let i = 0; i < Arr.length; i++){
        Arr[i] = Math.floor(Math.random() * 20);
    }
}
let Arr = new Array(20);
newArray(Arr);
console.log(Arr);
//----------------------------------------------------------------
//Ecersice 1-b
//----------------------------------------------------------------
let Arr1 = [1,'dsd',5,6,7, 10],
    Arr2 = [2,4,1,1,'ss',5,16],
    sum1 = 0,
    sum2 = 0;

//Random numbers
//----------------------------------------------------------------
//     Arr1 = new Array(10),
//     Arr2 = new Array(10);
// newArray(Arr1);
// newArray(Arr2);

function sumItems(Arr1, Arr2){
    for (let i = 0; i < Arr1.length || i < Arr2.length; i++){
        if ((typeof Arr1[i]) == 'number'){
            sum1 += Arr1[i];
        }
        if ((typeof Arr2[i]) == 'number'){
            sum2 += Arr2[i];
        }
    }
    if (sum1 > sum2){
        return Arr1;
    } else if (sum1 < sum2){
        return Arr2;
    } else {
        return 'Both';
    }
}
let res = sumItems(Arr1, Arr2);
console.log(res);