function inArray(string, arr){
    for (let i = 0; i < arr.length; i++){
        if (string == arr[i]){
            return true;
        }
    }
    return false;
}
let res = inArray('hello', ['some', 'text', 'like', 'hello', 'world']);
console.log(res);