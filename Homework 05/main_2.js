let res = 0;
function doMath(x, znak, y){
    if (znak == '+'){
        return res = x + y;
    } else if (znak == '-'){
        return res = x - y;
    } else if (znak == '*'){
        return res = x * y;
    } else if (znak == '/'){
        return res = x / y;
    } else if (znak == '%'){
        return res = x % y;
    } else if (znak == '^'){
        return res = Math.pow(x, y);
    }
}
doMath(3, '^', 10);
console.log(res);