const light = document.querySelectorAll(".light-dark")
const profilContainer = document.querySelector(".profil-container")
const heroContainer = document.querySelector(".hero-container")
const followList = document.querySelector(".follow-list")
const logo = document.querySelector(".logo")
const title = document.querySelector(".name")
const input = document.querySelector("input")
const items = document.querySelectorAll(".footer-item")
const links = document.querySelectorAll(".link")
const numbers = document.querySelectorAll(".numbers")
const icon = document.querySelectorAll(".icon")
const noResult = document.querySelector(".no-result")
const btnSearch = document.querySelector(".btn-search")



light.forEach((e) => {
    e.addEventListener("click", ()=> {
        document.body.classList.toggle("D-BG-body")
    
        light.forEach((e)=> {
            e.classList.toggle("hidden")
        })
    
        profilContainer.classList.toggle("section-bg-dark")
    
        heroContainer.classList.toggle("section-bg-dark")
    
        followList.classList.toggle("follow-dark-bg")
    
        logo.classList.toggle("color-to-dark")
    
        title.classList.toggle("color-to-dark")
    
        input.classList.toggle("value-color-dark")
    
        numbers.forEach((e) => {
            e.classList.toggle("color-to-dark")
        })
    
        items.forEach((e) =>{
            e.classList.toggle("color-dark")
        })
        links.forEach((e) =>{
            e.classList.toggle("color-dark")
        })

        icon.forEach((e) => {
            e.classList.toggle("icon-dark")
        })
    })
    
})

btnSearch.addEventListener("click", () => {
    noResult.classList.remove("hidden")
    setTimeout(() => {
        noResult.classList.add("hidden")
    }, 3000)
})
input.addEventListener("click", () => {
    noResult.classList.add("hidden")
})

links.forEach((link)=> {
    link.addEventListener("click", ()=> {
        link.textContent = "Not aviable"
        link.style.opacity = ".5"
    })
})
