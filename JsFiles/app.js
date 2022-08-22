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

//Event handler for calculate button

document.getElementById('btn-calculate').addEventListener('click', function () {
    // determining the number of players
    const liArray = document.querySelectorAll('li')
    const numberOfPlayers = liArray.length;

    // getting the value of per player cost
    const perPlayerCost = getInputFieldValueById('per-player');

    // validation for per player cost
    if (isNaN(perPlayerCost)) {
        alert('Your Input is not valid. Please try again with numbers.')
        return;
    }
    else {
        //calculating player expense
        const playerExpense = numberOfPlayers * perPlayerCost;

        // setting the player Expenses
        setTextElementById('player-Expenses', playerExpense);
    }
})


document.getElementById('btn-calculate-total').addEventListener('click', function () {
    // getting player Expenses
    const playerExpense = getTextElementValueById('player-Expenses');

    // getting manager and coach expense
    const managerExpense = getInputFieldValueById('manager-expense');
    const coachExpense = getInputFieldValueById('coach-expense');

    //validation for total cost.
    if (isNaN(playerExpense) || isNaN(managerExpense) || isNaN(coachExpense)) {
        alert('One of your input value is Invalid. Please, try again with numbers.')
    }
    else {
        // determining the total expense
        const totalExpense = playerExpense + managerExpense + coachExpense;

        //set the determined value.
        setTextElementById('total-Expense', totalExpense);
    }
})