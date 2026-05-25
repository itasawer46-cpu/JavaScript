// let URL = "https://api.thecatapi.com/v1/images/search?limit=10";
// let btn = document.querySelector("#btn");
// let image = document.querySelector("#cat-image");
// async function getcatimage() {
//     console.log("Fetching Data");
//     let res = await fetch(URL);
//     let data = await res.json();
//     for(let i=0;i<10;i++){
// image.src = data[i].url;
//     }
// }
// btn.addEventListener("click",getcatimage);

// Q # 1

// let promise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Hello Husnain Ali")
//     }, 2000);
// })

// promise.then((res)=>{
//     console.log(res);
// }).catch(()=>{
//     console.log("error");
// })

// Q # 2

// let a =prompt("Enter a number : ");
// let something = new Promise((resolve,reject)=>{
// if(a>10){
//     resolve("Number is Greater ..");
// }
// else{
//     reject("Not Greater");
// }
// })

// something.then(anyargument=>console.log(anyargument))
// .catch((error)=>{
//     console.log(error);
// })

// Q # 3

// Promise.resolve(2).then((number)=>{
// return number*2;
// }).then((number)=>{
//     return number+5;
// }).then((result)=>{
//     console.log("Final number is : ",result);
// })


// Q # 4

// function getinfo(){
//     return new Promise((resolve,reject)=>{
//      setTimeout(() => {
//         resolve({name:"Husnain Ali",age:19});
//      }, 1000);
//     })
// }
// getinfo().then((user=>{
//     console.log(user);
// }))

// Q # 5

// function getinfo(){
// return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve({name:"Husnain Ali",age:19})    
//     }, 2000);
// })
// }
// async function a() {
//     let user = await getinfo();
//     console.log(user);
//     console.log(user.name);
// }
// a();

// Q # 6

// function randomSuccess(){
//     return new Promise((resolve,reject)=>{
//         let success = Math.random() > 0.5;
//         setTimeout(() => {
//             if(success){
//                 resolve("Success !");
//             }
//             else{
//                 reject("Failed !");
//             }
//         }, 1000);
//     });
// }
// randomSuccess().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// Q # 7

// let p1 = Promise.resolve("A");
// let p2 = Promise.reject("B");
// let p3 = Promise.resolve("C");

// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log("error");
// })

// let div = document.createElement("div");

// div.innerHTML = "Good Morning";
// console.log(div.innerHTML);
// document.body.appendChild(div);
// let el = div.classList.add("Joker");
// el.innerText = "Hello";

// let btn = document.querySelector("#btn");
// let container = document.querySelector("#container");
// console.log(container);

// btn.addEventListener("click",function(){
// for(let i=1;i<=5;i++){
//     let div = document.createElement("div");
//     div.innerText = "This is div"+i;
//     container.appendChild(div);
// }
// });
// let input = document.querySelector("#input");
// console.log(input);
// let btn = document.querySelector("#btn");
// console.log(btn);
// let list = document.querySelector("#list");
// console.log(list);

// btn.addEventListener("click",()=>{
//     let value = input.value;
//     let li = document.createElement("li");
//     li.innerText = value;
//     list.appendChild(li);
//     input.value = "";
// })


" =======================      Destructing      ============================";

// let arr = [1,2,3,4,5,6,7,8,9];
// let [a,b,c,...remain] = arr;
// console.log(a,b,c);
// console.log(...remain);

// let arr = [10];
// let [a,b=50] = arr;
// console.log(a,b);

// object Destructring 

// let user = {name:"Ali",age:19};
// let {name,age} = user;
// console.log(user);
