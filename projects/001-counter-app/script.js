let counter = 0;
const displayText = document.querySelector(".display");
const decreaseBtn = document.querySelector(".btn-decrease");
const resetBtn = document.querySelector(".btn-reset");
const increaseBtn = document.querySelector(".btn-increase");
decreaseBtn.addEventListener("click", () => {
  counter--;
  displayCounter();
});
increaseBtn.addEventListener("click", () => {
  counter++;
  displayCounter();
});
resetBtn.addEventListener("click", () => {
  counter = 0;
  displayCounter();
});

function displayCounter() {
  // Set the counter value first
  displayText.textContent = counter;
  // remove all the color classes first
  displayText.classList.remove("text-black", "text-green", "text-red");
  // set color based on counter value
  let colorClass = "text-black";
  if (counter < 0) {
    colorClass = "text-red";
  } else if (counter > 0) {
    colorClass = "text-green";
  }
  displayText.classList.add(colorClass);
}
