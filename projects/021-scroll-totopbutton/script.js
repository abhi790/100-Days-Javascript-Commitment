const ScrollModel = {
  // state
  _isVisible: false,
  _scrollY: 0,

  // getter and setter methods
  getButtonState() {
    return this._isVisible;
  },
  setButtonState(state) {
    this._isVisible = state;
  },

  getScrollY() {
    return this._scrollY;
  },
  setScrollY(value) {
    this._scrollY = value;
  },
};

const ScrollView = {
  elements: {
    btn: null,
  },

  init: function () {
    this.elements.btn = document.getElementById("scrollTopBtn");
  },

  viewButton: function (isVisible) {
    if (isVisible) {
      this.elements.btn.style.opacity = 1;
      this.elements.btn.style.visibility = "visible";
    } else {
      this.elements.btn.style.opacity = 0;
      this.elements.btn.style.visibility = "hidden";
    }
  },

  updateButton: function (isVisible) {
    this.viewButton(isVisible);
  },
};

const ScrollController = {
  init: function () {
    ScrollView.init();
    ScrollView.updateButton(ScrollModel.getButtonState());
    this.attachEventListeners();
  },

  handlers: {
    handleButtonClick: function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleScroll: function (scrollY) {
      ScrollModel.setScrollY(scrollY);
      ScrollModel.setButtonState(scrollY >= 300);
      ScrollView.updateButton(ScrollModel.getButtonState());
    },
  },

  // attach listeners
  attachEventListeners: function () {
    ScrollView.elements.btn.addEventListener("click", () => {
      this.handlers.handleButtonClick();
    });
    window.addEventListener("scroll", () => {
      this.handlers.handleScroll(window.scrollY);
    });
  },
};

document.addEventListener("DOMContentLoaded", () => {
  ScrollController.init();
});
