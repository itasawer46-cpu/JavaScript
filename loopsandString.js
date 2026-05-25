// let n = prompt("Enter number : ");
// let sum = 0;
// for(let i=1;i<=n;i++){
//     sum+=i;
// }
// console.log("Sum is  = ",sum);

//For_of loop in javaScript
// let str = "Husnain";
// let length  = 0;
// for(let i of str){
//     console.log(i);
//     length++;
// }
// console.log("Length : ",length);

// const stu = {
//     name : "Faizan Ali",
//     age : 15,
//     cgpa : 8.9,
//     ispass: true
// };

// for(let key in stu){
//     console.log("key : ",key, "values : ",stu[key]);
// }
// for(let i = 1 ; i <= 100 ; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

let gamenum = 56;
let n = prompt("Guess the game number : ");
do{
    n = prompt("You entered wrong number . Guess the game number : ");
}while(n!=gamenum);
if(n==gamenum){
    console.log("Congrtulation .You win this game ")
}