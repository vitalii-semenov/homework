function centerElements(){
    let centerArray = [];
    for (let i = 0; i < arguments.length; i++){
        let centerId = Math.floor(arguments[i].length / 2);
        if ((arguments[i].length %2) != 0) {
            centerArray = centerArray.concat(arguments[i].slice(centerId, centerId + 1));
        } else {
            centerArray = centerArray.concat(arguments[i].slice(centerId - 1, centerId + 1));        
        }
    }
    return centerArray;
}
let res = centerElements([1,2,3,4,5], [6,7,8,9,10,11]);
console.log('Middle elements', res);