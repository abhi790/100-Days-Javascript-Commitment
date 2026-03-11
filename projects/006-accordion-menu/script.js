const accordion = document.querySelector(".accordion");
const faqData = [
  {
    question: "What is the capital of India?",
    answer:
      "New Delhi is the capital of India. It is the center of government and administration where the President, Prime Minister, and Parliament operate. The city is known for important landmarks like India Gate, Rashtrapati Bhavan, and Parliament House. New Delhi is also an important cultural and political hub of the country.",
  },
  {
    question: "What is the largest planet in our solar system?",
    answer:
      "Jupiter is the largest planet in our solar system. It is a gas giant mainly made of hydrogen and helium. Jupiter has a very strong gravitational pull and more than 90 known moons, including the famous moons Io, Europa, Ganymede, and Callisto. The planet is also known for the Great Red Spot, which is a massive storm that has existed for hundreds of years.",
  },
  {
    question: "Which animal is known as the king of the jungle?",
    answer:
      "The lion is known as the king of the jungle because of its strength, leadership, and powerful roar. Lions live in groups called prides and are among the top predators in the animal kingdom. Male lions are easily recognized by their large manes, which symbolize dominance and protection.",
  },
  {
    question: "What is the fastest land animal?",
    answer:
      "The cheetah is the fastest land animal and can reach speeds of up to 100 kilometers per hour in short bursts. It uses its lightweight body, long legs, and flexible spine to accelerate very quickly while chasing prey. Cheetahs mainly hunt animals like gazelles and antelopes in open grasslands.",
  },
  {
    question: "What is the main source of energy for Earth?",
    answer:
      "The Sun is the main source of energy for Earth. It provides light and heat that make life possible on our planet. Plants use sunlight to produce food through a process called photosynthesis, which supports the entire food chain. The Sun also drives weather systems, ocean currents, and the overall climate of Earth.",
  },
];

function createAccordion() {
  faqData.forEach((data) => {
    const accordionItem = `
                <div class="accordion-item ">
                    <button class="accordion-btn">
                        <h3 class="heading">${data.question}</h3>
                        <span><i class="fa-solid fa-chevron-down"></i></span>
                    </button>
                    <div class="accordion-content">
                        <p>${data.answer}</p>
                    </div>
                </div>`;

    accordion.insertAdjacentHTML("beforeend", accordionItem);
  });
}

createAccordion();

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((accordionItem) => {
  const btn = accordionItem.querySelector(".accordion-btn");
  const icon = accordionItem.getElementsByTagName("i");
  // console.log(icon);

  btn.addEventListener("click", () => {
    // check active class already present or not
    const isActive = accordionItem.classList.contains("active");
    //   remove all active
    accordionItems.forEach((item) => {
      item.classList.remove("active");
      console.log(item.classList);
    });
    //   if active class not present add it
    if (!isActive) accordionItem.classList.add("active");
  });
});
