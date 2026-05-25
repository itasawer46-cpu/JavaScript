
let btn = document.getElementById("greet");
console.log(btn);

btn.addEventListener("click",()=>{
    let fullname = document.getElementById("name").value;
    let txt = document.getElementById("para").innerText = "Hello "+fullname;
});