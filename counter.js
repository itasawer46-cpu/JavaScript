let btn = document.getElementById("btn");
 console.log(btn);

 let par = document.getElementById("para");
 console.log(par);
let count = 0;
 btn.addEventListener("click",()=>{
    count++;
    par.innerText = count;
 });