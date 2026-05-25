const btn = document.querySelector(".generate");
const alertcontainer = document.querySelector(".alert-container");
const copybtn = document.querySelector(".fa-copy");
copybtn.addEventListener("click",()=>{
    copypassword();
})
const inp = document.querySelector(".input");
console.log(inp);
btn.addEventListener("click",()=>{
    createpassword();
});

function createpassword(){
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()-_=+[]{}|;:',.<>/?"
    const passlength = 14;
    let password = "";
    for (let index = 0; index < passlength; index++) {
        const randomnumber =Math.floor(Math.random()*chars.length);
        password+=chars.substring(randomnumber,randomnumber+1);
        inp.value = password;
        alertcontainer.innerText = password + " Copied!";
    }
};

function copypassword(){
    inp.select();
    navigator.clipboard.writeText(inp.value);
}