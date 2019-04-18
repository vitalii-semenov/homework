document.addEventListener('DOMContentLoaded', () => {

    let gitRepo = document.querySelector('.git-repo');

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
})