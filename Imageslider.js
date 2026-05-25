const next = document.querySelector(".next");
const preview = document.querySelector(".pre");
const img_container = document.querySelector(".image-container");
const allimage = document.querySelectorAll(".img")
let currentimg = 1;
next.addEventListener("click",()=>{
currentimg++;
updateimg();
})
preview.addEventListener("click",()=>{
    currentimg--;
    updateimg();
})

function updateimg(){
    if(currentimg>allimage.length){
        currentimg = 1;
    }
    else if(currentimg<1){
     currentimg = allimage.length;
    }
img_container.style.transform=`translate(-${(currentimg-1)*500}px)`;
}