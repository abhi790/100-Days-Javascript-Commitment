const billInput = document.querySelector(".billInput");
const tipValue = document.querySelectorAll(".tip-btn");
const calculateBtn = document.querySelector(".btn-calculate");
const tipDisplay = document.querySelector(".tip-display");
const totalDisplay = document.querySelector(".total-display");

let tipPercentage = 5;

// Event delegation
tipValue.forEach((tip) => {
  tip.addEventListener("click", () => {
    tipPercentage = Number(tip.textContent);
    //   remove class "btn-active" from all tip button
    tipValue.forEach((tip) => tip.classList.remove("btn-active"));
    //   add btn-active class to particular button where click happend
    tip.classList.add("btn-active");
    displayResult();
  });
});
function displayResult() {
  const bill = Number(billInput.value);
  const tip = (bill * tipPercentage) / 100;
  //   display tip
  tipDisplay.textContent = `$${tip.toFixed(2)}`;

  //   display total
  const total = bill + tip;
  totalDisplay.textContent = `$${total.toFixed(2)}`;
}

calculateBtn.addEventListener("click", () => {
  try {
    displayResult();
  } catch (err) {
    console.log(err.message);
  }
});
