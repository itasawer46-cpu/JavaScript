const nextbtnE1 = document.querySelector("#next");
const previewbtnE1 = document.querySelector("#preview");
let slider = document.querySelector(".image-container");

let index = 0;

 nextbtnE1.addEventListener("click",()=>{
index++;
if(index>3){
    index=0;
}
slider.style.transform = "translateX(-"+(index * 100)+"%)";
 });

 previewbtnE1.addEventListener("click",()=>{
    index--;
if(index<0){
    index=3;
}
slider.style.transform = "translateX(-"+(index * 100)+"%)";
 });
 

