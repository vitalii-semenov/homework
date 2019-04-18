window.onload = function() {
    let gitRepo = document.querySelector('.git-repo');

    function getFromGit(url) {
        return new Promise((resolve, reject) => {

            let listRep = new XMLHttpRequest();
            
            listRep.addEventListener('readystatechange', function() {
                if (this.readyState != 4) return;
                if (this.status == 200) {
                    resolve(this.response);
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
            let chain = Promise.resolve();
            JSON.parse(response).forEach(elem => {
                chain = chain
                    .then(() => getFromGit(`https://api.github.com/repos/hillel-front-end/${elem.name}/languages`))
                    .then(JSON.parse)
                    .then(resolve => {
                        let langList = '';
                        for (lang in resolve){
                            langList += lang + ', ';
                        }
                        hillelRepos[elem.name] = {
                        default_branch: elem.default_branch,
                        last_upd: elem.updated_at,
                        languages: langList
                        }
                    })
            });
            chain.then(() => {
                renderRes(hillelRepos)
            })
        })
        .catch(err => {
            console.error(err);
        })

    function renderRes(obj) {
        gitRepo.style.display = 'block';
        for (let key1 in obj){
            let a = document.createElement('tr');
            a.innerHTML = `<td>${key1}</td>`
            for (let key2 in obj[key1]){
                let b = document.createElement('td');
                b.innerHTML = obj[key1][key2];
                a.appendChild(b);
            }
            gitRepo.appendChild(a);
        }
    }
}