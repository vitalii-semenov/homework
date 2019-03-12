let people = [
    {
        name: 'Vitalii',
        sex: 'male',
        birthday: '1990'
    },
    {
        name: 'Jessica',
        sex: 'female',
        birthday: '1995'
    },
    {
        name: 'Sergei',
        sex: 'male',
        birthday: '1993'
    },
    {
        name: 'Bill',
        sex: 'male',
        birthday: '1988'
    },
    {
        name: 'Kate',
        sex: 'female',
        birthday: '1998'
    }
]
function avrAge(arr){
    let avr = 0,
        year = new Date();
    for (let i = 0; i < arr.length; i++){
        avr += (year.getFullYear() - +arr[i].birthday);
    }
    return avr / arr.length;
}
function toSex(arr){
    let men = 0,
        women = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i].sex == 'male'){
            men++
        }
    }
    women = arr.length - men;
    if (men > women){
        return 'Male';
    } else if (men < women){
        return 'Female';
    } else {
        return 'Same';
    }
}
let res = avrAge(people);
console.log('Avarage age is: ', res);
res = toSex(people);
console.log('What sex is more? ', res);