import { DOM, INITIAL_STATE } from "./constants.js";
import { utils } from "./utils.js";

// 1. Defining state for the app

// state variable
export let state = {
  ...INITIAL_STATE,
};

const handleEvents = {
  handleInputChangeEvent: function (e) {
    state.inputValue = e.target.value;
    if (state.inputValue !== "") renderApp();
  },
  handleInputUnitClickEvent: function (e) {
    state.inputUnit = e.target.dataset.unit;
    renderApp();
  },
  handleOutputUnitClickEvent: function (e) {
    state.outputUnit = e.target.dataset.unit;

    renderApp();
  },
  handleSwapClickEvent: function (e) {
    let temp = state.inputUnit;
    state.inputUnit = state.outputUnit;
    state.outputUnit = temp;
    renderApp();
  },
  handleResetClickEvent: function (e) {
    // console.log("handleResetClickEvent");
    state = { ...INITIAL_STATE };
    DOM.inputValueEle.value = "";
    DOM.outputValueEle.value = "";
    renderApp();
  },
};

function attachEvents() {
  DOM.inputValueEle.addEventListener(
    "input",
    handleEvents.handleInputChangeEvent,
  );
  DOM.inputUnits.forEach((inputUnit) => {
    inputUnit.addEventListener("click", handleEvents.handleInputUnitClickEvent);
  });
  DOM.outputUnits.forEach((outputUnit) => {
    outputUnit.addEventListener(
      "click",
      handleEvents.handleOutputUnitClickEvent,
    );
  });
  DOM.swapBtn.addEventListener("click", handleEvents.handleSwapClickEvent);
  DOM.resetBtn.addEventListener("click", handleEvents.handleResetClickEvent);
}

// render app - update DOM
function renderApp() {
  if (state.inputValue === "") {
    DOM.inputValueEle.value = "";
    DOM.outputValueEle.value = "";
    utils.highlightAllButtons();
    return;
  }

  const result = utils.convertTemp(
    state.inputValue,
    state.inputUnit,
    state.outputUnit,
  );
  DOM.outputValueEle.value = result.toFixed(2);
  utils.highlightAllButtons();
}

// initializing app first time
function initApp() {
  renderApp();
  attachEvents();
  //   console.log("app initialize");
}

initApp();
