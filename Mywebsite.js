const toggle = document.querySelector("#icon");

const orderlist = document.querySelector("#order-list");
console.log(orderlist);

toggle.addEventListener("click",()=>{
    orderlist.classList.toggle("paper");
})