Array.prototype.myPush =  function(){
    for(let i = 0; i < arguments.length; i++){
        this[this.length] = arguments[i];
    }
}
String.prototype.mySplit = function(s){
        let arr = [],
        someStr = '';
    for (i = 0; i < this.length; i++){
        if (this[i] != s){
            someStr += this[i];
        } else if (this[i] == s){
            arr[arr.length] = someStr;
            someStr = '';
        }
    }
    arr[arr.length] = someStr;
    return arr;
}
Array.prototype.myJoin = function(s){
    let toStr = '';
    for (let i = 0; i < this.length; i++){
        toStr += this[i] + s;
    }
    return toStr;
}
Array.prototype.mySplice = function(){
    let a = arguments[0],
        b = arguments[1],
        B = [];
    for (let i = a; i < this.length; i++){
        B[B.length] = this[i];
    }
    this.length = a;
    for (let j = 2; j < arguments.length; j++){
        this[this.length] = arguments[j];
    }
    for (let k = b; k < B.length; k++){
        this[this.length] = B[k];
    }
    return this;
}
Array.prototype.mySlice = function(a, b){
    let A = [];
    for (let i = a; i < b; i++){
        A[A.length] = this[i];
    }
    return A;
}
Array.prototype.myReverse = function(){
    let A = [];
    for (let i = this.length-1; i >= 0; i--){
        A[A.length] = this[i];
    }
    for (let j = 0; j < A.length; j++){
        this[j] = A[j];
    }
}
Array.prototype.myConcat = function(){
    let n = arguments.length,
        A = [];
    for (let i = 0; i < this.length; i++){
        A[A.length] = this[i];
    }
    for (let j = 0; j < n; j++){
        if (typeof arguments[j] === 'object'){
            for(let k = 0; k < arguments[j].length; k++){
                A[A.length] = arguments[j][k];
            }
        } else {
            A[A.length] = arguments[j];
        }
    }
    return A;
}
Array.prototype.myIndexOf = function(element, index){
    if (index === undefined){
        index = 0;
    }
    for (let i = index; i < this.length; i++){
        if(this[i] === element){
            return i;
        } else {
            continue;
        }
    }
    return -1;
}
Array.prototype.mySort = function(){
    let changeElement;
    for (let i = 0; i < this.length; i++){
        for(let j = i + 1; j < this.length; j++){
            if(this[i] > this[j]){
                changeElement = this[i];
                this[i] = this[j];
                this[j] = changeElement;
            }
        }
    }
}

let arr = [1,2,3,4,5],
    arr2 = [125,21,23,51,24],
    arr3 = [1,2,3,4,5],
    arr4 = [2,5,3,4],
    str = 'some text for example',
    toArr = [];

arr.myPush(6);
arr.myPush('asfasf');
let toStr = arr.myJoin('; ');
toArr = str.mySplit(' ');
arr2.mySplice(2, 0, 'GG','FFF');
let sli = arr.mySlice(2, 5);
arr3.myReverse();
let tryConcat = arr.myConcat([55,66,77], 'AAGGGnndfn');
let tryIndexOf = arr.myIndexOf(1252);
arr4.mySort();

console.log(arr);
console.log(toStr);
console.log(toArr);
console.log(arr2);
console.log(sli);
console.log(arr3);
console.log(tryConcat);
console.log(tryIndexOf);
console.log(arr4);