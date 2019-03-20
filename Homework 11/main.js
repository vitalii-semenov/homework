//Try to commit -amend
function SuperMath(){

}
let p = new SuperMath(),
    obj = {
        X: 5,
        Y: 10,
        znak: '*'
    };
SuperMath.prototype.input = function(){
    do {
        obj.X = +prompt('Insert first number', '');
    } while (isNaN(obj.X))
    do {
        obj.Y = +prompt('Insert second number', '');
    } while (isNaN(obj.Y))
    do {
        obj.znak = prompt('Insert + || - || / || * || %', '');
    } while (!(obj.znak in this))
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
    let q = confirm(`Make an operation ${obj.znak} with ${obj.X} and ${obj.Y}`);
    if (q){
        return this[obj.znak]();
    } else if (!q){
        this.input();
        return this[obj.znak]();
    }
}
let res = p.check(obj);
console.log(res);