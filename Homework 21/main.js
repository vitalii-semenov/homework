document.addEventListener('DOMContentLoaded', () => {
    //  Homework 21 Part 1
    // ---------------------------------------
    let someObj = {
        a: 10,
        b: 25,
        c: {
            h: 30,
            j: 5
        }
    }

    function getSum() {
        let sum = 0;
        for (let key in this){
            if(typeof this[key] === 'number') {
                sum += this[key]
            } else if (typeof this[key] === 'object') {
                sum += getSum.call(this[key]);
            }
        }
        return sum;
    }

    console.log(`Sum of numbers in object: ${getSum.call(someObj)}`);
 
    //  Homework 21 Part 2
    // ---------------------------------------
    let characters = [
        { 'name': 'barney', 'age': 36 },
        { 'name': 'fred', 'age': 40 }
    ];

    function pluck(arr, key) {
        let res = arr.map(elem => {
            return elem[key]
        })
        return res;
    }

    console.log(pluck(characters, 'name'));

})