const SliderModel = {
  images: [
    "./images/001-counter-app.png",
    "./images/002-color-flipper.png",
    "./images/003-tip-calculator.png",
    "./images/004-random-quote.png",
    "./images/005-modal-popup.png",
    "./images/006-accordion-menu.png",
    "./images/007-todo-basic.png",
    "./images/008-digital-clock.png",
    "./images/009-stopwatch-app.png",
    "./images/010-countdown-timer.png",
    "./images/011-bmi-calculator.png",
    "./images/012-temperature-converter.png",
    "./images/013-random-passwordgenerator.png",
    "./images/014-character-counter.png",
    "./images/015.png",
    "./images/016-image-slider.png",
  ],

  currentIndex: 0,

  getImages: function () {
    return this.images;
  },
  getCurrentIndex: function () {
    return this.currentIndex;
  },

  setIndex: function (newIndex) {
    this.currentIndex = newIndex;
  },

  getTotalImages: function () {
    return this.images.length;
  },
};

const SliderView = {
  // caching DOM elements
  elements: {
    sliderWrapper: document.querySelector("#sliderWrapper"),
    prevBtn: document.querySelector("#prevBtn"),
    nextBtn: document.querySelector("#nextBtn"),
    dotsContainer: document.querySelector("#sliderDots"),
  },

  // Render images inside DOM
  renderSlides(images) {
    // loop on images and create img element
    const slidesHTML = images
      .map((imageUrl) => {
        return `<img src="${imageUrl}" class="slide" alt="Slider Image">`;
      })
      .join("");

    // insert it into slide-wrapper
    this.elements.sliderWrapper.innerHTML = slidesHTML;
  },

  // Dots indicator on images
  renderDots(images) {
    const dotsHTML = images
      .map((_, index) => {
        return `<span class="dot" data-index="${index}"></span>`;
      })
      .join("");
    // insert the dots inside dots container
    this.elements.dotsContainer.innerHTML = dotsHTML;
  },

  // move slider by applying transform
  updateSliderPosition(index) {
    const translateValue = -(index * 100);
    this.elements.sliderWrapper.style.transform = `translateX(${translateValue}%)`;
  },

  // update dot active class
  updateActiveDotState(index) {
    // remove all active class
    const allDots = SliderView.elements.dotsContainer.querySelectorAll(".dot");
    allDots.forEach((dot) => {
      dot.classList.remove("active");
    });

    // add active class to current dot.
    if (index !== undefined || index !== null) {
      allDots[index].classList.add("active");
    }
  },

  updateUI(index) {
    SliderView.updateSliderPosition(index);
    SliderView.updateActiveDotState(index);
  },
};

const SliderController = {
  init: function () {
    SliderView.renderSlides(SliderModel.getImages());
    SliderView.renderDots(SliderModel.getImages());
    SliderView.updateUI(SliderModel.getCurrentIndex());
    this.attachEventListeners();
  },

  // handler functions
  handlers: {
    goToNext: function () {
      // debugger;
      let currentPosition = Number(SliderModel.getCurrentIndex());
      const totalImages = Number(SliderModel.getTotalImages());

      let nextPosition =
        currentPosition === totalImages - 1 ? 0 : currentPosition + 1;
      SliderModel.setIndex(nextPosition);
      SliderView.updateUI(nextPosition);
    },
    goToPrev: function () {
      let currentPosition = Number(SliderModel.getCurrentIndex());
      const totalImages = Number(SliderModel.getTotalImages());

      let prevPosition =
        currentPosition === 0 ? totalImages - 1 : currentPosition - 1;
      SliderModel.setIndex(prevPosition);
      SliderView.updateUI(prevPosition);
    },
    updateOnDotClick: function (e) {
      const clickedIndex = parseInt(e.target.dataset.index);
      if (!isNaN(clickedIndex)) {
        SliderModel.setIndex(clickedIndex);
        SliderView.updateUI(clickedIndex);
      }
    },
    handleKeyboard: function (e) {
      switch (e.key) {
        case "ArrowLeft":
          this.handlers.goToPrev();
          break;
        case "ArrowRight":
          this.handlers.goToNext();
          break;

        default:
          break;
      }
    },
  },

  // attach event handler
  attachEventListeners: function () {
    SliderView.elements.prevBtn.addEventListener("click", () => {
      this.handlers.goToPrev();
    });

    SliderView.elements.nextBtn.addEventListener("click", () => {
      this.handlers.goToNext();
    });

    //   adding event listener to sliderdots parent
    SliderView.elements.dotsContainer.addEventListener("click", (e) => {
      this.handlers.updateOnDotClick(e);
    });
    //   listening to key events
    document.addEventListener(
      "keydown",
      this.handlers.handleKeyboard.bind(this),
    );
  },
};

document.addEventListener("DOMContentLoaded", function () {
  SliderController.init();
});
