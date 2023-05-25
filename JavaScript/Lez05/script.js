//oggetto Literal
const libro = {
    titol: 'Io,robor',
    prezzo: 16.5,
    pagine: 120,
    disponibile: true,
    autori: ['asimov'],
    copertina: {
        big: 'img/asimov.jpg',
        small: 'thump/asimov.jpg',
    }
};
const librojson = JSON.stringify(libro)
const libro2 = JSON.parse(librojson)
console.log(libro, librojson);
