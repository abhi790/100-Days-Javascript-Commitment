// Version 1.0.0 is ready to push to dev branch

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
const TICK_PER_SECOND = 10;
const MAX_COUNTER = 24 * 60 * 60 * TICK_PER_SECOND;
const INTERVAL_DURATION = 100;
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
      seconds = Math.floor(counter / TICK_PER_SECOND) % 60;
      minutes = Math.floor(counter / (60 * TICK_PER_SECOND)) % 60;
      hours = Math.floor(counter / (3600 * TICK_PER_SECOND)) % 60;
      milliseconds = (counter % TICK_PER_SECOND) * 10;

      if (counter > MAX_COUNTER) {
        stopTimer();
        return;
      }
      updateUI();
    }, INTERVAL_DURATION);
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
