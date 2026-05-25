let arr = "dark";
let button = document.getElementById("btn");
button.addEventListener("click",()=>{
    if(arr==="dark"){
        arr="light";
    console.log("Button is Clicked");
    document.getElementById("btn").innerHTML = "Button Clicked";
    document.querySelector("body").style.backgroundColor="purple";
    document.getElementById("para").innerHTML = "Husnain Ali";
    }
    else{
        document.querySelector("body").style.backgroundColor="green";
        document.getElementById("para").innerHTML = "Coder Of The World";
    }
})