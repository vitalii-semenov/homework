window.onload = function(){

    let guy = document.querySelector('.guy');
    guy.style.transition = '0.4s';
    let guyObj = {
        height: guy.offsetHeight,
        width: guy.offsetWidth,
    }

    function jumpUp(){
            guy.style.top = guy.offsetTop - 100 + 'px';
            setTimeout(jumpDown, 500);
    }
    function jumpDown(){
        guy.style.top = guy.offsetTop + 100 + 'px';
    }
    function sitDown(){
            guyObj.top = guy.offsetTop;
            guyObj.left = guy.offsetLeft;

            guy.style.height = guyObj.height - guyObj.height * 40 / 100 + 'px';
            guy.style.width = guyObj.width + guyObj.width * 15 / 100 + 'px';
            guy.style.top = guyObj.top + guyObj.height * 40 / 100 + 'px';
            guy.style.left = guyObj.left - guyObj.width * 7.5 / 100 + 'px';
            setTimeout(sitUp, 500);
    }
    function sitUp(){
        guy.style.height = guyObj.height + 'px';
        guy.style.width = guyObj.width + 'px';
        guy.style.top = guyObj.top + 'px';
        guy.style.left = guyObj.left + 'px';

    }
    function left(){
            guy.style.left = guy.offsetLeft - 50 + 'px'
    }
    function up(){
            guy.style.top = guy.offsetTop - 50 + 'px'
    }
    function right(){
            guy.style.left = guy.offsetLeft + 50 + 'px'
    }
    function bottom(){
            guy.style.top = guy.offsetTop + 50 + 'px'
    }
    document.addEventListener('keydown', function(ev){
        if (ev.keyCode === 32){
            jumpUp(ev);
        } else if (ev.keyCode === 17){
            sitDown(ev);
        } else if (ev.keyCode === 37){
            left(ev);
        } else if (ev.keyCode === 38){
            up(ev);
        } else if (ev.keyCode === 39){
            right(ev);
        } else if (ev.keyCode === 40){
            bottom(ev);
        }
    })

}