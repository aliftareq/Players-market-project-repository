// All re-useable functions are here.

console.log('utility file added')

// 1. Function for getting text element value
function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementStringValue = element.innerText;
    const ConvertedStringValue = (parseFloat(elementStringValue)).toFixed(2)
    const elementValue = parseFloat(ConvertedStringValue);
    return elementValue;
}

// 2. Function for getting Input field value
function getInputFieldValueById(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldStringValue = inputField.value;
    const ConvertedStringValue = (parseFloat(inputFieldStringValue)).toFixed(2)
    const inputValue = parseFloat(ConvertedStringValue);
    return inputValue;
}

// 3. Function for set text element value
function setTextElementById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// 4. get TextElements TextValue by id....

function getTextElementTextValueById(elementId) {
    const element = document.getElementById(elementId);
    elementTextValue = element.innerText
    return elementTextValue;
}

// 5. add player dynamic function

function addPlayer(value, btnName) {
    // determining the number of list
    const liArray = document.querySelectorAll('li')
    const liNumbers = liArray.length;
    // checking the number of list
    if (liNumbers < 5) {
        // creating li and appending it to ol
        const olList = document.getElementById('ol-list')
        const li = document.createElement('li')
        li.innerText = value;
        olList.append(li)

        // disabling the button if its have been clicked
        const playerButton = document.getElementById(btnName);
        playerButton.setAttribute('disabled', true);
        playerButton.style.backgroundColor = 'grey';
    }
    else {
        alert('You can not add more than 5 players!!!')
        return;
    }
}

