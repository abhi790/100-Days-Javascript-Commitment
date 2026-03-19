import { state } from "./app.js";
export const utils = {
  convertTemp: function (value, fromUnit, toUnit) {
    value = parseFloat(value);
    if (isNaN(value)) return "";
    let celcius;
    if (fromUnit === "F") {
      celcius = (5 / 9) * (value - 32);
    } else if (fromUnit === "K") {
      celcius = value - 273.155;
    } else {
      celcius = value;
    }
    let result;
    if (toUnit === "K") {
      result = celcius + 273.15;
    } else if (toUnit === "F") {
      result = (celcius * 9) / 5 + 32;
    } else {
      result = celcius;
    }

    return result;
  },

  highlightAllButtons: function () {
    [
      { selector: ".input-btn", unit: state.inputUnit },
      { selector: ".output-btn", unit: state.outputUnit },
    ].forEach((type) => {
      document.querySelectorAll(type.selector).forEach((btn) => {
        if (btn.dataset.unit === type.unit) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
    });
  },
};
