const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const btnNew = document.querySelector(".btn-new");
const btnCopy = document.querySelector(".btn-copy");
const btnShare = document.querySelector(".btn-share");
const btnContainer = document.querySelector(".button-container");

const randomQuote = generateRandomQuote();
displayRandomQuote(randomQuote);

//   display random quote on the display
function displayRandomQuote(randomQuote) {
  quote.textContent = `\u201C${randomQuote.quote}\u201D`;
  author.textContent = `~ ${randomQuote.author}`;
}
// generate random quote
function generateRandomQuote() {
  const index = Math.floor(Math.random() * 1000);
  const quote = quotes[index];
  return quote;
}

// detail implementation of copied text shown
function showCopied() {
  const feedback = document.createElement("span");
  feedback.textContent = "✅ Copied";
  feedback.classList.add("copy-feedback");
  btnContainer.appendChild(feedback);

  setTimeout(() => {
    feedback.remove();
  }, 1500);
}

// share to twitter
function shareToTwitter() {
  const tweet = `${quote.textContent} ${author.textContent}`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
  window.open(url, "_blank");
}

//random quote shown
btnNew.addEventListener("click", () => {
  const randomQuote = generateRandomQuote();
  displayRandomQuote(randomQuote);
});

//   copy functionality
btnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(
    `${quote.textContent} by ${author.textContent}`,
  );
  showCopied();
});

// sharing functionality
btnShare.addEventListener("click", () => {
  shareToTwitter();
});
