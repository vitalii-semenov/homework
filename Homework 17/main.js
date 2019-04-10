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

    //  Exercise 2
    function getReq(){
        let req1 = new XMLHttpRequest(),
            req2 = new XMLHttpRequest();
        req1.open('GET' , 'data.json', false);
        req2.open('GET' , 'data2.json', false);

        req1.send();
        req2.send();

        arr1 = JSON.parse(req1.responseText);
        arr2 = JSON.parse(req2.responseText);
        for (key in arr1){
            for (key2 in arr2){
                arr1[key] = arr1[key].concat(arr2[key2]);
            }
        }
        return arr1;
    }
    let sumArr = getReq();
    console.log(sumArr);
    //------------------------------------------------------------

    function getName(ev){
        let req = ev.target.value.split('');
        result.innerText = null;

        for (let i = 0; i <= req.length; i++){
            if (!isNaN(req[i])){
                afterName.style.display = 'inline-block';
                sent.disabled = true;
                ev.target.classList.add('errorName');
                return;
            } else {
                ev.target.classList.remove('errorName');
                afterName.style.display = 'none';
                sent.disabled = false;
            }
        }

            //  With Map doesn't work
        //
        // toName.value.split('').map((element, pos, req) => {
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