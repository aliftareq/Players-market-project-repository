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

// 4. add player dynamic function

function addPlayer(value) {
    const liArray = document.querySelectorAll('li')
    const liNumbers = liArray.length;
    if (liNumbers < 5) {
        const olList = document.getElementById('ol-list')
        const li = document.createElement('li')
        li.innerText = value;
        olList.append(li)
    }
    else {
        alert('you can not add more than 5 Players')
    }
}

// 5. getTextElementTextValue by id

function getTextElementTextValueById(elementId) {
    const element = document.getElementById(elementId);
    elementTextValue = element.innerText
    return elementTextValue;
}