let state = {
  // password length
  passwordLength: 8,

  // tracking checkboxes tick /untick
  isUppercase: false,
  isLowercase: false,
  isNumber: false,
  isSymbol: false,
};
//   constant define
const DOM = {
  generateBtn: document.querySelector(".generate-btn"),
  passwordLengthEl: document.querySelector("#password-length"),
  checkboxesEl: document.querySelectorAll(".checkbox"),
  lengthIndicator: document.querySelector(".length-indicator"),
  displayEle: document.querySelector(".display-result"),
};
const eventListeners = {
  handlePasswordLenghtChange: function (e) {
    state.passwordLength = Number(e.target.value);
    DOM.lengthIndicator.textContent = state.passwordLength;
    //   console.log("Password length", e.target.value);
  },
  handleGeneratePasswordEvent: function (e) {
    const length = state.passwordLength;
    let password = "";
    for (let i = 0; i < length; i++) {
      password +=
        passwordString[Math.floor(Math.random() * passwordString.length)];
    }
    DOM.displayEle.textContent = password;
  },
  handleCheckboxEvent: function (e) {
    console.log(e.target.dataset.char);
    const element = e.target.dataset.char;

    if (element === "uppercase") {
      state.isUppercase = !state.isUppercase;
    } else if (element === "lowercase") {
      state.isLowercase = !state.isLowercase;
    } else if (element === "numbers") {
      state.isNumber = !state.isNumber;
    } else {
      state.isSymbol = !state.isSymbol;
    }
    console.log(state);
  },
};
function renderApp() {}

const passwordString =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:";
function attachEventListeners() {
  DOM.passwordLengthEl.addEventListener(
    "input",
    eventListeners.handlePasswordLenghtChange,
  );
  DOM.generateBtn.addEventListener(
    "click",
    eventListeners.handleGeneratePasswordEvent,
  );
  DOM.checkboxesEl.forEach((checkbox) => {
    checkbox.addEventListener("click", eventListeners.handleCheckboxEvent);
  });
}
attachEventListeners();
DOM.lengthIndicator.textContent = state.passwordLength;
