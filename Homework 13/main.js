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
    let percents = +inputRange.value;

    rangeInnerGreen.style.height = percents + '%';

    overPrice = overPrise(percents);
    rangeInnerRed.style.height = overPrice + '%';
    innerText.innerText = (percents + overPrice).toFixed(2);
}
function overPrise(num){
    if(num < 20){
        num *= 0.02;
    } else if (num >20 && num < 50){
        num *= 0.04;
    } else if (num > 50 && num < 75){
        num *= 0.06;
    } else {
        num *= 0.08;
    }
    return num;
}

// From Range input to Text input and Graphic scale

inputRange.addEventListener('input', moveRange);
inputRange.addEventListener('input', displayInput);


// From Text input to Range input and Graphic scale

inputRangeDisplay.addEventListener('input', moveInputRange);
inputRangeDisplay.addEventListener('input', moveRange);