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
    // const selectdPlayersQuantity = getElementTextById('selected-players-numbers');
    const playerBudget = getElementFeildById('player-budget');

    const playerTotalCost = selectedArray.length * playerBudget;
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

function display(button) {

    const selectedPlayers = document.getElementById('seleted-players');



    if (selectedArray.length > 5) {
        alert('You can not add more than 5 Players');
        selectedArray.pop();
        return button.removeAttribute('disabled');
    }




    selectedPlayers.innerHTML = '';

    for (let i = 0; i < selectedArray.length; i++) {
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
    const button = element;
    button.setAttribute('disabled', 'true');




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

    // document.getElementById('selected-players-numbers').innerText = selectedArray.length;

    display(button);
}







