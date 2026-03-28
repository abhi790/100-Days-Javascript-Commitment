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
    navsTabEle: document.querySelector(".tabs-nav"),
    tabsTrackEle: document.querySelector(".tabs-track"),
    allTabs: document.querySelectorAll(".tab-item"),
  },

  // update active state of tab item
  updateActiveTabItem(index) {
    //   remove active class from all tab-item
    this.elements.allTabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    //   add to the clicked tab
    this.elements.allTabs[index].classList.add("active");
  },

  // update content
  updateTabPanel(index) {
    const position = -(33.33 * index);
    this.elements.tabsTrackEle.style.transform = `translateX(${position}%)`;
  },

  updateUI(index) {
    this.updateActiveTabItem(index);
    this.updateTabPanel(index);
  },
};

const TabController = {
  init: function () {
    //   // initialize the dom
    //   TabView.init();
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
