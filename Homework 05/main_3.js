function delChar(str,arr){
    let strToArr = str.split('');
    console.log(strToArr);
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < strToArr.length; j++){
            if (arr[i] == strToArr[j]){
                strToArr.splice(j, 1);
                j--;
            }
        }
    }
    return res = strToArr.join('');
}
let res;
delChar('Hello world', ['l', 'd']);
console.log(res);
