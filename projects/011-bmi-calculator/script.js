let isMetric = true;
let BMI;
const chooseMetrics = document.querySelector(".choose-metrics");
const calculateBtn = document.querySelector(".btn-calculate");
const bmiEl = document.querySelector(".bmi");
const decisionEl = document.querySelector(".decision");
const resultEl = document.querySelector(".result-container");
const categoryCont = document.querySelector(".category-container");
const inputContainer = document.querySelector(".input-container");
const decisionObj = ["underweight", "normal", "overweight", "obese"];

const metrics = document.querySelector(".btn-metric");
const imperial = document.querySelector(".btn-imperial");

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
  if (BMI < 18.5) {
    updateColor(decisionObj[0]);
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    updateColor(decisionObj[1]);
  } else if (BMI >= 25.0 && BMI <= 29.9) {
    updateColor(decisionObj[2]);
  } else {
    updateColor(decisionObj[3]);
  }
}

function calculateBMI() {
  if (isMetric) {
    const heightInput = document.querySelector("#height");
    const weightInput = document.querySelector("#weight");

    const heightInMeter = Number(heightInput.value) / 100;
    const weight = Number(weightInput.value);
    BMI = Number((weight / (heightInMeter * heightInMeter)).toFixed(2));
  } else {
    const heightFootInput = document.querySelector("#height-foot");
    const heightInchesInput = document.querySelector("#height-inch");
    const weightInput = document.querySelector("#weight-lbs");

    const heigthInFootInch =
      Number(heightFootInput.value) * 12 + Number(heightInchesInput.value);
    const weight = Number(weightInput.value);
    BMI = Number(
      ((weight / (heigthInFootInch * heigthInFootInch)) * 703).toFixed(2),
    );
  }

  updateUI();
}
const metricsContainer = document.createElement("div");

function showImperialInput() {
  isMetric = false;
  metricsContainer.className = "imperial";
  metricsContainer.innerHTML = `<div class="cont weight-container">
              <label for="weight">Weight(lbs)</label>
              <input
                type="number"
                id="weight-lbs"
                placeholder="00"
                step="1"
                value="100"
              />
            </div>
            <div class="cont height-container">
  <label for="height-foot">Height (ft / in)</label>
  <div class="height-inputs">
    <input type="number" id="height-foot" placeholder="5" value="5" />
    <input type="number" id="height-inch" placeholder="7"  value="5"/>
  </div>
</div>`;
  inputContainer.insertAdjacentElement("beforeend", metricsContainer);
}
function showMetricsInput() {
  isMetric = true;
  metricsContainer.className = "metrics";
  metricsContainer.innerHTML = `<div class="cont weight-container">
              <label for="weight">Weight(Kg)</label>
              <input
                type="number"
                id="weight"
                placeholder="00"
                step="1"
                value="45"
              />
            </div>
            <div class="cont height-container">
              <label for="Height">Height(cm)</label>
              <input
                type="number"
                id="height"
                placeholder="00"
                step="1"
                value="155"
              />
            </div>`;
  inputContainer.insertAdjacentElement("beforeend", metricsContainer);
}

calculateBtn.addEventListener("click", calculateBMI);
metrics.addEventListener("click", showMetricsInput);
imperial.addEventListener("click", showImperialInput);

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
    category.classList.add("category", decisionObj[i]);
    category.innerHTML = `<div class="category">
                  <h3 class="name">${decisionObj[i]}</h3>
                  <hr class="horizontal">
                  <p class="value"> ${obj[i].range}</p>
              </div>`;
    categoryCont.insertAdjacentElement("beforeend", category);
  });
}

showMetricsInput();
calculateBMI();
showCategory();
