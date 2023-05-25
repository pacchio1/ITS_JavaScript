const URL = 'https://jsonplaceholder.typicode.com/posts';

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    //console.log(xhr.readyState);

    if (xhr.readyState == 4 && xhr.status == 200) {
        const Oggetto = JSON.parse(xhr.responseText);
        for (const posts of Oggetto) {
            const Titolo = document.createElement('h2');
            Titolo.textContent = posts.title;
            document.body.append(Titolo);
        }
    }
}
xhr.open("GET", URL);
xhr.send();
