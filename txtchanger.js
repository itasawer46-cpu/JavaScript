let input = document.getElementById("txt");
console.log(input);

let btn = document.getElementById("change");
console.log(btn);

// btn.addEventListener("click",()=>{
//     input.innerText = "Good Morning";
//     input.style.color = "White";
//     input.style.fontSize = "30px";
//     document.querySelector("body").style.backgroundColor = "purple";
// });

btn.addEventListener("click",()=>{
    if(input.style.display==="none"){
        input.style.display= "block";
        btn.innerText = "Hide";
        input.style.color = "White";
        input.style.fontSize = "30px";
        document.querySelector("body").style.backgroundColor = "purple";
    }
    else{
        input.style.display= "none";
        btn.innerText = "Show";
        input.style.color = "pink";
        input.style.fontSize = "20px";
        document.querySelector("body").style.backgroundColor = "orange";
    }
});