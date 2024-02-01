import data from '../../json/molengeek.json' assert { type: "json" }



let resaux = document.querySelector(`.resaux`).querySelectorAll(`a`)
let i = 0
for (const key in data.reseauxSociaux) {
    const element = data.reseauxSociaux[key];
    resaux[i].href = element
       
    i+=1
}


let langue = document.querySelector(`#langue`).querySelector(`i`)
let langage = document.querySelector(`.langage`)

langue.addEventListener('click', ()=>{
    if (langage.style.display ==  `block`) {
        langage.style.display =   `none`
    }
    else{
        langage.style.display =   `block`
    }

})