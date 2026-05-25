const para = document.querySelector("#para1");

let i=false;

if(false){
    para.addEventListener("mouseover",()=>{
    para.innerText=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam consectetur temporibus alias reiciendis accusamus nemo sapiente veritatis id minus saepe repellendus, iste consequatur?";
})
}
else{
    para.addEventListener("mouseover",()=>{
        para.innerText=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati libero deleniti numquam ducimus harum dolorem, ex voluptate veniam maxime totam atque aut? Consectetur obcaecati illum itaque iste veritatis! Dolore, soluta quisquam! Molestias praesentium earum placeat qui cumque, sit odio, esse, non odit corrupti officia harum corporis incidunt? Eaque unde quod architecto inventore! Porro reprehenderit quaerat dolore!"
    })
}