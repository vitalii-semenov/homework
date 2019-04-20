document.addEventListener('DOMContentLoaded', () => {

    //  Make function Request
    //-------------------------------------------------------
    function getFromGit(url) {
        return new Promise((resolve, reject) => {

            let listRep = new XMLHttpRequest();
            
            listRep.addEventListener('readystatechange', function() {
                if (this.readyState != 4) return;
                if (this.status == 200) {
                    resolve(JSON.parse(this.response));
                } 
                reject(this.status);
            })
            listRep.open('GET', url, true);
            listRep.send();

        })
    }
    
    //  Make with Async/Awayt
    // -------------------------------------------------------
    async function git() {
        clearData();
        let hillelRepos = {};
        let a = await fetch('https://api.github.com/orgs/hillel-front-end/repos');
        let b = await a.json();
        for (let elem of b){
                let b1 = await fetch(`https://api.github.com/repos/hillel-front-end/${elem.name}/languages`);
                let b2 = await b1.json();
                hillelRepos[elem.name] = {
                    default_branch: elem.default_branch,
                    last_upd: elem.updated_at,
                    languages: Object.keys(b2).join(', ')
                }
        }
        return renderRes(hillelRepos)
    }
    // -------------------------------------------------------

    //  Clear data
    // -------------------------------------------------------
    function clearData() {
        if (document.querySelector('table')){
            document.querySelector('body').removeChild(document.querySelector('table'));
        }
    }
    // -------------------------------------------------------

    //  Make with Promises
    // -------------------------------------------------------
    function res () {
        clearData();
        getFromGit('https://api.github.com/orgs/hillel-front-end/repos')
            .then(response => {
                let hillelRepos = {};
                let res = response.reduce((prev, elem) => {
                    return getFromGit(`https://api.github.com/repos/hillel-front-end/${elem.name}/languages`)
                        .then(resolve => {
                            let langList =  Object.keys(resolve).join(', ');
                            
                            hillelRepos[elem.name] = {
                                default_branch: elem.default_branch,
                                last_upd: elem.updated_at,
                                languages: langList
                            }
                        })
                    }, Promise.resolve());
                res.then(() => {
                    renderRes(hillelRepos)
                })
            })
            .catch(err => {
                console.error(err);
        })
    }
    //-------------------------------------------------------

    
    //  Rendering a table
    //-------------------------------------------------------
    function renderRes(obj) {
        let table = document.createElement('table'),
            tr = document.createElement('tr'),
            thName = document.createElement('th'),
            thBranch = document.createElement('th'),
            thLastUpdate = document.createElement('th'),
            thLanguages = document.createElement('th');
        thName.innerHTML = 'Repository name';
        thBranch.innerHTML = 'Default branch';
        thLastUpdate.innerHTML = 'Last update';
        thLanguages.innerHTML = 'Languages';
        tr.append(thName, thBranch, thLastUpdate, thLanguages);
        table.append(tr);

        for (let key1 in obj){
            let tr = document.createElement('tr'),
                tdName = document.createElement('td');
            tdName.append(key1);
            tr.append(tdName);

            for (let key2 in obj[key1]){
                let td = document.createElement('td');
                td.innerHTML = obj[key1][key2];
                tr.appendChild(td);
            }

            table.append(tr);
        }
        document.querySelector('body').append(table);
    }
    // -------------------------------------------------------

    //  Buttons
    // -------------------------------------------------------
    let button = document.createElement('button');
    button.innerHTML = 'Get Data';
    button.addEventListener('click', res);
    document.querySelector('body').append(button);

    let buttonAsync = document.createElement('button');
    buttonAsync.innerHTML = 'Get Data (Async/Await)';
    buttonAsync.addEventListener('click', git);
    document.querySelector('body').append(buttonAsync);
})