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

function viraCard(){
  const cards = document.querySelectorAll('.card')
  cards.forEach((card) => {
    card.addEventListener("click", function(event){
      card.classList.add('viracard')

      
      

      validaCard(card)


      setTimeout(() => {
        card.classList.toggle('viracard')
      }, 1000);
    })
  })

}

function validaCard(card) {
  //const cardImg = document.querySelector(card)
  //console.log(cardImg)

  const itensArr = []
 

  itensArr.push(card.querySelector('img').dataset.marca)
  
  


  
 
  
}


function initGame(){
  arrayCards()
  viraCard()
}

initGame()