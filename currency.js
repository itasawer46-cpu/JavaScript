const BASE_URL= "https://api.currencyapi.com/v3/latest?apikey=cur_live_9X7en0fSflInKqG2jGgUaVEfItUaLHqeEvZ3XIGi";

const dropdown = document.querySelectorAll(".child-container select");

const btn = document.querySelector("#exchange-rate");
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");
for(let select of dropdown){
    for(currcode in countryList){
   let newoption = document.createElement("option");
   newoption.innerText = currcode;
   newoption.value = currcode;
   if(select.name ==="from" && currcode==="USD"){
    newoption.selected = "selected";
   }
   else if(select.name ==="to" && currcode==="PK"){
    newoption.selected = "selected";
   }
   
   select.append(newoption);
}
select.addEventListener("change",(evt)=>{
Updateflag(evt.target);
})

}

const Updateflag = (element)=>{
let currCode = element.value;
let countrycode = countryList[currCode];
let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
let image = element.parentElement.querySelector("img");
image.src = newsrc;
}

btn.addEventListener("click",async (evt)=>{
evt.preventDefault();
let amount = document.querySelector(".amount input");

let amtval = amount.value;
if(amtval ==="" || amtval<1){
amtval = 1;
amount.value = "1";
}
// console.log(fromcurr.value);
// console.log(tocurr.value);
const URl = `${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
let response = await fetch(URl);
let data = await response.json;
console.log(data);

})