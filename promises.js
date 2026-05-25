let p = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
      resolve("You can resolve this");
    }
    else{
        reject("you cannot resolve this");
    }
})

console.log(p);