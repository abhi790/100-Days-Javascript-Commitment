const ThemeModel = {
  _plans: [
    {
      id: 1,
      name: "Starter",
      price: 9,
      period: "mo",
      featured: false,
      cta: "Get Started",
      features: ["1 User", "5 Projects", "2GB Storage", "Email Support"],
    },
    {
      id: 2,
      name: "Pro",
      price: 29,
      period: "mo",
      featured: true,
      cta: "Get Started Free",
      features: ["5 Users", "20 Projects", "20GB Storage", "Priority Support"],
    },
    {
      id: 3,
      name: "Business",
      price: 79,
      period: "mo",
      featured: false,
      cta: "Get Started",
      features: [
        "20 Users",
        "Unlimited Projects",
        "100GB Storage",
        "24/7 Support",
      ],
    },
  ],
  _isLightTheme: true,
  toggleTheme: function () {
    this._isLightTheme = !this._isLightTheme;
  },

  getThemeState: function () {
    return this._isLightTheme;
  },

  setThemeState: function (state) {
    this._isLightTheme = state;
  },
  getPlans: function () {
    return this._plans;
  },
};

const ThemeView = {
  elements: {
    theme_button: null,
    theme_icon: null,
    cards_section: null,
    hero_section: null,
  },
  init: function () {
    //
    this.elements.theme_button = document.getElementById("theme-toggle");
    this.elements.theme_icon = document.getElementById("theme-icon");
    this.elements.cards_section = document.querySelector(".cards");
    this.elements.hero_section = document.querySelector(".hero");
  },

  updateUI: function (state) {
    const icon = this.elements.theme_icon;
    if (state) {
      document.body.classList.remove("dark");
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      document.body.classList.add("dark");
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  },
  renderHero: function (params) {
    this.elements.hero_section.innerHTML = `<h1>Dark / Light Mode Toggle</h1>
        <p>Click the button to switch between dark and light theme.</p>`;
  },
  renderCards: function (plans) {
    function createList(features) {
      const listHTML = features
        .map(
          (feature) => `<li><i class="fa-solid fa-check"></i> ${feature}</li>`,
        )
        .join("");
      return listHTML;
    }

    const plansHTML = plans
      .map((plan) => {
        return `<div class="${plan.featured ? "card featured" : "card"}">
          ${plan.featured ? `<span class="badge">⭐ Most Popular</span>` : ""}
          <h3 class="card-plan">${plan.name}</h3>
          <p class="card-price">
            <span class="currency">₹</span>${plan.price}
            <span class="period">/${plan.period}</span></p>
          <ul class="card-features">
          ${createList(plan.features)}
          </ul>
          <button class="card-cta">${plan.cta}</button>
        </div>`;
      })
      .join("");

    // inserting all plan to the parent container
    this.elements.cards_section.innerHTML = plansHTML;
  },
};

const ThemeController = {
  init: function () {
    // initialize view
    ThemeView.init();
    ThemeView.updateUI(ThemeModel.getThemeState());
    ThemeView.renderHero();
    ThemeView.renderCards(ThemeModel.getPlans());

    //   attach listeners
    this.attachEventListener();
  },

  // handler functions
  handlers: {
    handleToggleClick: function () {
      ThemeModel.toggleTheme();
      const themeState = ThemeModel.getThemeState();
      ThemeView.updateUI(themeState);
    },
  },

  attachEventListener: function () {
    ThemeView.elements.theme_button.addEventListener(
      "click",
      this.handlers.handleToggleClick,
    );
  },
};

document.addEventListener("DOMContentLoaded", ThemeController.init());
