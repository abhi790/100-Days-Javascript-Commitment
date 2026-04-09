const StickyModel = {
  _isSticky: false,
  _threshold: 0,
  _navbarHeight: 0,
  _animals: [
    {
      id: 1,
      title: "🦁 Lion",
      description:
        "Known as the King of the Jungle, lions are the most social of all wild cat species. They live in groups called prides, which can include up to 30 individuals. Lions are apex predators and play a crucial role in maintaining the balance of their ecosystem by controlling herbivore populations across the African savanna.",
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600",
    },
    {
      id: 2,
      title: "🐘 Elephant",
      description:
        "Elephants are the largest land animals on Earth. They are highly intelligent, display complex emotions, and live in tight-knit family groups led by a matriarch. Their memory is legendary — they can remember friends and enemies for decades and mourn their dead with remarkable tenderness.",
      image:
        "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600",
    },
    {
      id: 3,
      title: "🐬 Dolphin",
      description:
        "Dolphins are among the most intelligent creatures in the ocean. They communicate using a complex system of clicks and whistles, live in social pods, and are known for their playful nature. Scientists have discovered that dolphins give each other unique names and can recognize themselves in mirrors.",
      image:
        "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=600",
    },
    {
      id: 4,
      title: "🦅 Eagle",
      description:
        "Eagles are among the most powerful birds of prey on the planet. With eyesight four to eight times stronger than humans, they can spot a rabbit from nearly two miles away. Eagles mate for life and return to the same nest year after year, adding to it until it can weigh over a ton.",
      image:
        "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=600",
    },
    {
      id: 5,
      title: "🐆 Cheetah",
      description:
        "The cheetah is the fastest land animal on Earth, capable of reaching speeds of 70 miles per hour in just three seconds. Unlike other big cats, cheetahs cannot roar — they chirp and purr instead. They rely entirely on speed and sharp eyesight to hunt, making them one of nature's most remarkable predators.",
      image:
        "https://images.unsplash.com/photo-1526246708488-d433888791b7?w=600",
    },
    {
      id: 6,
      title: "🦓 Zebra",
      description:
        "No two zebras have the same stripe pattern — their stripes are as unique as human fingerprints. Zebras are highly social animals that live in large herds for protection against predators. Their stripes are believed to confuse predators, regulate body temperature, and even act as a natural insect repellent.",
      image:
        "https://images.unsplash.com/photo-1526095179574-86e545346ae6?w=600",
    },
  ],

  getIsSticky() {
    return this._isSticky;
  },
  setIsSticky(value) {
    this._isSticky = value;
  },
  getThreshold() {
    return this._threshold;
  },
  setThreshold(value) {
    this._threshold = value;
  },
  getNavbarHeight() {
    return this._navbarHeight;
  },
  setNavbarHeight(value) {
    this._navbarHeight = value;
  },
  getAnimals() {
    return this._animals;
  },
};

const StickyView = {
  elements: {
    navbarEle: null,
    topBarEle: null,
    animalContainer: null,
  },

  init() {
    this.elements.navbarEle = document.querySelector(".navbar");
    this.elements.topBarEle = document.querySelector(".top-bar");
    this.elements.animalContainer = document.querySelector("#animals");
  },

  makeSticky(navbarHeight) {
    this.elements.navbarEle.classList.add("sticky");
    document.body.style.paddingTop = navbarHeight + "px";
  },

  removeSticky() {
    this.elements.navbarEle.classList.remove("sticky");
    document.body.style.paddingTop = "0px";
  },

  renderContent(animals) {
    const allCardHTML = animals
      .map((animal, index) => {
        const reverseClass = index % 2 !== 0 ? "reverse" : "";
        return `
          <div class="animal-card ${reverseClass}">
            <img src="${animal.image}" alt="${animal.title}" />
            <div class="animal-info">
              <h2>${animal.title}</h2>
              <p>${animal.description}</p>
            </div>
          </div>
        `;
      })
      .join("");
    this.elements.animalContainer.innerHTML = allCardHTML;
  },
};

const StickyController = {
  init() {
    StickyView.init();
    StickyModel.setThreshold(StickyView.elements.topBarEle.offsetHeight);
    StickyModel.setNavbarHeight(StickyView.elements.navbarEle.offsetHeight);
    StickyView.renderContent(StickyModel.getAnimals());
    this.attachEventListeners();
  },

  handlers: {
    handleScroll() {
      if (window.scrollY >= StickyModel.getThreshold()) {
        StickyModel.setIsSticky(true);
        StickyView.makeSticky(StickyModel.getNavbarHeight());
      } else {
        StickyModel.setIsSticky(false);
        StickyView.removeSticky();
      }
    },
  },

  attachEventListeners() {
    window.addEventListener("scroll", () => {
      this.handlers.handleScroll();
    });
  },
};

document.addEventListener("DOMContentLoaded", () => {
  StickyController.init();
});
