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
    setText.innerText = value.toFixed(2);
}


//Error handling function
function errorCheck(value, field) {

    if (value < 0 || isNaN(value) === true) {
        alert("Error!! Input value is not valid !!");
        const empty = '00';
        setTextaValueById(field, empty);
    }
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    // const selectdPlayersQuantity = getElementTextById('selected-players-numbers');
    const playerBudget = getElementFeildById('player-budget');



    //Input Error Check
    errorCheck(playerBudget, 'player-budget-expense');





    const playerTotalCost = selectedArray.length * playerBudget;
    setTextfromCalculate('player-budget-expense', playerTotalCost);










})

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const managerBudget = getElementFeildById('manager-budget')
    //Input Error Check
    errorCheck(managerBudget, 'total-cost');

    const coachBudget = getElementFeildById('couch-budget')
    //Input Error Check
    errorCheck(coachBudget, 'total-cost');

    const newPlayerExpence = getElementTextById('player-budget-expense');

    const calculateTotal = newPlayerExpence + managerBudget + coachBudget;

    setTextfromCalculate('total-cost', calculateTotal);





})




// step:2


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
            <th  class="text-white text-xl ">${i + 1}.</th>
            <td class="text-white text-xl " >${name}</td>
            `;
        selectedPlayers.appendChild(tr);


    }

}


function selectButton(element) {
    const button = element;
    button.setAttribute('disabled', 'true');




    // console.log(element.parentNode.children[0].innerText);

    const playerName = element.parentNode.children[0].innerText;


    const nameObj = {
        playerName: playerName,

    }
    selectedArray.push(nameObj);

    display(button);
}







