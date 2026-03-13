//creating references for dom elements by classes and ids
const btnStop = document.querySelector(".btn-stop");
const btnStart = document.querySelector(".btn-start");
const btnReset = document.querySelector(".btn-reset");
const secondsEL = document.querySelector(".seconds");
const minutesEL = document.querySelector(".minutes");
const hoursEl = document.querySelector(".hours");
const milisecondsEl = document.querySelector(".miliseconds");
// Global variable to access from everywhere
let intervalId = null;
let isRunning = false;
let counter = 0;
let seconds = 0;
let minutes = 0;
let milliseconds = 0;
function pad(n) {
  return String(n).padStart(2, 0);
}
function updateUI() {
  milisecondsEl.textContent = pad(Math.floor(milliseconds));
  secondsEL.textContent = pad(Math.floor(seconds));
  minutesEL.textContent = pad(Math.floor(minutes));
  hoursEl.textContent = pad(Math.floor(hours));
}
function startTimer() {
  if (!isRunning) {
    isRunning = true;
    intervalId = setInterval(() => {
      counter++;
      seconds = Math.floor(counter / 10) % 60;
      minutes = Math.floor(counter / 600) % 60;
      hours = Math.floor(counter / 36000) % 60;
      milliseconds = (counter % 10) * 10;
      updateUI();
      if (counter > 863999) {
        console.log(counter);
        resetTimer();
      }
    }, 100);
  }
}
function stopTimer() {
  clearInterval(intervalId);
  isRunning = false;
  intervalId = null;
}
function resetTimer() {
  clearInterval(intervalId);
  resetState();
  isRunning = false;
  intervalId = null;
  updateUI();
}
function resetState() {
  counter = 0;
  minutes = 0;
  seconds = 0;
  hours = 0;
  milliseconds = 0;
}
// adding event listeners to start, stop and reset button
btnStart.addEventListener("click", startTimer);
btnStop.addEventListener("click", stopTimer);
btnReset.addEventListener("click", resetTimer);
