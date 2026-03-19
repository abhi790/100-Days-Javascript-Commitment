export const DOM = {
  inputValueEle: document.querySelector("#input"),
  inputUnits: document.querySelectorAll(".input-btn"),
  outputUnits: document.querySelectorAll(".output-btn"),
  swapBtn: document.querySelector(".swap"),
  resetBtn: document.querySelector(".btn-reset"),
  outputValueEle: document.querySelector("#output"),
};

export const INITIAL_STATE = {
  inputValue: "",
  inputUnit: "C",
  outputUnit: "F",
};
