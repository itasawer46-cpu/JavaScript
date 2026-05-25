// THIS IS THE EXAMPLE OF ASYNCHORIZE PROGRAMMING IN JS

// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("Hello world");
// }, 3000);
// console.log("three");
// console.log("four");

// CALLBACKS IN JS

// when a function is passed as a argument in another function then it is called CALLBACK

// function sum(a,b){
// console.log("sum is : "+(a+b));
// }
// sum(3,5);
// function another(a,b,sumcallback){
//     sumcallback(a,b);
// }

// another(1,2,sum);

// CALLBACK--HELL IN JS


// function getdata(dataid, getnextdata) {
//     return new Promise((resolve,reject)=>{
//  setTimeout(() => {
//         console.log("data " + dataid);
//         resolve("Success");
//         // reject("error occured");
//         if (getnextdata) {
//             getnextdata();
//         }

//     }, 5000);
//     })
// }

// let p1 = getdata(1);
// p1.then((res)=>{
//     console.log(res);
// })

// getdata(1, () => {
//     getdata(2, () => {
//         getdata(3, () => {
//             getdata(4);
//         });
//     });
// });


// PROMISES IN JS

// let promise = new Promise((resolve,reject)=>{
//     // let i = 2;
//     // if(i==2){
//     //     resolve("promise is fullfilled");
//     // }

//     console.log("I am a promise");
//     reject("promise is reject");
// })

// Promise.catch("hello");

// PROMISES IN JS


// const getpromise = ()=>{
//     return new Promise((resolve,reject)=>{
//     console.log("Hello I am a promise");
//     // reject("some error occured");
//     // resolve("success");
//     reject("Problem occured in your network");
// })
// }
// let promise = getpromise();
// promise.then((res)=>{ //res is automatically a parameter
//     console.log("promise fullfilled",res);
// })

// promise.catch((err)=>{ //err is automatically a parameter
//     console.log("some error occured",err);
// })

// PROMISE CHAINING IN JS

// function async1 (){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data 1");
//             resolve("success");
//         }, 4000);
//     })
// }
// function async2 (){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data 2");
//             resolve("success");
//         }, 6000);
//     })
// }
// console.log("fetching data 1 ...");
// let promise1  = async1();
// promise1.then((res)=>{
//     console.log("congratulation ...",res)
// })
// console.log("fetching data 2 ...");
// let promise2  = async2();
// promise2.then((res)=>{
//     console.log("congratulation ...",res)
// })

// function async1 (){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data 1");
//             resolve("success");
//         }, 4000);
//     })
// }
// function async2 (){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data 2");
//             resolve("success");
//         }, 6000);
//     })
// }
// console.log("fetching data 1 ...");
// let promise1  = async1();
// promise1.then((res)=>{
//     console.log("congratulation ...",res)
// console.log("fetching data 2 ...");
// let promise2 = async2();
// promise2.then(()=>{
//     console.log("congratulation ...",res)
// })

// })


// async and await in js

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("weather data ...");
//             resolve(200);
//         }, 5000);
//     });
// }
// async function getweatherdata() {
//     await api();
//     await api();
// }

// function getdata(dataid) {
//     return new Promise((resolve,reject)=>{
//  setTimeout(() => {
//         console.log("data " + dataid);
//         resolve("Success");
//         // reject("error occured");
//         // if (getnextdata) {
//         //     getnextdata();
//         // }

//     }, 2000);
//     })
// }

// async function getdatacomplete(){
//     await getdata(1);
//     await getdata(2);
//     await getdata(3);

// }

function student(){
    return new Promise((resolve,reject)=>{
     setTimeout(() => {
        for(let i=0;i<5;i++){
        console.log("Student "+i);
        console.log("=======================================");
     }
     resolve("Mission Complete");
     }, 3000);
    })
}

// async function studentinfo(){
//     await student();
//     await student();
// }

(async function(){
    await student();
    await student();
})();   //This is concept of modern js which is IIFES immediatly invoked function expression 