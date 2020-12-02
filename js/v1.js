const numberCards = 16
let openCards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
let openedCards = []
let foundCards = []
shuffle(openCards)

var Score = 0;
var Zeit = 0;


let p = document.querySelector('.deck')
for (let index = 0; index < numberCards; index++) {
        let c = document.createElement('div')
        c.type = openCards[index]
        c.innerHTML = openCards[index]
        c.className="card"
        c.addEventListener('click',flipp)
        p.appendChild(c)
}


function flipp(event){
    openCard(this)
}

function openCard(c){
    if(openedCards.length < 2){
        if(openCards.classList != 'found'){
            openedCards.push(c)
            c.classList.add('flipped')
            if(openedCards.length == 2){
                if(openedCards[0].type == openedCards[1].type){
                    BeenFound(openedCards[0])
                    BeenFound(openedCards[1])
                    openedCards.pop().classList.add('found')
                    openedCards.pop().classList.add('found')
                    Score += 1
                    document.querySelector('#score').textContent = `Score: ${Score}`;
                    Finish()
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

  function BeenFound(c){
    c.classList.toggle('flipped')  
    foundCards.push(c)
    fadeOutEffect(c)
    
      
  }

function Finish(){
    if(foundCards.length == 16){
        alert(`Victoy Royal! Du hast ${Zeit} Sekunden gebraucht. Um neu zu starten F5 drücken.`)
    }
}

function fadeOutEffect(c) {
    var fadeTarget = c
    var fadeEffect = setInterval(function () {
        if (!c.style.opacity) {
            c.style.opacity = 1;
        }
        if (c.style.opacity > 0) {
            c.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 100);
}

var Timer = setInterval(function(){
    Zeit += 1;            
}, 1000);