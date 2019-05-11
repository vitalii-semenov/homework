export const sortByName = function(obj) {
    let newObj = {};
    Object.keys(obj).sort().forEach(function(key) {
        newObj[key] = obj[key];
      });
    return newObj;
}

export const sortByPrice = function(obj) {
    let newObj = {};
    Object.values(obj).sort().forEach(function(value) {
        for (let key in obj) {
            if (obj[key] === value) {
                newObj[key] = value;
            }
        }
      });
    return newObj;
}
