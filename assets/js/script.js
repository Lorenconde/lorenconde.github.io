// typing effect

const text = "Desenvolvedora Front-End"
let index = 0

function typing(){

document.getElementById("typing").textContent += text[index]

index++

if(index < text.length){

setTimeout(typing,100)

}

}

typing()


// scroll reveal

const revealElements = document.querySelectorAll(".reveal")

window.addEventListener("scroll",()=>{

revealElements.forEach(el=>{

if(el.getBoundingClientRect().top < window.innerHeight - 100){

el.classList.add("active")

}

})

})


// dark mode toggle

const toggle = document.getElementById("toggle-theme")

toggle.addEventListener("click",()=>{

document.body.classList.toggle("light-mode")

})