//dadi
const Dado1 = document.getElementById('Dado1')
const Dado2 = document.getElementById('Dado2')
let random = parseInt(Math.random() * 6) + 1;
let random2 = parseInt(Math.random() * 6) + 1;
console.log(random);
console.log(random2);
random = 'https://raw.githubusercontent.com/maboglia/ProgrammingResources/master/images/dadi/f' + random + '.jpg';
random2 = 'https://raw.githubusercontent.com/maboglia/ProgrammingResources/master/images/dadi/f' + random2 + '.jpg';
Dado1.src = random;
Dado2.src = random2;
