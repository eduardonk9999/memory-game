const tela = document.querySelector('.game');

function arrayCards(){
  const arrayCards = ['css', 'html', 'js']
  arrayCards.forEach((card) => {
    cardI(card)
    cardI(card)
  })
}
function cardI(cardItem){
  const card = document.createElement('div')
  card.classList.add('card')

  tela.appendChild(card)

  card.innerHTML = `<img data-marca="${cardItem}" src="/assets/imgs/${cardItem}.png" />`

}
let firstCard, secondCard;

function viraCard(){
  const cards = document.querySelectorAll('.card')
  cards.forEach((card) => {
    card.addEventListener("click", function(){
      card.classList.add('viracard')
      setTimeout(() => {
        card.classList.remove('viracard')
        console.log('remove')
      }, 1000);
      
      if(!firstCard) {
        firstCard = this
        return false
      }

      secondCard = this
      
      let isMatch = firstCard.querySelector('img').dataset.marca === secondCard.querySelector('img').dataset.marca
      console.log(isMatch)

      if(isMatch){
       
        
        firstCard.classList.add('fixo')
        secondCard.classList.add('fixo')

        firstCard = ''
        secondCard = ''
        
      } else {
        console.log("NO")
        firstCard = ''
        secondCard = ''
      
      }      
    })
  })

}





function initGame(){
  arrayCards()
  viraCard()
}

initGame()