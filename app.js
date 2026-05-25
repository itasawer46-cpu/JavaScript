let userscore1 = document.querySelector("#user-score");
let comscore = document.querySelector("#comp-score");
const choice = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const gencompchoice = ()=>{
    const option = ["rock","paper","scissor"];
    const randidx = Math.floor(Math.random()*3);
    return option[randidx];
}
const drawgame = ()=>{
    console.log("Game was Draw .");
    msg.innerText = "Game is Draw. Please Try Again";
    msg.style.backgroundcolor = "#081b31";
}

const showwinner = (userwin)=>{
if(userwin){
    console.log("You Win !")
    msg.innerText = "You Win !";
    msg.style.backgroundColor = "green";
    userscore1.innerText++;
}
else{
    console.log("You Lose !");
    msg.innerText = "You lose !";
    msg.style.backgroundColor = "red";
    comscore.innerText++;
}
}
const playgame = (userchoice)=>{
console.log("User Choice = ",userchoice);
const comchoice = gencompchoice();
console.log(comchoice);
if(userchoice===comchoice){
    drawgame();
}
else{
    let userwin = true;
    if(userchoice==="rock"){
        userwin = comchoice ==="paper" ? false : true;
    }
    else if(userchoice==="paper"){
        userwin = comchoice==="scissor" ? false : true;
    }
    else{
        userwin = comchoice ==="rock"? false : true;
    }
    showwinner(userwin);
}

}

choice.forEach((choice)=>{
 choice.addEventListener("click",()=>{
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
 })
})