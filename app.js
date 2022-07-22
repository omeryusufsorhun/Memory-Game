document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('#grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []//seçilen kartları atayacağımız boş dizi
  let cardsChosenId = []//seçilen kartların idsini tutacağımız boş dizi
  let cardsWon = []//doğru bilinen kartları atadığımız dizi

  //create your board
  function createBoard() {//kartları yerleştireceğimiz board
    for (let i = 0; i < cardArray.length; i++) {//dizi uzunluğu kadar indexli bir döngü ile her kartı tek tek oluşturacağız
      const card = document.createElement('img')//burada bir image oluşturuyoruz
      card.setAttribute('src', 'images/blank.png')//daha sonra bu imagenin src özelliğine blank.png'yi atıyoruz yani blank resmini içine atadık.
      card.setAttribute('data-id', i)// burada her img'ye id değeri ataması yapıyoruz 1,2,3,4,..,12
      card.addEventListener('click', flipCard)//her karta tıklandığında kartın açılmasını sağlayan event listener ekledik
      grid.appendChild(card)
    }
  }
  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')//burada ise createBoard fonksiyonunda atadığımız id=1 id=2 şeklindeki imageleri cardId içine atadık.
    cardsChosen.push(cardArray[cardId].name)//
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  

  createBoard()
})