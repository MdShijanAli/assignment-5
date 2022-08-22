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
    const selectdPlayersQuantity = getElementTextById('selected-players-numbers');
    const playerBudget = getElementFeildById('player-budget');

    const playerTotalCost = selectdPlayersQuantity * playerBudget;
    setTextfromCalculate('player-budget-expense', playerTotalCost);





})

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const managerBudget = getElementFeildById('manager-budget')
    const coachBudget = getElementFeildById('couch-budget')

    const newPlayerExpence = getElementTextById('player-budget-expense');

    const calculateTotal = newPlayerExpence + managerBudget + coachBudget;

    setTextfromCalculate('total-cost', calculateTotal);


})





















const selectedArray = [];

function display(showName) {

    const selectedPlayers = document.getElementById('seleted-players');
    selectedPlayers.innerHTML = '';

    for (let i = 0; i < showName.length; i++) {
        // console.log(selectedArray[i].playerName);
        const name = selectedArray[i].playerName;

        const tr = document.createElement('tr');

        tr.innerHTML = `
        <th  class="text-white text-xl">${i + 1}.</th>
        <td class="text-white text-xl" >${name}</td>
        `;
        selectedPlayers.appendChild(tr);
    }


}

function selectButton(element) {
    // console.log(element.parentNode.children[0].innerText);

    const playerName = element.parentNode.children[0].innerText;
    // console.log(playerName);

    /* const selectedPlayers = document.getElementById('seleted-players');
    selectedPlayers.innerText = playerName; */

    const nameObj = {
        playerName: playerName,

    }
    selectedArray.push(nameObj);
    /*   console.log(selectedArray);
      console.log(selectedArray.length); */

    document.getElementById('selected-players-numbers').innerText = selectedArray.length;

    display(selectedArray);
}



