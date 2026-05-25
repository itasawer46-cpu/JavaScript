let newbtn = document.querySelector("button");
console.log(newbtn);

const change = ()=>{
    document.querySelector("body").style.backgroundColor = "red";
};

newbtn.addEventListener("click",change);