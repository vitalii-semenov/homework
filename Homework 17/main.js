window.onload = function(){
    
    let name = document.querySelector('.name'),
        afterName = document.querySelector('.afterName'),
        phone = document.querySelector('.phone'),
        sent = document.querySelector('.sent'),
        result = document.querySelector('.result'),
        formData = new FormData(document.querySelector('.form'));

    function request(){
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/registration', false);
        xhr.send(formData);
        result.innerText = xhr.status + ' ' + xhr.statusText;
    }
    
    function getName(ev){
        let arr = ev.target.value.split('');

        for (let i = 0; i <= arr.length; i++){
            if (!isNaN(arr[i])){
                afterName.style.display = 'inline-block';
                sent.disabled = true;
                ev.target.classList.add('errorName');
                result.innerText = null;
                return;
            } else {
                ev.target.classList.remove('errorName');
                afterName.style.display = 'none';
                sent.disabled = false;
                result.innerText = null;
            }
        }

            //  With Map doesn't work
        //
        // toName.value.split('').map((element, pos, arr) => {
        //     if (!isNaN(element)){
        //         console.log(pos)
        //         afterName.style.display = 'inline-block';
        //         sent.disabled = true;
        //         toName.classList.add('errorName');
        //         return;
        //     } else {
        //         console.log(pos)
        //         toName.classList.remove('errorName');
        //         afterName.style.display = 'none';
        //         sent.disabled = false;
        //     }
        // });
    }
    name.addEventListener('blur', getName);
    sent.addEventListener('click', request);
}