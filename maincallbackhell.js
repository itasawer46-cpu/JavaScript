const { error } = require("console");
const fs = require("fs")
console.log("Starting ... ");
// fs.writeFileSync("husnain.txt","Good Morning ...")
fs.writeFile("Husnain2.txt","Good Evening",()=>{
    console.log("Done")
    fs.readFile("Husnain2.txt",(error,data)=>{
        console.log(error,data.toString());
    })
//     fs.writeFile("Husnain2.txt","Good afternoon",()=>{
//     console.log("Done")
//     fs.readFile("Husnain2.txt",(error,data)=>{
//         console.log(error,data.toString());
//     })
// })
fs.appendFile("husnain.txt","Husnain Ali",(e,d)=>{
    console.log(d);
})
})
console.log("Ending .... ");