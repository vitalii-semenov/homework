window.onload = function(){

    let cinemaItems = document.querySelectorAll('.cinema__item');
    
        // From Node.list to Array
    let cinemaItemsArr = Array.from(cinemaItems);

        // Clean empty data
    let filtredArr = cinemaItemsArr.filter((elem) => {
        return (elem.children[0].textContent != '') && (elem.children[1].textContent != '');
    });
    
        // Display films and cost
    let res = filtredArr.reduce((prev, elem) => {
        console.log(`
            Film: ${elem.children[0].textContent}, Cost: ${elem.children[1].textContent};
        `);
        return prev += parseInt(elem.children[1].textContent);
    }, 0);
    
        // Display total cost
    console.log(`
        Total cost = ${res}$;
    `);

    // Second exercise

    let match = 'hello';
    let arr = ["1234hello", "hellohd;lfmg", "45yu89egrhellowegojih", "dfhghello", ",bnsdklb"];
    
    let resIndex = arr.reduce((prev, elem, pos, arr) => {
        prev[pos] = elem.indexOf(match);
        return prev;
    }, []);
    console.log('Result of searching: ', resIndex);


}