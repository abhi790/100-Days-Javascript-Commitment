const changeColor = document.querySelector(".btn-change-color");
const hexCodeDisplay = document.querySelector(".hexCode");

const hexNumberArray = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function generateRandomHex() {
  let hexString = "#";
  let count = 0;
  while (count < 6) {
    hexString +=
      hexNumberArray[Math.floor(Math.random() * hexNumberArray.length)];
    count++;
  }
  return hexString;
}

changeColor.addEventListener("click", () => {
  const randomHex = generateRandomHex();
  window.document.body.style.backgroundColor = randomHex;
  hexCodeDisplay.textContent = randomHex;
  hexCodeDisplay.style.backgroundColor = randomHex;
});

//   copy to clipboard functionality when hexcodedisply is click
hexCodeDisplay.addEventListener("click", () => {
  navigator.clipboard.writeText(hexCodeDisplay.textContent);

  // Show feedback
  const feedback = document.createElement("span");
  feedback.textContent = "Copied";
  feedback.classList.add("copy-feedback");
  hexCodeDisplay.appendChild(feedback);
  setTimeout(() => feedback.remove(), 1500);
});
