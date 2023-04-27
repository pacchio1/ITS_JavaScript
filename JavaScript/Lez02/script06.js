for (const s of STUDENTI) {
    let nome = s[1]
    let cognome = s[2]
    const DIV = document.createElement('div')
    DIV.setAttribute('class', 'card')
    DIV.innerHTML = '<p>' + nome + ' ' + cognome + '</p>'
    document.body.append(DIV)
    if (s[3] % 5 == 0)
        console.log(" si  ferma a", nome, cognome)

}
