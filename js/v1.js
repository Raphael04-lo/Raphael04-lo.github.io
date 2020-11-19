

let c = document.querySelectorAll('.card')

for (const i of c){
    i.addEventListener('click', xy)
}

function xy(event){
    this.classList.toggle('flip');
}