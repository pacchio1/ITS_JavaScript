const btn = document.createElement('button');
btn.addEventListener('click', function(){
    console.log('Hai cliccato');
});
btn.textContent = 'Cliccami';
document.body.append(btn);

const righe=document.getElementsByClassName('row');
for (const riga of righe) {
    riga.innerHTML = '<h1>Titolo</h1>';
    riga.append(btn)
}

