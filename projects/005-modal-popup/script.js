const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal-content");
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".cross");
const btnCopy = document.querySelector(".btn-copy");
const btnShare = document.querySelector(".btn-share");
const heading = document.querySelector("#heading");
const content = document.querySelector(".content");
const btnContainer = document.querySelector(".btn-container");
modalOverlay.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  e.stopPropagation();
});

btnOpen.addEventListener("click", openModal);

// Implement shared to twitter
function shareToTwitter() {
  const shareFeedback = document.createElement("span");
  shareFeedback.innerHTML = `<i class="fa-brands fa-twitter"></i> Shared`;
  shareFeedback.classList.add("share-feedback");
  btnContainer.appendChild(shareFeedback);
  setTimeout(() => shareFeedback.remove(), 1500);
}
function renderData(randomData) {
  heading.textContent = randomData.heading;
  content.textContent = randomData.description;
}
function getRandomData() {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}

//   implement showCopied feature
function showCopied() {
  const feedback = document.createElement("span");
  feedback.textContent = "✅ Copied";
  feedback.classList.add("copy-feedback");
  btnContainer.appendChild(feedback);

  setTimeout(() => feedback.remove(), 1500);
}

//   open modal when btnOpen is clicked
function openModal() {
  modalOverlay.style.display = "flex";
  renderData(getRandomData());
}
function closeModal() {
  modalOverlay.style.display = "none";
}
function closeOnEscapeKey(e) {
  if (e.key === "Escape") closeModal();
}
function copyToClipboard() {
  navigator.clipboard.writeText(content.textContent);
  showCopied();
}

//   close modal on button cross click in UI
btnClose.addEventListener("click", closeModal);

//   close modal on esc key pressed
document.addEventListener("keydown", closeOnEscapeKey);

//   copy to clipboard functionality implementation
btnCopy.addEventListener("click", copyToClipboard);

//   share functionality
btnShare.addEventListener("click", shareToTwitter);
