const btnE1 = document.querySelector(".btn");
const maincontainer = document.querySelector(".container");
const popcontainer = document.querySelector(".popup-container");
const closeicon = document.querySelector(".close-icon");

btnE1.addEventListener("click",()=>{
    maincontainer.classList.add("active");
    popcontainer.classList.remove("active");
})

closeicon.addEventListener("click",()=>{
    maincontainer.classList.remove("active");
    popcontainer.classList.add("active");
})