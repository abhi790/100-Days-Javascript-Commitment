const NavModel = {
  _isOpen: false,

  toggle: function () {
    this._isOpen = !this._isOpen;
  },
  getOpen: function () {
    return this._isOpen;
  },
  setOpen: function (open) {
    this._isOpen = open;
  },
};

const NavView = {
  elements: {
    hamburger: null,
    overlay: null,
    navlinks: null,
    drawer: null,
  },

  init: function () {
    this.elements.hamburger = document.querySelector("#hamburger");
    this.elements.overlay = document.querySelector("#overlay");
    this.elements.navlinks = document.querySelectorAll(".nav-link");
    this.elements.drawer = document.querySelector("#drawer");
  },

  updateUI: function (isOpen) {
    this.elements.hamburger.classList.toggle("is-open");
    this.elements.drawer.classList.toggle("is-open");
    this.elements.overlay.style.opacity = isOpen ? "1" : "0";
    this.elements.overlay.style.visibility = isOpen ? "visible" : "hidden";
  },
};

const NavController = {
  init: function () {
    NavView.init();
    this.attachEventListeners();
  },

  handlers: {
    handleHamburgerClick: function () {
      NavModel.toggle();
      NavView.updateUI(NavModel.getOpen());
    },

    handleOverlayClick: function () {
      NavModel.toggle();
      NavView.updateUI(NavModel.getOpen());
    },

    handleMenuClick: function () {
      NavModel.toggle();
      NavView.updateUI(NavModel.getOpen());
    },
  },

  attachEventListeners: function () {
    NavView.elements.hamburger.addEventListener(
      "click",
      this.handlers.handleHamburgerClick,
    );

    NavView.elements.overlay.addEventListener(
      "click",
      this.handlers.handleOverlayClick,
    );

    NavView.elements.navlinks.forEach((nav) => {
      nav.addEventListener("click", this.handlers.handleMenuClick);
    });
  },
};
document.addEventListener("DOMContentLoaded", () => {
  NavController.init();
});
