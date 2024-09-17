let secondsElaps = 0;
let intervel = null;
const time = document.getElementById("time");

function padStart(value){
    return String(value).padStart(2, "0");
}
function setTime(){
    const minutes = Math.floor(secondsElaps / 60);
    const seconds = secondsElaps % 60;
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer(){
    secondsElaps++;
    setTime();
}

function startClock(){
    if(intervel) stopClock()
    intervel = setInterval(timer, 1000);
}

function stopClock(){
  clearInterval(intervel)
}

function resetClock(){
    stopClock();
    secondsElaps = 0;
     setTime();

}