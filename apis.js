// const btn = document.querySelector("#btn");
// const para = document.querySelector("#para");
// const URL = "https://catfact.ninja/fact";
// // async awaits ....................

// const getdata = async()=>{
// console.log("Getting Data ....");
// let response =await fetch(URL,{
//     method: "POST",
//     header
// });
// let data =await response.json();
// setTimeout(() => {
//     para.innerText=data.fact;
// }, 1000);
// console.log("Getting This data");
// }

//promise chanings .................

// function pro(){
//     fetch(URL).then((response)=>{
//     return response.json();
//     }).then((data)=>{
//         console.log(data.length);
//       para.innerText = data.fact;
//     })

// }
// btn.addEventListener("click",getdata);