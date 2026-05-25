// function hello(fullname,number){
//     console.log(`Name is :fullname \n Number is :number`);
//     console.log("Hello World\n");
//     console.log("We are learing JS");

// }
// hello("Husnain Ali",1312);//argumet 

// function sum(a,b){
//     return a+b;
// }
// console.log("Sum is : ",sum(1,3));

// function pom(){
//     console.log("Mini Calculator");
//     let a = Number(prompt("Enter First number : "));
//     let b = Number(prompt("Enter Second number : "));
//     let num =  (a+b);
//     return num;
// }
// console.log("Sum : ",pom());
// let fin = (a,b)=>{
//     console.log(a+b);
// }
// console.log(fin(5,4));
//Modern Functions
// let multiply = (a,b)=>{
//    let n1 = Number(prompt("Enter First Number : "));
//    let n2 = Number(prompt("Enter second Number : "));
//    return n1*n2;
// }
// console.log("Multiplication is : ",multiply());

function fun(name){
    let count = 0;
    for(let i=0;i<name.length;i++){
        if(name[i]=='A' ||name[i]=='E' ||name[i]=='I' ||name[i]=='O' ||name[i]=='U' || name[i]=='a' || name[i]=='e' || name[i]=='i' || name[i]=='o' || name[i]=='u'){
            count++;
        }
    }
    console.log("Vowels are : ",count);
}