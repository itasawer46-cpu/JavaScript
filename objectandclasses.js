// const student = {
//     fullname : "Husnain Ali",
//     marks:70,
//     printinfo(){
//         console.log("Name : ",this.fullname);
//         console.log("Marks : ",this.marks);
//     }
// }

// const employee = {
//     caltax(){
//         console.log("Tax is 10 %");
//     }
// }

// const ali = {
//     salary : 35000,
//     caltax(){
//         console.log("Tax is 20 %");
//     }
// }
// ali.__proto__= employee;

// class car{
//     constructor(name,price){
//         console.log("New Object is created ...");
//         console.log("Name is : ",name);
//         console.log("Price is : ",price);
//     }
//     start(){
//         console.log("Car is start");
//     }

//     stop(){
//         console.log("Car is stop");
//     }
//     setbrand(brand){
//      this.brand = brand;
//      console.log("Brand is : ",brand);
//     }
// }

// let fortuner = new car("Fortuner",290000);
// fortuner.setbrand("BMW");
// let mercury = new car("Mercury",500000);

// class car {
//     salary = 23000;
//     name = "Husnain Ali";
//     constructor(){
//     console.log("Name is : ",name);
//     console.log("Salary : ",salary);
//     }
// }
class person{
    name = "Husnain Ali";
    age = 34;
}
class student extends person{
    marks = 78;
    city = "Lahore";
    display(){
    console.log("Name : ",this.name);
    console.log("Age : ",this.age );
    console.log("City : ",this.city);
    console.log("Marks : ",this.marks );

    }
}
class Husnain extends student{
    relation = "None";
    displayHus(name){
        console.log("Relation : ",this.relation);
        console.log("Name : ",name);
    }
}

let students  = new student();
students.display();
let Faizan = new Husnain();
Faizan.displayHus("Faizan Ali");