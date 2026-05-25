// let a = prompt("Enter first number ");
// let b = prompt("Enter second number ");
// if(isNaN(a) || isNaN(b)){
//     throw SyntaxError(("This is not valid ..."));
    
// }
// let sum = parseInt(a) + parseInt(b);
// function main(){
// let x= 1;
// try {
//     console.log("The sum is ",sum*x);
//     return true;
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
//     console.log("Some error occured");
//     return false;
// }
// finally{
//     console.log("Files are closed");
// }
// }
// main();

// let animal = {
//     eats : true
// };
// let rabbit = {
//     jump : true
// };

// rabbit.__proto__=animal;

class Animal{
    constructor(name){
        console.log("I am a constructer");
        console.log("Animal ",name);
    }
    eats(){
        console.log("Eating");
    }
    jump(){
        console.log("jumpimg ");
    }
}

// class Lion extends Animal{
//     constructor(name){
//         super();
//         console.log("I am a Lion constructer");
//         console.log(name);
//     }
//     Roar(){
//         console.log("Lion is roar");
//     }
// }

// let a = new Animal("zabra");
// console.log(a);
// a.eats();
// a.jump();
// let l = new Lion("Sher");
// l.eats();
// l.jump();
// l.Roar();

// class info{
//     constructor(){
//         console.log("I am info constructer");
//     }
//     get name(name){
//         this.name=name;
//     }
//     set name(){
//         return this.name;
//     }
// }

// let obj = {
//     name :"Husnain Ali",
//     age :19,
//     marks :95,
//     printmarks : (name)=>{
//         console.log("marks ",this.marks);
//         console.log("name ",this.name);
//     }
// }

// let obj1 = {
//     employeename : "Ali",
//     salary:45000,
// }
// let info = obj.printmarks("Husnian Ali");
// console.log(info);
// obj1.__proto__=obj;

class person{
    constructor(happy){
      this.happy = happy;
      console.log("Happy ",happy);
    }
    info(name,age,gender){
     console.log("name ",name);
     console.log("age ",age);
     console.log("gender ",gender);
    }
}
class employee extends person{
    constructor(){
        super();
        console.log("Happy : ",happy);
    }
    salary(sal){
        console.log("Salary of employee is : ",sal);
    }
    eat(){
        console.log("Employee eats lunch ");
    }
}
let per = new person("yes");
per.info("husnain",19,"male");
let emp = new employee();
emp.salary(23000);
emp.eat();
emp.info("ayesha",34,"female");

class con{
    constructor(name){
        this.name = name;
        console.log("Name ",name);
    }
}

let con1 = new con("Husnian");
let con2 = new con("Fahad");
let con3 = new con("Umair");