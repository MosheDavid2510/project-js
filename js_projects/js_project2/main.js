const cardArray = [
    {
        name: 'fries',
        img: 'pictures/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'pictures/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'pictures/hotdog.png'
    },
    {
        name: 'ice-crem',
        img: 'pictures/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'pictures/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'pictures/pizza.png'
    },
    {
        name: 'fries',
        img: 'pictures/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'pictures/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'pictures/hotdog.png'
    },
    {
        name: 'ice-crem',
        img: 'pictures/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'pictures/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'pictures/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())    //סידור אקראי של הכרטיסים 

const grigDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function creatBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'pictures/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grigDisplay.appendChild(card)
    }
}
creatBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]           //קלף ראשון
    const optionTwoId = cardsChosenIds[1]           //קלף שני
    console.log('check for match!')
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'pictures/blank.png')       //הופך חזרה קלפים שונים
        cards[optionTwoId].setAttribute('src', 'pictures/blank.png')
        alert('לחצת על אותו קלף')
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('יפה מאוד ! מצאת זוג תואם !')
        cards[optionOneId].setAttribute('src', 'pictures/white.png')  //קלפים תואמים נעלמים מהלוח - מקבלים קרע לבן
        cards[optionTwoId].setAttribute('src', 'pictures/white.png')

        cards[optionOneId].removeEventListener('click', flipCard)     //קלפים לבנים לא ניתנים ללחיצה חוזרת 
        cards[optionTwoId].removeEventListener('click', flipCard)

        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'pictures/blank.png')       //הופך חזרה קלפים שונים
        cards[optionTwoId].setAttribute('src', 'pictures/blank.png')
        alert('לא נורא .... נסה שוב')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == (cardArray.length / 2)) {
        resultDisplay.innerHTML = 'ברכות !! מצאת את כל הזוגות '
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}