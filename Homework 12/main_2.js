let block_1 = document.querySelector('.block-1'),
    block_2 = document.querySelector('.block-2'),
    block_3 = document.querySelector('.block-3'),
    blocks = document.querySelectorAll('div');
block_1.style.cssText = "width: 100px; height: 100px; border: 1px solid black; background-color: blue; position: absolute; top: 0; left: 0; transition: 1s;";
block_2.style.cssText = "width: 100px; height: 100px; border: 1px solid black; background-color: green; position: absolute; top: 100px; left: 0; transition: 1s;";
block_3.style.cssText = "width: 100px; height: 100px; border: 1px solid black; background-color: orange; position: absolute; top: 200px; left: 0; transition: 1s;";

function getRandColor(elemNumber){
    let red = Math.floor(Math.random()*256),
        green = Math.floor(Math.random()*256),
        blue = Math.floor(Math.random()*256);
        blocks[elemNumber].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
setInterval(() => {
    let randTop = Math.floor(Math.random()*(window.innerHeight - 100)),
        randleft = Math.floor(Math.random()*(document.documentElement.clientWidth - 100)),
        randElm = Math.floor(Math.random()*3);

    blocks[randElm].style.top = `${randTop}px`;
    blocks[randElm].style.left = `${randleft}px`;
    getRandColor(randElm);
}, 500);