import { toRender } from './Render.js';
import { getGoods } from './Request.js';
import * as sort from './Sort.js';

let byName = document.querySelector('#byName');
let byPrice = document.querySelector('#byPrice');

const Event = function() {
    byName.addEventListener('click', () => {
        getGoods('goods.json')
            .then(resp => {
                return sort.sortByName(resp);
            })
            .then(resp => {
                toRender(resp);
            });
    });
    byPrice.addEventListener('click', () => {
        getGoods('goods.json')
            .then(resp => {
                return sort.sortByPrice(resp);
            })
            .then(resp => {
                toRender(resp);
            });
    });
}
export { Event };
