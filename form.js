let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirm = document.querySelector("#confirm_password");
// let passwordvalue = document.querySelector(".password_value")
let sign_btn = document.querySelector(".sign-in");
console.log("==========================================")
let eye = document.querySelector(".eye");
let hide_eye = document.querySelector(".hide_eye");
console.log("==========================================")
let eye1= document.querySelector(".eye1");
let eye2 = document.querySelector(".hide_eye2");
let message = document.querySelector("#msg");
console.log(message);

sign_btn.addEventListener("click",()=>{
    let emailvalue = email.value;
    if(emailvalue==""){
        email.placeholder = "Please Enter Email"
    }
   else if(!emailvalue.includes('@') || !emailvalue.includes('.')){
        email.value="";
     email.style.border = "2px solid red";
     email.placeholder = "invalid email";
    }
    
     if(password.value==""){
            password.placeholder = "Please Enter password"
        }
    else if(password.value.length<8){
        password.value = "";
        password.placeholder = "invalid Password Length";
    }
     else if(confirm.value==""){
            confirm.placeholder = "Please Enter password"
        }
    else if(confirm.value.length<8){
        confirm.value = "";
        confirm.placeholder = "invalid Password Length";
    }
    else if(password.value!==confirm.value){
        message.innerHTML= "Password Does not match";
        message.style.color = "red";
    }
    if(password.value===confirm.value && emailvalue.includes('@') && emailvalue.includes('.')){
      
message.innerHTML = "Your Account is Created Successfully "
message.style.color = "green";
    }
})
hide_eye.addEventListener("click",()=>{
    if( password.type = "password"){
        password.type = "text";
          eye.style.display = "block";
        hide_eye.style.display = "none";    
    }
})
eye.addEventListener("click",()=>{
 if(password.type ="text"){
        password.type = "password";
         eye.style.display = "none";
        hide_eye.style.display = "block";
    }
})
eye2.addEventListener("click",()=>{
    if( confirm.type = "password"){
        confirm.type = "text";
          eye1.style.display = "block";
        eye2.style.display = "none";    
    }
})
eye1.addEventListener("click",()=>{
 if(confirm.type ="text"){
        confirm.type = "password";
         eye1.style.display = "none";
        eye2.style.display = "block";
    }
})