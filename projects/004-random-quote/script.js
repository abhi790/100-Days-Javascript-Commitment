const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const btnNew = document.querySelector(".btn-new");
const btnCopy = document.querySelector(".btn-copy");
const btnShare = document.querySelector(".btn-share");

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
});
