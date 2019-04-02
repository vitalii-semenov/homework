let inputRange = document.querySelector('.input-range'),
    inputRangeDisplay = document.querySelector('.input-range-display'),
    rangeInnerGreen = document.querySelector('.range-inner-green'),
    rangeInnerRed = document.querySelector('.range-inner-red'),
    rangeBlock = document.querySelector('.range-block'),
    innerText = document.querySelector('.innerText');

function displayInput(){
    inputRangeDisplay.value = inputRange.value;
}   
function moveInputRange(){
    inputRange.value = inputRangeDisplay.value;
}

function moveRange(){
    let percents = +inputRange.value,
        overPrice = 0;
    rangeInnerGreen.style.height = percents + '%';
    overPrice = ((percents < 20)? 0.02 * percents :
        (percents > 20 && percents < 50)? 0.04 * percents :
        (percents > 50 && percents < 75)? 0.06 * percents : 0.08 * percents);
    rangeInnerRed.style.height = overPrice + '%';
    innerText.innerText = (percents + overPrice).toFixed(2);
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

//Trying from graph to other
// function moveScale(ev){
//     rangeInnerGreen.style.height = ev.offsetY + 'px';
//     inputRangeDisplay.value =  Math.round(100 - ev.offsetY/2.5);
//     inputRange.value =  inputRangeDisplay.value;
// }

// rangeBlock.addEventListener('mousedown', moveScale);


// rangeBlock.addEventListener('mousedown', function(ev){
//     rangeBlock.addEventListener('mousemove', moveScale);
//     document.addEventListener('mouseup', function(ev){
//         rangeBlock.removeEventListener('mousemove', moveScale);
//     })
// });