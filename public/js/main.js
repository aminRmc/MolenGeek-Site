import data from '../json/molengeek.json' assert { type: "json" }

let ulSeance = document.querySelector(`#content-a-venir`).querySelector(`ul`)
let liSeance 
let p1S
let p2S
for (const key in data.formations.seancesInfos) {

    liSeance =  document.createElement(`li`)
    p1S = document.createElement(`p`)
    p1S.innerText = data.formations.seancesInfos[key].date
    p2S = document.createElement(`p`)
    p2S.innerText = data.formations.seancesInfos[key].nom
    liSeance.appendChild(p1S)
    liSeance.appendChild(p2S)
    liSeance.classList = `a-venir`
    ulSeance.appendChild(liSeance)

    
}


let partenair = document.querySelector(`#partenair`).querySelector(`div`)
let partimg
let tabPart = [data.partenaires.Microsoft.logo,data.partenaires.actiris.logo,data.partenaires.aws.logo,,data.partenaires.bxFormation.logo,data.partenaires.google.logo,data.partenaires.meta.logo,data.partenaires.proximus.logo,data.partenaires.pwc.logo]
let supP = 0// sup partenair
for (let index = 0; index < tabPart.length; index++) {
    const element = tabPart[index];

    partimg = document.createElement(`img`)
    partimg.src = element
    partenair.appendChild(partimg)
    
}

// let imagesPart = partenair.querySelectorAll(`img`)
// while (imagesPart == ``) {
//     let a = imagesPart[0]
//     imagesPart[0].remove()
//     partenair.appendChild(a)

    
// }
  
let contactText = document.querySelector(`.contact-text`)
let p1C //p numero 1 dans contact text


for (const key in data.molengeekInfo) {
    const element = data.molengeekInfo[key];
    
   p1C = document.createElement(`p`)
    p1C.innerText = element
    contactText.appendChild(p1C)
        
    
}

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