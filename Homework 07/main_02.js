function assignObjects(obj1, obj2, flag){
    if ( flag == undefined){
        flag = false;
    }
    for (key1 in obj1){
        obj2[key1] = ((!flag && !(key1 in obj2)) || flag) ? obj1[key1] : obj2[key1];
    }
    // Variant with IF
    //     if (flag === false && !(key1 in obj2)){
    //         obj2[key1] = obj1[key1];
    //     } else if (flag === true){
    //         obj2[key1] = obj1[key1];
    //     }
    // }
    return obj2;    
}
let res = assignObjects({x: 10, y: 20, z: 5, u: 25}, {x: 20, z: 30, h:4}, false);
console.log(res);