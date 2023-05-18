/*const titoli = [];
titoli.push("io, robot");
let altrilibri = ['i malavoglia', 'i promessi sposi'];
let tutti = [...titoli, ...altrilibri];
for (let index = 0; index < tutti.length; index++) {
    const element = tutti[index];
    console.log("", element);

}
for (const titolo of titoli) {
    console.log(titolo)
}
tutti
    .filter(t => t.startsWith("i"))
    .forEach(t => console.log(t));*/


const auto = {
    marca: "fiat",
    modello: "punto",
    stampa: function () {
        return this.cilindrata + ' ' + this.marca + ' ' + this.modello
    }
}
auto.cilindrata = 1100;
console.info(auto.stampa())
class Auto {
    constructor(marca, modello) {
        this.marca = marca
        this.modello = modello
    }
}
