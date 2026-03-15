const isMetric = true;
let decision = "normal";
let BMI;
const chooseMetrics = document.querySelector(".choose-metrics");
const calculateBtn = document.querySelector(".btn-calculate");
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const bmiEl = document.querySelector(".bmi");
const decisionEl = document.querySelector(".decision");
const resultEl = document.querySelector(".result-container");
const categoryCont = document.querySelector(".category-container");
const decisionObj = ["underweight", "normal", "overweight", "obese"];

function updateColor(value) {
  decisionEl.textContent = value;
  resultEl.classList.add(value);
}

function removeClasses() {
  decisionObj.forEach((value) => {
    resultEl.classList.remove(value);
  });
}
function updateUI() {
  bmiEl.textContent = BMI;
  removeClasses();
  if (BMI <= 18.5) {
    updateColor(decisionObj[0]);
  } else if (BMI > 18.5 && BMI <= 25.0) {
    updateColor(decisionObj[1]);
  } else if (BMI > 25.0 && BMI <= 30.0) {
    updateColor(decisionObj[2]);
  } else if (BMI > 30.0) {
    updateColor(decisionObj[3]);
  }
}

function calculateBMI() {
  if (isMetric) {
    const heightInMeter = Number(heightInput.value) / 100;
    const weight = Number(weightInput.value);
    BMI = Number((weight / (heightInMeter * heightInMeter)).toFixed(2));
  } else {
    const heigthInInch = Number(heightInput.value) / 100;
    const weight = Number(weightInput.value);
    BMI = Number((weight / (heightInMeter * heightInMeter)).toFixed(2));
  }

  updateUI();
}

calculateBtn.addEventListener("click", calculateBMI);

function showCategory() {
  const obj = [
    {
      value: decisionObj[0],
      color: "",
      range: "< 18.4",
    },
    {
      value: decisionObj[1],
      color: "",
      range: "18.5 - 24.9",
    },
    {
      value: decisionObj[2],
      color: "",
      range: "25.0 - 29.9",
    },
    {
      value: decisionObj[3],
      color: "",
      range: ["> 30"],
    },
  ];

  obj.forEach((ob, i) => {
    const category = document.createElement("div");
    category.innerHTML = `<div class="category">
                  <h3 class="name">${decisionObj[i]}</h3>
                  <hr class="horizontal">
                  <p class="value"> ${obj[i].range}</p>
              </div>`;
    category.classList.add(decisionObj[i]);
    categoryCont.insertAdjacentElement("beforeend", category);
  });
}
calculateBMI();
showCategory();
