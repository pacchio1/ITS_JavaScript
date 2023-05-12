function Pizza(nome,prezzo) {
    this.nome= nome;
    this.prezzo= prezzo;
    this.display=function() {
        return this.nome+" "+this.prezzo;
    }
}
let pizza1=new Pizza("margherita",5);
let pizza2=new Pizza("napoli",7);
let pizza3=new Pizza("funghi",7);

const menu=[]

menu.push(pizza1);
menu.push(pizza2);
menu.push(pizza3);
console.log(menu);
for (const pizza of menu) {
    console.log(pizza.display());
}


