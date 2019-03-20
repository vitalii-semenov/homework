function SuperMath(){

}
let p = new SuperMath(),
    obj = {
        X: 5,
        Y: 10,
        znak: '*'
    };
SuperMath.prototype.input = function(){
    obj.X = +prompt('Insert first number', '');
    obj.Y = +prompt('Insert second number', '');
    do {
        obj.znak = prompt('Insert + || - || / || * || %', '')
    }
    while (obj.znak == '/\+/' || obj.znak == '/\-/' || obj.znak == '/\//' || obj.znak == '/\*/' || obj.znak == '/\%/')
}
SuperMath.prototype['+'] = function(){
    return obj.X + obj.Y;
}
SuperMath.prototype['-'] = function(){
    return obj.X - obj.Y;
}
SuperMath.prototype['/'] = function(){
    return obj.X / obj.Y;
}
SuperMath.prototype['*'] = function(){
    return obj.X * obj.Y;
}
SuperMath.prototype['%'] = function(){
    return obj.X % obj.Y;
}
SuperMath.prototype.check = function(obj){
    let q = confirm('Make an exprassion?');
    if (q){
        return this[obj.znak]();
    } else if (!q){
        this.input();
        console.log(obj)
        return this[obj.znak]();
    }
}
let res = p.check(obj);
console.log(obj);

console.log(res);