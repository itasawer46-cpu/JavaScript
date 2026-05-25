let input = document.getElementById("txt");
let btn = document.getElementById("add");
let list = document.getElementById("list");
 btn.addEventListener("click",function(){
 let task=input.value;

 if(task===""){
    alert("Enter Your Task ");
    return;
 }
let li = document.createElement("li");
 li.innerText = task;
  list.appendChild(li);
  li.addEventListener("click",function(){
li.remove();
  });
  input.value="";
 });