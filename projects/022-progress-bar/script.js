const ProgressModel = {
  _progress: 0,
  _isRunning: false,

  getProgress() {
    return this._progress;
  },
  setProgress(value) {
    this._progress = value;
  },
  getIsRunning() {
    return this._isRunning;
  },
  setIsRunning(value) {
    this._isRunning = value;
  },
};

const ProgressView = {
  elements: {
    startBtn: null,
    resetBtn: null,
    progressFill: null,
    percentage: null,
  },

  init() {
    this.elements.startBtn = document.querySelector("#startBtn");
    this.elements.resetBtn = document.querySelector("#resetBtn");
    this.elements.progressFill = document.querySelector(".progress-fill");
    this.elements.percentage = document.querySelector(".percentage");
  },
  updateProgress(value) {
    this.elements.progressFill.style.width = `${value}%`;
    this.elements.percentage.textContent = `${value}%`;
  },
};

const ProgressController = {
  init() {
    ProgressView.init();
    this.attachEventListeners();
  },

  handlers: {
    _timer: null,
    _counter: 0,
    handleStart() {
      if (this._timer !== null) return;
      this._timer = setInterval(() => {
        ProgressModel.setIsRunning(true);
        this._counter = this._counter + 5;

        ProgressModel.setProgress(this._counter);
        ProgressView.updateProgress(ProgressModel.getProgress());
        if (this._counter >= 100) {
          clearInterval(this._timer);
          ProgressModel.setIsRunning(false);
          this._timer = null;
        }
      }, 1000);
    },
    handleReset() {
      clearInterval(this._timer);
      this._timer = null;
      this._counter = 0;
      ProgressModel.setProgress(this._counter);
      ProgressModel.setIsRunning(false);
      ProgressView.updateProgress(ProgressModel.getProgress());
    },
  },

  attachEventListeners() {
    ProgressView.elements.startBtn.addEventListener("click", () => {
      this.handlers.handleStart();
    });
    ProgressView.elements.resetBtn.addEventListener("click", () => {
      this.handlers.handleReset();
    });
  },
};

document.addEventListener("DOMContentLoaded", () => {
  ProgressController.init();
});

// MVP code
//   let counter = 0;
//   let time = null;
//   startBtn.addEventListener("click", () => {
//     if (time !== null) return;
//     time = setInterval(() => {
//       counter = counter + 5;
//       percentageFill.style.width = `${counter}%`;
//       percentage.textContent = `${counter}%`;
//       if (counter >= 100) {
//         clearInterval(time);
//       }
//     }, 1000);
//   });

//   resetBtn.addEventListener("click", () => {
//     clearInterval(time);
//     time = null;
//     setTimeout(() => {
//       counter = 0;
//       percentageFill.style.width = `${counter}%`;
//       percentage.textContent = `${counter}%`;
//     }, 200);
//   });
