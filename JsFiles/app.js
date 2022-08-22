//All Event handlers are there.
console.log('app.js added')

// Event handler for select buttons

//event handler for player-messi
document.getElementById('btn-messi').addEventListener('click', function () {
    const messiName = getTextElementTextValueById('messi-name');
    addPlayer(messiName);

    //disabling messi button
    const messiButton = document.getElementById('btn-messi');
    messiButton.setAttribute('disabled', true)
    messiButton.style.backgroundColor = 'grey'
})

//event handler for player-neymar
document.getElementById('btn-neymar').addEventListener('click', function () {
    const neymarName = getTextElementTextValueById('neymar-name');
    addPlayer(neymarName);
})

//event handler for player-D maria
document.getElementById('btn-D-maria').addEventListener('click', function () {
    const dMariaName = getTextElementTextValueById('d-Maria-Name');
    addPlayer(dMariaName);
})

//event handler for player-1
document.getElementById('btn-hakimi').addEventListener('click', function () {
    const messiName = getTextElementTextValueById('messi-name');
    addPlayer(messiName);
})