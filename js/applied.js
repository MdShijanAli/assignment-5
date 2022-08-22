function getElementFeildById(inputId) {
    const inPutField = document.getElementById(inputId);
    const inputFieldString = inPutField.value;
    const fieldValue = parseFloat(inputFieldString);
    return fieldValue;
}
function getElementTextById(inputId) {
    const textField = document.getElementById(inputId);
    const textFieldString = textField.innerText;
    const textValue = parseFloat(textFieldString);
    return textValue;
}


function setTextfromCalculate(inputId, value) {
    const setText = document.getElementById(inputId);
    setText.innerText = value;
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    const playerBudget = getElementFeildById('player-budget');

    setTextfromCalculate('player-budget-expense', playerBudget);





})

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const managerBudget = getElementFeildById('manager-budget')
    const coachBudget = getElementFeildById('couch-budget')

    const newPlayerExpence = getElementTextById('player-budget-expense');

    const calculateTotal = newPlayerExpence + managerBudget + coachBudget;

    setTextfromCalculate('total-cost', calculateTotal);


})