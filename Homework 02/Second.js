// Second Exercise
//-------------------------------------------
let a, b, sum = 0, fak = 0;
do {
    a = +prompt("Введите а < b", "");
    b = +prompt("Введите b > a", "");
} while (b < a);
let h = +prompt("Введите шаг перебора", "");
for (; a < b; a += h){
    for (let i = 1, j = 2; j <= a; j++, i = fak){
        fak = i * j
    }
    sum += fak;
}
console.log(sum);