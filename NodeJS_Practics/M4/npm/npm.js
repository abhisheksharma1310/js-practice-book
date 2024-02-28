const fetch = require('node-fetch');
console.clear();
//'https://api.github.com/users/github'

fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(json => {
        json.results.forEach(user => {
            console.log(user.name);
        });
    });


