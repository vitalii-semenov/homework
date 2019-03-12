function toReverse(obj){
    let obj2 = {};
    for (key in obj){
        obj2[obj[key]] = key;
    }
    return obj2;
}
let someObj = {
    name: 'Jess',
    age: '25'
}
let res = toReverse(someObj);
console.log(res);