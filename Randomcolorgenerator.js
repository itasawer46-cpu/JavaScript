let btn = document.getElementById("btn");
console.log(btn);

let colortext = document.getElementById("colorcode");

btn.addEventListener("click",()=>{
    let Randomcolor = "#"+Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = Randomcolor;
    colortext.innerText = Randomcolor;
})