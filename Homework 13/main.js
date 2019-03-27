let inputRange = document.querySelector('.input-range'),
    inputRangeDisplay = document.querySelector('.input-range-display'),
    rangeInnerWhite = document.querySelector('.range-inner-white'),
    rangeInnerRed = document.querySelector('.range-inner-red'),
    rangeBlock = document.querySelector('.range-block'),
    innerText = document.querySelector('.innerText');

function displayInput(){
    inputRangeDisplay.value = inputRange.value;
}   
function moveRange(){
    let percents = +inputRange.value,
        overPrice = 0;
    rangeInnerWhite.style.height = (100 - percents) + '%';
    overPrice = ((percents < 20)? 0.05 * percents :
        (percents > 20 && percents < 50)? 0.1 * percents :
        (percents > 50 && percents < 75)? 0.15 * percents : 0.2 * percents);
    rangeInnerRed.style.height = overPrice + 'px';
    innerText.innerText = (percents + (overPrice / 2.5)).toFixed(2);
}
function moveInputRange(){
    inputRange.value = inputRangeDisplay.value;
}
function moveScale(ev){
    rangeInnerWhite.style.height = ev.offsetY + 'px';
    inputRangeDisplay.value =  Math.round(100 - ev.offsetY/2.5);
    inputRange.value =  inputRangeDisplay.value;
}


// From Range input to Text input and Graphic scale

inputRange.addEventListener('mouseup', moveRange);
inputRange.addEventListener('mouseup', displayInput);

inputRange.addEventListener('mousedown', function(ev){
    inputRange.addEventListener('mousemove', displayInput);
    inputRange.addEventListener('mousemove', moveRange);
    inputRange.addEventListener('mouseup', function(ev){
        inputRange.removeEventListener('mousemove', displayInput);        
    });
});


// From Text input to Range input and Graphic scale

inputRangeDisplay.addEventListener('keyup', moveInputRange);
inputRangeDisplay.addEventListener('keyup', moveRange);

// From Graphic scale to Text and Range input

rangeBlock.addEventListener('mousedown', moveScale);


rangeBlock.addEventListener('mousedown', function(ev){
    rangeBlock.addEventListener('mousemove', moveScale);
    document.addEventListener('mouseup', function(ev){
        rangeBlock.removeEventListener('mousemove', moveScale);
    })
});