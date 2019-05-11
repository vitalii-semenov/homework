import * as sort from './sort.js';

document.addEventListener('DOMContentLoaded', () => {

    let body = document.querySelector('body');

    async function getGoods() {
        let req = await fetch('goods.json')
            .then(response => response.json());
        return req;
    }
    function toRender(obj) {
        body.innerHTML = `
            <table>
                <tbody></tbody>
            </table>
            <button id='byName'>Sort By Name</button>
            <button id='byPrice'>Sort By Price</button>
            `;
        let byName = document.querySelector('#byName');
        let byPrice = document.querySelector('#byPrice');
        let tbody = document.querySelector('tbody');
        for (let key in obj) {
            tbody.innerHTML += `
                <tr><td>${key}</td><td>${obj[key]}</td></tr>
            `;
        }
        byName.addEventListener('click', () => {
            getGoods()
                .then(resp => {
                    return sort.sortByName(resp);
                })
                .then((resp) => {
                    toRender(resp);
                })
        });
        byPrice.addEventListener('click', () => {
            getGoods()
                .then(resp => {
                    return sort.sortByPrice(resp);
                })
                .then((resp) => {
                    toRender(resp);
                })
        });
    }

    getGoods()
        .then(resp => {
            toRender(resp);
        })

})