document.addEventListener('DOMContentLoaded', () => {

    class Hamburger {
        constructor(size, stuff) {
            this[size.name] = size;
            this[stuff.name] = stuff;
        }
        //  Question - Why ['price'] only work in ''????
        calculateCalories() {
            let sum = 0;
            for (let key in this) {
                sum += this[key]['calories'];
            }
            return sum;
        }
        calculatePrice() {
            let sum = 0;
            for (let key in this) {
                sum += this[key]['price'];
            }
            return sum;
        }
        addTopping(topping) {
            this[topping.name] = topping;
        }
        static get SIZE_SMALL() {
            return {
                name: 'SIZE_SMALL',
                price: 50,
                calories: 20
            };
        }
        static get SIZE_BIG() {
            return {
                name: 'SIZE_BIG',
                price: 100,
                calories: 40
            };
        }
        static get STUFFING_CHEESE() {
            return {
                name: 'STUFFING_CHEESE',
                price: 10,
                calories: 20
            }
        }
        static get STUFFING_SALAD() {
            return {
                name: 'STUFFING_SALAD',
                price: 20,
                calories: 5
             }
        }
        static get STUFFING_POTATOE() {
            return {
                name: 'STUFFING_POTATOE',
                price: 15,
                calories: 10
             }
        }
        static get TOPPING_SAUCE() {
            return {
                name: 'TOPPING_SAUCE',
                price: 15,
                calories: 0
             }
        }
        static get TOPPING_MAYO() {
            return {
                name: 'TOPPING_MAYO',
                price: 20,
                calories: 5
             }
        }

    }

    let small = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
    console.log(small)
    small.addTopping(Hamburger.TOPPING_SAUCE);
    console.log(small)
    console.log('Price with sauce: ' + small.calculatePrice());

})