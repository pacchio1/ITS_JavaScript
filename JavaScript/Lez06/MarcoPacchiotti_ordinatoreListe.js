function listTree(obj) {
    const ul = document.createElement('ul');

    for (let x in obj) {
        const li = document.createElement('li');
        li.innerText = x;

        if (Object.keys(obj[x]).length > 0) {
            li.appendChild(listTree(obj[x]));
        }

        ul.appendChild(li);
    }

    return ul;
}

let data = {
    "Fish": {
        "trout": {},
        "salmon": {}
    },

    "Tree": {
        "Huge": {
            "sequoia": {},
            "oak": {}
        },
        "Flowering": {
            "apple tree": {},
            "magnolia": {}
        }
    }
};

document.body.appendChild(listTree(data));
