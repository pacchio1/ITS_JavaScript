const URL = 'https://jsonplaceholder.typicode.com/posts';
fetch(URL)
    .then(response => response.json())
    .then(response => {
        //risposta.console.log(risposta)
        const ul = document.createElement('ul');
        for (const post of response) {
            const par = document.createElement('li');
            const anchor = document.createElement("a");
            anchor.setAttribute("href", '#');

            par.onclick = function () {
                fetch(URL + '/' + post.id)
                    .then(response => response.json)
                    .then(singolo => { console.log(singolo) })

            }
            anchor.textContent = post.title;
            par.appendChild(anchor);
            ul.append(par);
        };
        document.body.append(ul);
    }
    );

