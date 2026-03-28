const TabModel = {
  _tabs: [
    {
      id: 0,
      label: "Bali",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
      title: "The Island of Gods",
      description:
        "Bali is a living postcard, an Indonesian paradise that feels like a fantasy. Graceful temples, emerald rice paddies, volcanic mountains, and warm beaches make it one of the world's most beloved destinations.",
    },
    {
      id: 1,
      label: "Paris",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
      title: "The City of Light",
      description:
        "Paris is a city that never stops inspiring. From the grandeur of the Eiffel Tower to the quiet charm of cobblestone side streets, every corner of Paris tells a story of art, history, and effortless beauty.",
    },
    {
      id: 2,
      label: "Tokyo",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
      title: "Where Tradition Meets Tomorrow",
      description:
        "Tokyo is a city of breathtaking contrasts — ancient shrines standing quietly beside towering neon skyscrapers. It is a place where centuries-old traditions and cutting-edge innovation exist side by side in perfect harmony.",
    },
    {
      id: 3,
      label: "New York",
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
      title: "The City That Never Sleeps",
      description:
        "New York City pulses with an energy unlike anywhere else on earth. From the iconic skyline of Manhattan to the vibrant neighbourhoods of Brooklyn, every street corner tells a story of ambition, diversity, and reinvention.",
    },
    {
      id: 4,
      label: "Santorini",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
      title: "Jewel of the Aegean",
      description:
        "Santorini is a dream etched in white and blue. Perched on the rim of a volcanic caldera, its clifftop villages spill down towards a shimmering sea, offering sunsets that have inspired poets and travellers for centuries.",
    },
    {
      id: 5,
      label: "Machu Picchu",
      image:
        "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
      title: "Lost City of the Incas",
      description:
        "High in the Andes of Peru, Machu Picchu rises from the clouds like a forgotten world. This ancient Incan citadel, surrounded by dramatic mountain peaks and lush cloud forest, remains one of humanity's most breathtaking achievements.",
    },
    {
      id: 6,
      label: "Maldives",
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
      title: "Paradise on the Indian Ocean",
      description:
        "The Maldives is a necklace of coral islands scattered across the turquoise Indian Ocean. With crystal clear lagoons, overwater bungalows, and some of the world's finest coral reefs, it is the ultimate escape from the everyday.",
    },
    {
      id: 7,
      label: "Kyoto",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
      title: "Soul of Ancient Japan",
      description:
        "Kyoto is where Japan's soul lives. With over a thousand temples, bamboo groves, and geisha districts frozen in time, this ancient imperial city offers a glimpse into a Japan that has quietly resisted the rush of the modern world.",
    },
  ],
  _activeIndex: 0,

  getTabs() {
    return this._tabs;
  },

  getActiveIndex() {
    return this._activeIndex;
  },

  setActiveIndex(index) {
    if (index < 0 || index >= this._tabs.length) return;
    this._activeIndex = index;
  },
};

const TabView = {
  // caching DOM elements
  elements: {
    navsTabEle: null,
    tabsTrackEle: null,
  },
  init() {
    this.elements.navsTabEle = document.querySelector(".tabs-nav");
    this.elements.tabsTrackEle = document.querySelector(".tabs-track");
    this.renderNav();
    this.renderPanels();
  },

  // update active state of tab item
  updateActiveTabItem(index) {
    //   remove active class from all tab-item
    // console.log(this.elements.allTabs);
    const allTabs = document.querySelectorAll(".tab-item");

    allTabs.forEach((tab, i) => {
      tab.classList.remove("active");
    });

    //   add to the clicked tab
    allTabs[index].classList.add("active");
  },

  //   update nav item
  renderNav() {
    const tabs = TabModel.getTabs();
    // debugger;
    const tabItemsHTML = tabs
      .map((tab, index) => {
        return `<div class="tab-item" data-index="${index}">${tab.label}</div>`;
      })
      .join("");

    this.elements.navsTabEle.innerHTML = tabItemsHTML;
  },

  renderPanels() {
    const tabs = TabModel.getTabs();
    const total = tabs.length;

    // set track width dynamically
    this.elements.tabsTrackEle.style.width = `${total * 100}%`;
    const panelHTML = tabs
      .map((tab) => {
        return `<div class="tab-panel" style="width: ${100 / total}%">
                <img
                  src="${tab.image}"
                  alt="${tab.label}"
                />
                <h2>${tab.title}</h2>
                <p>
                  ${tab.description}
                </p>
              </div>`;
      })
      .join("");

    this.elements.tabsTrackEle.innerHTML = panelHTML;
  },

  // update content
  updateTabPanel(index) {
    const total = TabModel.getTabs().length;
    const position = -(100 / total) * index;
    this.elements.tabsTrackEle.style.transform = `translateX(${position}%)`;
  },

  updateUI(index) {
    this.updateActiveTabItem(index);
    this.updateTabPanel(index);
  },
};

const TabController = {
  init: function () {
    // initializing view
    TabView.init();
    // set initial state
    TabView.updateUI(TabModel.getActiveIndex());
    // call for attach addEventListener
    this.attachEventListeners();
  },

  // handler functions
  handlers: {
    handleTabClick: function (e) {
      const clicked = e.target.closest(".tab-item"); //  safe targeting
      if (!clicked) return; // guard clause
      const currentIndex = parseInt(clicked.dataset.index);
      TabModel.setActiveIndex(currentIndex);
      TabView.updateUI(TabModel.getActiveIndex());
    },
  },

  // attach event handler
  attachEventListeners: function () {
    TabView.elements.navsTabEle.addEventListener(
      "click",
      this.handlers.handleTabClick,
    );
  },
};

document.addEventListener("DOMContentLoaded", function () {
  TabController.init();
});
