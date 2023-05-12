console.log("Funziona");
 
let counter = 0;

const PIZZE = [
    {prezzo: function(){return Math.random()},nome:'Pizza margherita',foto:'https://www.smeg.com/binaries/content/gallery/smeg-italy/recipes/ricetta_pizza_napoletana_smeg.jpg/ricetta_pizza_napoletana_smeg.jpg/brx%3ApostcardDeskLarge'},
    {nome:'Pizza con fritte',foto:'https://www.smeg.com/binaries/content/gallery/smeg-italy/recipes/ricetta_pizza_napoletana_smeg.jpg/ricetta_pizza_napoletana_smeg.jpg/brx%3ApostcardDeskLarge'},
    {nome:'Pizza con funghi',foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1200px-Pizza-3007395.jpg'},
    {nome:'Pizza con patatine',foto:'https://www.petitchef.it/imgupl/recipe/pizza-con-le-patate-fritte--md-453965p703641.jpg'},
]
const spazioTitolo = document.getElementById("titolo")
const spaziofoto = document.getElementById("foto")
const btnBack = document.getElementById("btnBack")
const btnFwd = document.getElementById("btnFwd")
 
function display() {
 
    spazioTitolo.textContent = PIZZE[counter].nome;
    spaziofoto.src = PIZZE[counter].foto;
}
function increment() {
    counter++;
    console.log(counter)
    if (counter == PIZZE.length) {
        counter = 0;
    }
}
function decrement() {
    counter--;
    if (counter == -1) {
        counter = PIZZE.length -1;
    console.log(counter)
    }
}
document.body.onload = display 
 
btnBack.addEventListener('click',function() {
    decrement();
    display();
});
btnFwd.addEventListener('click',function() {
    increment();
    display();
});

for (const pizza of PIZZE) {
    console.log(pizza)
}
console.log(JSON.stringify(PIZZE));