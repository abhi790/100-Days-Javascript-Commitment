const StarModel = {
  _selectedRating: 0,

  getSelectedRating() {
    return this._selectedRating;
  },
  setSelectedRating(value) {
    this._selectedRating = value;
  },
};

const StarView = {
  elements: {
    allStarsEle: null,
    textEle: null,
  },

  init() {
    this.elements.allStarsEle = document.querySelectorAll(".star");
    this.elements.textEle = document.querySelector(".rating-text");
  },
  removeActiveClass() {
    this.elements.allStarsEle.forEach((star) =>
      star.classList.remove("active"),
    );
  },
  highlightStars(length) {
    for (let i = 0; i < length; i++) {
      this.elements.allStarsEle[i].classList.add("active");
    }
  },
  updateStars(length) {
    this.removeActiveClass();
    this.highlightStars(length);
  },
  updateText(length) {
    const message =
      length === 5 ? `Fabolous ${length} star` : `You rated ${length} out of 5`;
    this.elements.textEle.textContent = message;
  },
};

const StarController = {
  init() {
    StarView.init();
    this.attachEventListeners();
  },

  handlers: {
    handleClick(star) {
      //1,2. update the selectedRating state
      StarModel.setSelectedRating(Number(star.dataset.value));

      //3.   remove every active class
      //4. Add active class till(including) selected star
      StarView.updateStars(StarModel.getSelectedRating());

      //5. update message
      StarView.updateText(StarModel.getSelectedRating());
    },
    handleMouseover(star) {
      // 1. length hovered
      const length = Number(star.dataset.value);

      //2. remove all active class
      //3.show star hover and below rating filled
      StarView.updateStars(length);
    },
    handleMouseout() {
      //1. remove all active class
      //2. show star hover and below rating filled
      StarView.updateStars(StarModel.getSelectedRating());
    },
  },

  attachEventListeners() {
    StarView.elements.allStarsEle.forEach((star) => {
      star.addEventListener("click", () => {
        this.handlers.handleClick(star);
      });
      star.addEventListener("mouseover", () => {
        this.handlers.handleMouseover(star);
      });
      star.addEventListener("mouseout", () => {
        this.handlers.handleMouseout();
      });
    });
  },
};

document.addEventListener("DOMContentLoaded", () => {
  StarController.init();
});
