const img = document.querySelector(".bg-img");

window.addEventListener("scroll",()=>{
  updateimage();
});

function updateimage(){
    img.style.opacity = 1-window.pageYOffset/800;
    img.style.backgroundSize = 100-window.pageYOffset/12 +"%";
}