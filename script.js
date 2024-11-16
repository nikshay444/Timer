let timeBegan = null; //did the clock start
let timeStopped = null; //at what time was the timer stoped
let stopDuration = 0; //how long was the timer stopped
let startInterval = null; //this is needed to stop the setinterval() method
let flag = false; //to control the start /stop of the timer


//access 
let timerBox = document.querySelector(".box");
let timer = document.getElementById("timer");



timerBox.addEventListener("click", () => {
    if (!flag) {
        startTimer();
        flag = true;
    }
    else {
        stopTimer();
        flag = false;
    }
})

timerBox.addEventListener("dblclick", () => {
    resetTimer();
})
const startTimer = () => {
    if (timeBegan === null)
        timeBegan = new Date();
    if (timeStopped !== null) {
        stopDuration+=(new Date() - timeStopped)
    }
    startInterval=setInterval(clockRunning,10)
}
const stopTimer = () => {
    timeStopped = new Date();
    clearInterval(startInterval);
 };

const clockRunning = () => {
    let currentTime = new Date();
    let timeElapsed = new Date(currentTime - timeBegan - stopDuration);

    let minutes = timeElapsed.getUTCMinutes();
    let seconds = timeElapsed.getUTCSeconds();
    let milliseconds = timeElapsed.getUTCMilliseconds();

    milliseconds = Math.floor(milliseconds / 10);
    document.getElementById("timer").innerHTML = (minutes = minutes < 10 ? '0' + minutes : minutes) + ":" + (seconds = seconds < 10 ? '0' + seconds : seconds) + ":" + (milliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds) ;
}
const resetTimer = () => {
    clearInterval(startInterval);
    timeBegan = null;
    timeStopped = null;
    stopDuration = 0;
    document.getElementById("timer").innerHTML = "00:00:00";
    flag = false;
}