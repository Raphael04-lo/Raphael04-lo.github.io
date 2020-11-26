const numberCards = 16
let openCards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
let openedCards = []
shuffle(openCards)

let p = document.querySelector('.deck')
for (let index = 0; index < numberCards; index++) {
        let c = document.createElement('div')
        c.innerHTML = openCards[index]
        c.type = openCards[index]
        c.className="card"
        c.addEventListener('click',flipp)
        p.appendChild(c)
}


function flipp(event){
    //openCard(this)
}
function openCard(c){
    if(openedCards.length < 2){
        openedCards.push(c)
        c.classList.toggle('flipped')
        if(openedCards.length == 2){
            if(openedCards[0].type == openedCards[1].type){
                openedCards.pop().classList.toggle('found')
                openedCards.pop().classList.toggle('found')
            }
            else{
                window.setTimeout(
                    ()=>{
                        openedCards.pop().classList.toggle('flipped')
                        openedCards.pop().classList.toggle('flipped')
                    },
                    1000
                )
            }        
        }
    }
    
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
