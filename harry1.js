// IF-ELSE CONDITIONS



// console.log("Hello World");
// let a = prompt("Enter a number ");
// console.log(a);

// let b= false;

// if(b){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

// var c =5;
// var d = 6;
// console.log(typeof a,typeof b,typeof c,typeof d,)
// console.log(c+d+3);

// var a = 55;
// console.log(a);
// a=56;
// {
//     var a = 5;
//     console.log(a);
// }
// console.log(a);

// const b = true;
// console.log(b);

// Primitive Data Types 

// Null , Number , String , Symbol , Undefined , Boolean , BigInt 

// let obj = {
//     name: "Husnain Ali",
//     age : 19,
//     class : 13,
//     "job roll ": "Engineering"
// }
// obj.salary = 4500;
// console.log(obj);
// obj.salary = 4500;
// console.log(obj);
// let p = null;
// console.log(typeof("pp",p));

// let p = "Subhan";
// p = p+1;
// console.log(p);
// console.log(typeof(p));

// let age = 19;

// if(age >18){
//     console.log("Eligible for vote");
// }
// else{
//     console.log("Not Eligible");
// }

// let a = "3";
// let b = 3;
// console.log(a-b);
// console.log(a+b);
// console.log(a/b);
// console.log(a*b);
// console.log(a**b);
//  a = --b;
// console.log(a);
// console.log(b);

// if(a==b){ // it only check numbers 
//     console.log("You can drive");
// }
// else{
//     console.log("You can not drive");

// }
// if(a==b){ // it also check type and variables
//     console.log("You can drive");
// }
// else{
//     console.log("You can not drive");
// }

// let day = 3;

// switch(day){
//     case 1: 
//     console.log("Monday");
//     break;
//     case 2: 
//     console.log("Tuesday");
// break;
//     case 3: 
//     console.log("Wednesday");
// break;
//     case 4: 
//     console.log("Thursday");
//     break;
// }

// let age = 0;

// if(age==18){
//     console.log("you can drive");
// }
// else if(age==0){
//     console.log("you are kidd");
// }
// else{
//     console.log("bagarat");
// }

// let a =5;
// let b=8;
// let c = (a>b) ? (a-b) : (b-a);
// console.log(c);

// LOOOOOOPS



// let choice  = prompt("Enter trrminate condition ");
// let choice2 = prompt("Enter another terminate condition ");
// for(let i = 0;i < choice; i++){
//   for(let j = 0;j < choice2 ; j++){
//     console.log(j);
//   }
//   console.log(" ");
// }


// FOR IN LOOOOOPS

// let obj = {
//     name:"Muhammed Ahmed",
//     age:10,
//     role:"Business man"
// } 
// for (const hello in obj) {
//     if (!Object.hasOwn(obj, hello)) continue;
    
//     const element = obj[hello];
//     console.log(hello,element);
// }

// for(const key in obj){
//     if(!Object.hasOwn(obj,key)) continue;
//     const Things = obj[key];
//     console.log(key,Things);
// }

// FOR OF LOOOOOPS

// for (const element of "Husnain") {
//     console.log(element);
// }

// for (const element of "Subhan Rasool") {
//     console.log(element);
// }

// WHILE LOOOOOPS

// let i = 0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// DO-WHILE LOOOOOOPS

// let i = 0;
// do{
//     console.log(i);
//     i++
// }while(i<=10);


// FUNCTIONS IN JS

// function hello(){
//     console.log("Good Morning");
// }

// hello();
// hello();
// hello();
// hello();

// function sum(i,j){
//     return i+j;
// }
// console.log(sum(4,5));

// function name(name){
//     console.log(name);
// }

// name("Husnain ALi");
// name("Hadi Rizwan");
// name("Faizan Ali");

// let all=()=>{
//     let i = 1;
// console.log("Hello World");
// i++;
// console.log(i);
// }
// all();

// const fun = (x,y)=>{
// return x-y;
// }
// console.log(fun(4,1));

// let a = Math.random()*100;
// console.log(a);


// CHALLANGE ACCEPTED

// let choice = true;
// while(true){
// let a = prompt("Enter first Number ");
// let b = prompt("Enter second Number ");

// const oper = prompt("Enter operation do you want to perform ");

// switch(oper){
//     case '+':
//         console.log(a-b);
//         break;
//     case '*':
//         console.log(a+b);
//         break;

//     case '-':
//         console.log(a/b);
//         break;
//     case '/':
//         console.log(a**b);
//         break;
// }
// }

// let a = "Harry";
// for(let i=0;i<a.length;i++){
//     console.log(a[i]);
// }


// STRING TOPIC I JS

// let name = "Husnain";
// let friend = "Fahad";

// console.log(`My name is ${name} and my friend name is ${friend}`)

// let a = "Husnain";
// console.log(name.toUpperCase());
// console.log(a.slice(2,5));
// console.log(a.replace("in","56"));
// console.log(a.repeat(2));
// console.log(a.replaceAll("Husnain","Fahad"));

// let b = "Fahad";
// let c = "Hassan";
// console.log(b.concat(" "+c));

// ARRAYS IN JAVASCRIPT FROM HARRY BAI

// let array = ["banana","apple",123,78];

// console.log(array.concat("hello"));
// console.log(array.entries("bai"));
// it is used to add something at the end of array
// array.push(9);
// console.log(array);

// it is used to remove something at the end of array

// array.pop();
// console.log(array);

// it is used to add something at the start of array
// array.unshift(56666);
// console.log(array);


// it is used to remove something at the start of array
// array.shift();
// console.log(array);

// Its is used to search something
// console.log(array.includes(9));


// console.log(array.indexOf("apple"));
// console.log(array.join(" and "));

// let arr = [1,7,2,9,0];
// console.log(arr.sort());
// console.log(arr);

// arr.forEach((v,i,arr) => {
//     console.log(v,i,arr)
// });



// let object = {
//     a:"Husnain",
//     b:19,
//     c:21
// }

// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;
    
//     const element = object[key];
//     console.log(key,element);
// }

// for (const element of "Husnain") {
//     console.log(element);
// }

// let arr = [1,13,5,7,11];
// let newarr=[];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newarr.push(element**2);
// }
// console.log(newarr);

// let fac = prompt("Enter Number for which you want to take prompt");
// let factt=1;
// for(let i = 1; i<=fac ; i++){
// factt*=i;
// }
// console.log(factt);


// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }


// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);

// let obj = {
//     name:"Fahad",
//     age:20,
//     class:12,
//     Address:"pahrianwali"
// }

// for(const key in obj){
//     let element = obj[key];

//     console.log(key,element);
// }

// for(let element of "Joker"){
//     console.log(element);
// }

// let array = [23,4,56,9,12];

// array.forEach(function(a,b,c){
//     // if(element > 50){
//     //     console.log(element);
//     // }

//     console.log(a,b,c);
// });

// array.find(element=>{
//     if(element>30)console.log(element);
// })


// let arr = (array.findIndex(Element=>Element<=4));
// console.log(arr);

// let result = array.filter(x=>x%2===0);

// console.log(result);

// console.log(array)

// array.splice(1,1);
// console.log(array);
// console.log(array);
// console.log(array);
// console.log(array.splice(1,2));
// console.log(array);

// console.log(array.join(" and "));
// console.log(array); 

// console.log(array.toString());


// VERY IMPORTANT TOPIC DOM

// document.title = "Hello World";
// document.body.style.backgroundColor = "red";
// document.body.style.Color = "white";


// CHALLANGE ACCEPTED FROM HARRY BAI


// let a = document.querySelector(".container").children;
//  function getrandomcolor(){
//    let val1 = Math.random()*255;
//    let val2 = Math.random()*255;
//    let val3 = Math.random()*255;
    
//    return `rgba(${val1},${val2},${val3}) `;

//  }

// Array.from(a).forEach(e=>{
//     e.style.backgroundColor=getrandomcolor();
// })
// let div = document.createElement("div");
// div.innerHTML = "Nothing Happen";
// div.setAttribute("class","HusnainAli");
// document.querySelector(".HusnainAli");
// document.querySelector(".container").replaceWith(div);

// document.querySelector("#btn").addEventListener("click"()=>{
//   document.body.style.backgroundColor="red";
// })
// Uncaught SyntaxError: invalid arrow-function arguments (parentheses around the arrow-function may help) debugger eval code:1:49
// document.querySelector("#btn").addEventListener("click",()=>{
//   document.body.style.backgroundColor="red";
// })
// undefined
// document.querySelector("#btn").addEventListener("mouseover",()=>{
//   document.body.style.backgroundColor="red";
// })
// undefined
// document.querySelector("#btn").addEventListener("mouseover",()=>{
//   document.body.style.backgroundColor="black";
// })
// undefined
// document.querySelector("#btn").addEventListener("dblclick",()=>{
//   document.body.style.backgroundColor="purple";
// })
// undefined
// document.querySelector("#btn").addEventListener("mousedown",()=>{
//   document.body.style.backgroundColor="pink";
// })
// undefined
// document.querySelector("#btn").addEventListener("mouseup",()=>{
//   document.body.style.backgroundColor="yellow";
// })
// undefined
// document.querySelector("#btn").addEventListener("mousemove",()=>{
//   document.body.style.backgroundColor="blue";
// })
// undefined
// document.querySelector("#btn").addEventListener("enter",()=>{
//   document.body.style.backgroundColor="maroon";
// })
// undefined
// document.querySelector("#btn").addEventListener("mouseleave",()=>{
//   document.body.style.backgroundColor="green";
// })
// undefined
// document.querySelector("#btn").innerText="Good Morning Husnain Ali"
// "Good Morning Husnain Ali" 

// RANDOM PASSWORD GENERATOR

// const btn = document.querySelector("#btn");
// const password1 = document.querySelector("#pass");

// function randompassword(){
//     let passlength = 14;
//     let empty ="";
//     let password2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}\\|;:',.<>/?`~";

//     for(let i=0;i<passlength;i++){
//     let pass = Math.floor(Math.random()*password2.length)
//     empty+=password2[pass];
//     }

//     return empty;
    
// }

// btn.addEventListener("click",()=>{
//  password1.value=randompassword();
// })
// let btn = document.querySelector("#btn");
// btn.addEventListener("keydown",(e)=>{
// console.log(e.keycode);
// })
// document.querySelector(".childern").addEventListener("click",(e)=>{
//     e.stopPropagation();
//     alert("childern was clicked");
// })

// document.querySelector(".child").addEventListener("click",(e)=>{
//     e.stopPropagation();

//     alert("child is clicked");
// })

// document.querySelector(".container").addEventListener("click",(e)=>{
//     e.stopPropagation();

//     alert("container is clicked");
// })
//  setInterval(document.querySelector("#btn").addEventListener("click"),()=>{
//   document.body.style.backgroundColor="red";
//  },3000);

// setInterval((document.querySelector("#btn").addEventListener("click"),()=>{
//   document.body.style.backgroundColor="red";
//  }),3000);

 function getrandomcolor(){
   let val1 = Math.random()*255;
   let val2 = Math.random()*255;
   let val3 = Math.random()*255;
    
   return `rgba(${val1},${val2},${val3}) `;

 }

setInterval(() => {
    document.style.backgroundColor=getrandomcolor();
}, 3000);