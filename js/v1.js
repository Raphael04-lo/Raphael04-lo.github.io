/*
1) Leeres Array zum Speichern der aufgedeckten Karten (openedCards)
2) Karten richtig erzeugen (type) [1,1,2,2,3,3,4,4.........8,8]
3)KArten mischen (shuffle)
4) Karten zum Deck hinzufügen
5) Klick Eventhandler
6)Kartenlogik:
    6.1) prüfen wie viele Karten bereits aufgedeckt sind
    6.2) wenn weniger als 2 -> aufdecken
    6.3)Erkennen ob zwei gleiche Karten
    aufgedeckt wurden -> wenn gleich -> found; wenn nicht gleich -> verdecken
*/

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
    if(!this.classList.contains('found'))
        openCard(this)
    this.classList.toggle('flipped')
}
function openCard(c){
    alert(c.innerHTML)
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