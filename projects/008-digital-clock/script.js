const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const periodEl = document.querySelector(".period");
const dateEl = document.querySelector(".date");
const btn12 = document.querySelector(".btn-12");
const btn24 = document.querySelector(".btn-24");
let is24Hours = false;

function updateClock() {
  // console.log(is24Hours);

  const now = new Date();
  let minutes = now.getMinutes();
  let second = now.getSeconds();
  hours = now.getHours();
  let period = "";
  if (!is24Hours) {
    period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
  }
  hoursEl.textContent = String(hours).padStart(2, 0);
  minutesEl.textContent = String(minutes).padStart(2, 0);
  secondsEl.textContent = String(second).padStart(2, 0);
  periodEl.textContent = period;
}
updateClock();
setInterval(() => {
  updateClock();
}, 1000);
function updateDate() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const now = new Date();
  let date = now.getDate();
  let year = now.getFullYear();
  let monthName = monthNames[now.getMonth()];
  const day = days[now.getDay()];
  dateEl.textContent = `${day}, ${monthName} ${date}, ${year}`;
}
updateDate();

//   button format event listeners
btn12.addEventListener("click", () => {
  is24Hours = false;
  btn12.classList.add("active");
  btn24.classList.remove("active");
  updateClock();
});

btn24.addEventListener("click", () => {
  is24Hours = true;
  btn24.classList.add("active");
  btn12.classList.remove("active");
  updateClock();
});
