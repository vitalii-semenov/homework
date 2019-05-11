import { getGoods } from './Request.js';

let body = document.querySelector('body');
body.innerHTML = `
    <button id='byName'>Sort By Name</button>
    <button id='byPrice'>Sort By Price</button>
    <table>
    </table>
`;
    
function toRender(obj) {
    let table = document.querySelector('table');
    table.innerHTML = '';
    for (let key in obj) {
        table.innerHTML += `
        <tr><td>${key}</td><td>${obj[key]}</td></tr>
        `;
    }
}
getGoods('goods.json')
        .then(resp => {
            toRender(resp);
        });
export { toRender };