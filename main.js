const body = document.querySelector("body"),
      hourHand = document.querySelector(".hoyr"),
      minuteHand = document.querySelector(".minute"),
      secondHand = document.querySelector(".second"),
      modeSwith = document.querySelector(".mode-swith");
      modeSwith.addEventListener('click', () => {
        body.classList.toggle("dark");
      });
      
const updateTime = () => {
    let date = new Date(),
        secToDeg = (date.getSeconds() / 60) * 360,
        minToDeg = (date.getMinutes() / 60) * 360,
        hrToDeg = (date.getHours() / 12) * 360;
        
secondHand.style.transform = `rotate(${secToDeg}deg)`;
minuteHand.style.transform = `rotate(${minToDeg}deg)`;
hourHand.style.transform = `rotate(${hrToDeg}deg)`;
}
setInterval(updateTime, 1000);

updateTime();