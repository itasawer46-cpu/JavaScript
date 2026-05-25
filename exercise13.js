let para1 = document.querySelector("#para1");
let para2 = document.querySelector("#para2");
let para3 = document.querySelector("#para3");
let para4 = document.querySelector("#para4");
let para5 = document.querySelector("#para5");
console.log(para1);
let obj = [
    {para1 :"Initializing Hacking ..."},
   { para2 :"Reading Yours Files ..."},
    {para3 :"Password files detected ..."},
    {para4 :"Sending all Password and personal files to server ..."},
    {para5 :"Cleaning Up ..."}
];
function getdata(dataval){
    return new Promise((resolve)=>{
setTimeout(() => {
    console.log(Object.values(dataval)[0]);
    resolve();
}, 2000);
    });
}

async function getcompletedata(){
    await getdata(obj[0]);
    await getdata(obj[1]);
    await getdata(obj[2]);
    await getdata(obj[3]);
    await getdata(obj[4]);
}
let promise=getcompletedata();
document.body.innerText = promise;