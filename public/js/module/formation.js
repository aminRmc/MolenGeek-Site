import data from '../../json/molengeek.json' assert { type: "json" }



let resaux = document.querySelector(`.resaux`).querySelectorAll(`a`)
let i = 0
for (const key in data.reseauxSociaux) {
    const element = data.reseauxSociaux[key];
    resaux[i].href = element
       
    i+=1
}


let formation = document.querySelector(`.courte-longue`)
let btncourt = document.querySelector(`#court `)
let btnlong = document.querySelector(`#long `)

let form
let formH3 
let formP
let formcourt = ()=>{

    for (const key in data.formations.formationsCourtes) {
        const element = data.formations.formationsCourtes[key];
        form = document.createElement(`div`)
        form.classList = `form`
        formH3 = document.createElement(`h3`)
        formH3.innerText = element.nom
        formP = document.createElement(`p`)
        formP.innerText = element.pack
        form.appendChild(formH3)
        form.appendChild(formP)
        formation.appendChild(form)
            console.log(element);
        
    }
}
let forP2
let forP3
let forP4
let forP5
let forP6

let formlong = ()=>{

    for (const key in data.formations.formationsLongues) {
        const element = data.formations.formationsLongues[key];
        console.log(element);
        form = document.createElement(`div`)
        form.classList = `form`
        formH3 = document.createElement(`h3`)
        formH3.innerText = element.nom
        formP = document.createElement(`p`)
        formP.innerText = element.duree

        forP2 = document.createElement(`p`)
        forP2.innerText = element.descriptif

        forP3 = document.createElement(`p`)
        forP3.innerText = element.condition.ageMax

        forP4 = document.createElement(`p`)
        forP4.innerText = element.condition.situation

        forP5 = document.createElement(`p`)
        forP5.innerText = element.condition.prix

        forP6 = document.createElement(`p`)
        forP6.innerText = element.condition.horaire

        form.appendChild(formH3)
        form.appendChild(formP)
        form.appendChild(forP2)
        form.appendChild(forP3)
        form.appendChild(forP4)
        form.appendChild(forP5)
        form.appendChild(forP6)
   
        formation.appendChild(form)
            console.log(element);
        
    }}

btnlong.addEventListener('click', ()=>{
    
    Array.from(formation.children).forEach(element => {
         element.remove()
    });
    formlong()
})
btncourt.addEventListener('click', ()=>{
    
    Array.from(formation.children).forEach(element => {
         element.remove()
    });
    formcourt()
})

let testament = document.querySelector(`#testament`)

testament.firstElementChild.firstElementChild.src = data.videosTemoignage.videoI
testament.children[1].firstElementChild.src = data.videosTemoignage.videoII
console.log(testament.firstElementChild.firstElementChild);

let faq = document.querySelectorAll(`.faq`)

faq[0].addEventListener('click', ()=>{
    if (faq[0].children[1].innerHTML == data.FAQ.reponseI) {
        faq[0].children[1].innerHTML = ``
    }
    else{
        faq[0].children[1].innerHTML = data.FAQ.reponseI
    }
}
)
faq[1].addEventListener('click', ()=>{
    if (faq[1].children[1].innerHTML == data.FAQ.reponseII) {
        faq[1].children[1].innerHTML = ``
    }
    else{
        faq[1].children[1].innerHTML = data.FAQ.reponseII
    }
2
})
faq[2].addEventListener('click', ()=>{
    if (faq[2].children[1].innerHTML == data.FAQ.reponseIII) {
        faq[2].children[1].innerHTML = ``
    }
    else{
        faq[2].children[1].innerHTML = data.FAQ.reponseIII
    }
}
)
faq[3].addEventListener('click', ()=>{
    if (faq[3].children[1].innerHTML == data.FAQ.reponseIV) {
        faq[3].children[1].innerHTML = ``
    }
    else{
        faq[3].children[1].innerHTML = data.FAQ.reponseIV
    }
}
)
faq[4].addEventListener('click', ()=>{
    if (faq[4].children[1].innerHTML == data.FAQ.reponseV) {
        faq[4].children[1].innerHTML = ``
    }
    else{
        faq[4].children[1].innerHTML = data.FAQ.reponseV
    }
}
)

faq[0].firstElementChild.innerText = data.FAQ.questionI
faq[1].firstElementChild.innerText = data.FAQ.questionII
faq[2].firstElementChild.innerText = data.FAQ.questionIII
faq[3].firstElementChild.innerText = data.FAQ.questionIV
faq[4].firstElementChild.innerText = data.FAQ.questionV


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