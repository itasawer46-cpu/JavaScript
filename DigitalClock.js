const hours = document.querySelector(".hour");
const min = document.querySelector(".minutes");
const sec = document.querySelector(".second");

function updateclock(){
  const currentDate = new Date();
  setTimeout(updateclock,1000);
  const HOURS = currentDate.getHours();
  const MINUTES = currentDate.getMinutes();
  const SECONDS = currentDate.getSeconds();
  
  const hourdeg = (HOURS / 12)*360;
  hours.style.transform = `rotate(${hourdeg}deg)`;
    const minutesdeg = (MINUTES / 60)*360;
  min.style.transform = `rotate(${minutesdeg}deg)`;
    const secondsdeg = (SECONDS / 60)*360;
  sec.style.transform = `rotate(${secondsdeg}deg)`;
}

updateclock();