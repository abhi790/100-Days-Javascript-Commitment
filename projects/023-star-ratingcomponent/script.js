const allStarsEle = document.querySelectorAll(".star");
//   console.log(allStarsEle);
const textEle = document.querySelector(".rating-text");
//   console.log(textEle);
let selectedRating = 0;
//   highlight stars only
function highlightStars(length) {
  for (let i = 0; i < length; i++) {
    allStarsEle[i].classList.add("active");
  }
}
function removeActiveClass() {
  allStarsEle.forEach((star) => star.classList.remove("active"));
}

//   update stars
function updateStars(length) {
  removeActiveClass();
  highlightStars(length);
}
//   show only the text message
function updateText(length) {
  const message =
    length === 5 ? `Fabolous ${length} star` : `You rated ${length} out of 5`;
  textEle.textContent = message;
}

function markRating(star) {
  //1. take the datavalue selected
  let length = Number(star.dataset.value);

  //2. update the selectedRating state
  selectedRating = length;

  //3.   remove every active class
  //4. Add active class till(including) selected star
  updateStars(length);

  //5. update message
  updateText(length);
}

function showRatingOnMousehover(star) {
  // 1. length hovered
  const length = Number(star.dataset.value);

  //2. remove all active class
  //3.show star hover and below rating filled
  updateStars(length);
}

function resetOnMouseOut() {
  //1. remove all active class
  //2. show star hover and below rating filled
  updateStars(selectedRating);
}

allStarsEle.forEach((star) => {
  star.addEventListener("click", () => {
    markRating(star);
  });

  star.addEventListener("mouseover", () => {
    showRatingOnMousehover(star);
  });

  star.addEventListener("mouseout", () => {
    resetOnMouseOut();
  });
});
