//All Event handlers are there.
console.log('app.js added')

/*------------------------------------- Event handler for select buttons ---------------------------------- */

//event handler for player-messi
document.getElementById('btn-messi').addEventListener('click', function () {
    const messiName = getTextElementTextValueById('messi-name');
    addPlayer(messiName, 'btn-messi');
})

//event handler for player-neymar
document.getElementById('btn-neymar').addEventListener('click', function () {
    const neymarName = getTextElementTextValueById('neymar-name');
    addPlayer(neymarName, 'btn-neymar');
})

//event handler for player-D maria
document.getElementById('btn-D-maria').addEventListener('click', function () {
    const dMariaName = getTextElementTextValueById('d-Maria-Name');
    addPlayer(dMariaName, 'btn-D-maria');
})

//event handler for player-hakimi
document.getElementById('btn-hakimi').addEventListener('click', function () {
    const hakimiName = getTextElementTextValueById('hakimi-Name');
    addPlayer(hakimiName, 'btn-hakimi');
})

//event handler for player-sanches
document.getElementById('btn-sanches').addEventListener('click', function () {
    const sanchesName = getTextElementTextValueById('sanches-name');
    addPlayer(sanchesName, 'btn-sanches');
})

//event handler for player-hakimi
document.getElementById('btn-donarumma').addEventListener('click', function () {
    const donarummaName = getTextElementTextValueById('donarumma-name');
    addPlayer(donarummaName, 'btn-donarumma');
})

//event handler for player-hakimi
document.getElementById('btn-ramos').addEventListener('click', function () {
    const ramosName = getTextElementTextValueById('Ramos-name');
    addPlayer(ramosName, 'btn-ramos');
})

//event handler for player-hakimi
document.getElementById('btn-machado').addEventListener('click', function () {
    const machadoName = getTextElementTextValueById('Machado-name');
    addPlayer(machadoName, 'btn-machado');
})

//event handler for player-hakimi
document.getElementById('btn-mbappe').addEventListener('click', function () {
    const hakimiName = getTextElementTextValueById('mbappe-name');
    addPlayer(hakimiName, 'btn-mbappe');
})


/*------------------------------------Event handlers for calculation---------------------------------------*/
