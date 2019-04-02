window.onload = function(){    
let list = ['Create', 'Paste', 'Cut'],
    ul = document.querySelector('ul');

function rightClick(ev){
    ev.preventDefault();
    ul.style.top = ev.clientY + 'px';
    ul.style.left = ev.clientX + 'px';
    ul.classList.add('border-ul');
    ul.style.display = 'block';
    if (ul.childNodes.length === list.length){
        return;
    }
    for (let i = 0; i < list.length; i++){
        let li = document.createElement('li');
        li.classList.add('for-li', 'for-li:hover')
        li.innerHTML = list[i];
        li.addEventListener('mousedown', toChanheBgCollor);
        ul.appendChild(li);
    }
    document.addEventListener('mousedown', closeRightClick);
}
function toChanheBgCollor(ev){
    document.body.classList.toggle('bgCol');
}
function closeRightClick(ev){
    ul.style.display = 'none';

}
document.addEventListener('contextmenu', rightClick);
}