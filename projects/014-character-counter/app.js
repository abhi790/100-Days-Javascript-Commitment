// Model for the application

const Model = {
  _text: "",

  // set the text only convention true private doesn't exist in javascript
  setText(newText) {
    this._text = newText;
  },

  // get the _text value
  getText() {
    return this._text;
  },
  // get the character count
  getCharCount() {
    return this._text.length;
  },

  //   get the word count
  getWordCount() {
    if (this._text.trim() === "") return 0;
    let words = this._text.trim().split(/\s+/);
    return words.length;
  },
  clearInput() {
    this._text = "";
  },
};

// get the constants
const DOM = {
  textInputEle: document.querySelector("#textInput"),
  clearBtnEle: document.querySelector("#clearBtn"),
  copyBtnEle: document.querySelector("#copyBtn"),
  wordCountEle: document.querySelector("#wordCount"),
  charCountEle: document.querySelector("#charCount"),
};

// seperately handling the UI update
function updateUI() {
  //
  DOM.charCountEle.textContent = Model.getCharCount();
  DOM.wordCountEle.textContent = Model.getWordCount();
}

const eventHandlers = {
  handleClearEvent: function () {
    Model.clearInput();
    DOM.textInputEle.value = "";
    updateUI();
  },
  handleInputChange: function (e) {
    Model.setText(e.target.value);
    updateUI();
  },
  handleCopyEvent: function () {
    navigator.clipboard.writeText(Model._text);
    // copy the original text
    const btn = DOM.copyBtnEle;
    const originalHtml = btn.innerHTML;
    btn.textContent = "✅ Copied!";
    btn.classList.add("copy-feedback");
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = originalHtml;
      btn.classList.remove("copy-feedback");
      btn.disabled = false;
    }, 2000);
  },
};

// set events
function setEventListeners() {
  DOM.clearBtnEle.addEventListener("click", eventHandlers.handleClearEvent);
  DOM.textInputEle.addEventListener("input", eventHandlers.handleInputChange);
  DOM.copyBtnEle.addEventListener("click", eventHandlers.handleCopyEvent);
}

setEventListeners();
updateUI();
