const secondHand = document.getElementById("second-hand");
const minuteHand = document.getElementById("minute-hand");
const hourHand = document.getElementById("hour-hand");
function clockTick() {

    const date = new Date();
    const seconds= date.getSeconds()/60;
    const minutes =(seconds+ date.getMinutes())/60;
    const hours = (minutes + date.getHours())/12;

    rotateclockHand(secondHand, seconds);
    rotateclockHand(minuteHand, minutes);
    rotateclockHand(hourHand, hours);


}
function rotateclockHand(element, rotation){
    element.style.setProperty('--rotate', rotation * 360 );
}
setInterval(clockTick,1000);