window.onload = function(){

let guy = document.querySelector('.guy');
guy.style.transition = '0.4s';

function jumpUp(ev){
    if (ev.keyCode === 32){
        guy.style.top = guy.offsetTop - 100 + 'px';
        setTimeout(jumpDown, 500);
    }
}
function jumpDown(ev){
    guy.style.top = guy.offsetTop + 100 + 'px';
}
function sitDown(ev){
    if (ev.keyCode === 17){
        guy.style.height = guy.offsetHeight - 40 + 'px';
        guy.style.top = guy.offsetTop + 40 + 'px';
        guy.style.width = guy.offsetWidth + 15 + 'px';
        guy.style.left = guy.offsetLeft - 7.5 + 'px';
        setTimeout(sitUp, 500);
    }
}
function sitUp(ev){
    guy.style.height = guy.offsetHeight + 40 + 'px';
    guy.style.top = guy.offsetTop - 40 + 'px';
    guy.style.width = guy.offsetWidth - 15 + 'px';
    guy.style.left = guy.offsetLeft + 6.5 + 'px';
}
function left(ev){
    if (ev.keyCode === 37){
        guy.style.left = guy.offsetLeft - 50 + 'px'
    }
}
function up(ev){
    if (ev.keyCode === 38){
        guy.style.top = guy.offsetTop - 50 + 'px'
    }
}
function right(ev){
    if (ev.keyCode === 39){
        guy.style.left = guy.offsetLeft + 50 + 'px'
    }
}
function bottom(ev){
    if (ev.keyCode === 40){
        guy.style.top = guy.offsetTop + 50 + 'px'
    }
}
document.addEventListener('keydown', function(ev){
    jumpUp(ev);
    sitDown(ev);
    left(ev);
    up(ev);
    right(ev);
    bottom(ev);
})


//Contextmenu

let list = ['Jump', 'Remove', 'Change collor'],
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
        li.classList.add('for-li', 'for-li:hover');
        li.innerHTML = list[i];
        ul.appendChild(li);
    }
    ul.children[0].addEventListener('mousedown', function(){
        guy.style.top = guy.offsetTop - 100 + 'px';
        setTimeout(jumpDown, 500);
    });
    ul.children[1].addEventListener('mousedown', toHide);
    ul.children[2].addEventListener('mousedown', toChanheBgCollor);

    document.addEventListener('mousedown', closeRightClick);
}
function toChanheBgCollor(ev){
    guy.classList.toggle('bgCol');
}
function toHide(ev){
    guy.style.display = 'none';
}
function closeRightClick(ev){
    ul.style.display = 'none';

}
guy.addEventListener('contextmenu', rightClick);

}