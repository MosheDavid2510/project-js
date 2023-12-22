const computerChoiseDisplay = document.getElementById('computer-choise');
const userChoiceDisplay = document.getElementById('user-choise');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
    userChoice = event.target.id
    if (possibleChoice == rock) {
        userChoice = 'אבן'
    }
    if (possibleChoice == scissors) {
        userChoice = 'מספריים'
    }
    if (possibleChoice == paper) {
        userChoice = 'נייר'
    }
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
        computerChoice = 'אבן'
    }
    if (randomNumber === 2) {
        computerChoice = 'מספריים'
    }
    if (randomNumber === 3) {
        computerChoice = 'נייר'
    }
    computerChoiseDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "תיקו ! נסה שוב"
    }
    if (computerChoice === 'אבן' && userChoice === 'נייר') {
        result = "ניצחת!"
    }
    if (computerChoice === 'אבן' && userChoice === 'מספריים') {
        result = "הפסדת!"
    }
    if (computerChoice === 'נייר' && userChoice === 'אבן') {
        result = "הפסדת!"
    }
    if (computerChoice === 'נייר' && userChoice === 'מספריים') {
        result = "ניצחת!"
    }
    if (computerChoice === 'מספריים' && userChoice === 'נייר') {
        result = "הפסדת!"
    }
    if (computerChoice === 'מספריים' && userChoice === 'אבן') {
        result = "ניצחת!"
    }
    resultDisplay.innerHTML = result
}


