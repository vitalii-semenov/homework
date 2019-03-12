// First Exercise
//------------------------------------------
let countNumber = +prompt("Введите количество чисел Фибоначе: ", "");
let n1 = 0,
    n2 = 1,
    n3 = 0;
for (i = 0; i < countNumber; i++, n1 = n2, n2 = n3){
    console.log(n3 = n1 + n2);
}