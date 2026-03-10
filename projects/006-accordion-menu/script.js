const accordian = document.querySelector(".accordian");

//   create accordian when html page loads
function createAccordian() {
  faqData.forEach((data) => {
    const accordianItem = document.createElement("div");
    accordianItem.className = "accordian-item";

    accordianItem.innerHTML = `<div class="accordian-header"><h3>${data.question}</h3> <span></span></div>
           <div class="accordian-content"><p>${data.answer}</p>
           </div>
           <hr class="horizontal-line"/>
           `;

    accordian.appendChild(accordianItem);
  });
}
createAccordian();

const accordianHeaders = document.querySelectorAll(".accordian-header");

accordianHeaders.forEach((accordianHeader) => {
  accordianHeader.addEventListener("click", () => {
    const isActive = accordianHeader.classList.contains("active");
    // remove all active class first
    document.querySelectorAll(".accordian-header").forEach((header) => {
      header.classList.remove("active");
      header.nextElementSibling.classList.remove("active");
    });

    if (!isActive) {
      accordianHeader.classList.add("active");
      accordianHeader.nextElementSibling.classList.add("active");
    }
  });
});
