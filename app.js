let timer = 0;
let timerInterval;
let ms = document.getElementById('milliseconds');
let second = document.getElementById('mainseconds');
let minute = document.getElementById('mainminute');

function start() {
    stop();
    timerInterval = setInterval(function(){
        timer += 1/60;
       msVal = Math.floor((timer - Math.floor (timer))*100);
       secondVal = Math.floor(timer) - Math.floor (timer/60)*60;
       minuteval = Math.floor (timer/60);
       ms.innerHTML= msVal < 10? "0" + msVal.toString(): msVal;
       second.innerHTML = secondVal < 10? "0" + secondVal.toString() : secondVal;
       minute.innerHTML = minuteVal < 10? "0" + minuteVal.toString() : minuteVal; 
    },100/60);
}

function stop() {
    clearInterval(timerInterval);
}
