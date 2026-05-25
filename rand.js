//  function randomcolor(){
//     let a = Math.floor(Math.random()*256);
//     let b = Math.floor(Math.random()*256);
//     let c = Math.floor(Math.random()*256);
//   return `rgba(${a},${b},${c})`;

//  }
//  let btn = document.querySelector("#btn").addEventListener("click",()=>{
//     document.body.style.backgroundColor = randomcolor();
//  })

//     let a = document.querySelector(".para");
//  document.querySelector(".inc").addEventListener("click",()=>{
//     let th = a.innerHTML;
//     let updateval = ++th;
//     a.innerHTML = updateval;
//  })
// document.querySelector(".res").addEventListener("click",()=>{
//     let b = 5;
// a.innerHTML = b;
// })
// document.querySelector(".dec").addEventListener("click",()=>{
//     let inner = a.innerHTML;
//     if(inner>=5){
//         let value = --inner;
//         a.innerHTML = value;
//     }
// })

// let a =  document.querySelector(".para");
// console.log(a);
// let b = document.querySelector(".place");
// console.log(b);
// document.querySelector(".btn").addEventListener("click",()=>{
//     let val = b.value;
//     let leng = val.replace(/\s+/g,'').length;
//     console.log(val);
//     console.log(leng);
//     a.innerHTML = leng;
// })

// let array = [10,20,30,40];
// array.forEach(function(item,index){
//     console.log(item,index);
// })

// let obj = {
//     name:"Husnain Ali",
//     age:19,
//     Department:"CS"
// }
// for(let key in obj){
//     console.log(key,obj[key]);
//     console.log();
// }


// let j = 0;
// for(let i=0;i<30;i++){
// for(let k=0;k<=i;k++){
//     j+=10;
// }


// console.log(j);
// }
// let f= j*12;
// console.log(f);

// for (const element of obj) {
//     console.log(element);
// }

// let place = document.querySelector("#place");
// let btn = document.querySelector("#btn");
// let array = [];
// btn.addEventListener("click",()=>{
//     let list = document.querySelector("#unorder");
//     let value = place.value;
//     if(value ==""){
//     alert("please enter a list!")
//     }
//     let a = document.createElement("li");
//     a.innerHTML = value;
//     list.appendChild(a);
//     place.value = "";
//     // let leng = value.length;
//     // console.log(leng);

// })

// let input = document.querySelector(".pass");
// let eye = document.querySelector("#eye");
// let hide = document.querySelector("#hide");

// eye.addEventListener("click",()=>{
//     hide.classList.remove("hide");
//     eye.classList.add("hide");

//     if(input.type ==="password"){
//         input.type = "text";
//     }
//     else{
//         input.type = "password";
//     }
// })

// let text = document.querySelector("#text");
// text.addEventListener("input",()=>{
//     let span = document.querySelector("#span");
//     let spanval =text.value.length;
//     spanval++;
//      span.innerHTML = spanval;
// })
let btn = document.querySelector("#btn");
let question_number = document.querySelector("#span");
let Question = document.querySelector(".Question");
let array = [
    {
        question:"What is the Capital of France ?",
        options : [
          "Berline",
          "Lahore",
          "Karachi",
          "Islamabad"
        ],
        answer:"Berline"
    },
    {
        question:"How is the Creator of pakistan ?",
        options:[
          "Quaid e Azam",
          "Allma Iqbal",
          "Mohsin Naqvi",
          "Hello World"
        ],
        answer:"Quaid e Azam"
    },
    {
      question:"Fastest Animal in the World ?",
      options:[
        "Cheeta",
          "Zebra",
          "Rabit",
          "Lion"
      ],
      answer:"Cheeta"
    }
    
  ];
  let count = 0;
// console.log(array);
// console.log(array.length);
Question.innerHTML = array[0].question;
array[0].options.forEach(element => {
  let btns = document.createElement("button");
  Question.appendChild(btns);
  btns.classList.add("button")
  btns.innerHTML = element;
  console.log(element);
});
function loadquestion(index){
Question.innerHTML = array[index].question;
array[index].options.forEach(element => {
  btns = document.createElement("button");
  Question.appendChild(btns);
  btns.classList.add("button")
  let button = document.querySelector(".button");
  btns.innerHTML = element;
  btns.addEventListener("click",()=>{
    if(element===array[index].answer){
  console.log("hello");
     button.style.backgroundColor = "green";
    button.style.color = "white";
}
if(element!==array[index].answer){
  button.style.backgroundColor = "red";
    button.style.color = "white";
}
  })
});
}

btn.addEventListener("click",()=>{
  count++;
  if(count<array.length){
    question_number.innerHTML++;
    loadquestion(count);
  }
  else{
    alert("invalid Length")
  }
})



// btn.addEventListener("click",()=>{
// currentcount++;
// loadquestion(currentcount);
// let num = span.innerHTML;
// num++
// if(num>array.length){
// num = 0;
// }
// questionno.innerHTML=num;
// })
// question.innerHTML = "";
// currentcount=0;
//   array[currentcount].options.forEach(element => {
//     let button = document.createElement("button");
// button.innerHTML = element;
// question.appendChild(button);
// button.addEventListener("click",()=>{
//   console.log("clicked");
// })
// currentcount++;
//   });





