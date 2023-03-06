/* Header*/

/* Simplebar */

document.querySelectorAll(".dropdown__simplebar").forEach((dropdown) => {
  new SimpleBar(dropdown, {
    autoHide: false,
    scrollbarMaxSize: 28,
  });
});

/* Dropdown */

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".header-bottom__btn").forEach((item) => {
    item.addEventListener("click", function () {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".dropdown");

      document.querySelectorAll(".header-bottom__btn").forEach((el) => {
        if (el != btn) {
          el.classList.remove("header-bottom__btn--active");
        }
      });

      document.querySelectorAll(".dropdown").forEach((el) => {
        if (el != dropdown) {
          el.classList.remove("dropdown--active");
        }
      });

      dropdown.classList.toggle("dropdown--active");
      btn.classList.toggle("header-bottom__btn--active");
    });
  });

  document.addEventListener("click", function (e) {
    let target = e.target;
    if (!target.closest(".header-bottom__list")) {
      document.querySelectorAll(".dropdown").forEach((el) => {
        el.classList.remove("dropdown--active");
      });
      document.querySelectorAll(".header-bottom__btn").forEach((el) => {
        el.classList.remove("header-bottom__btn--active");
      });
    }
  });
});

/* Burger */

let burger = document.querySelector(".burger");
let fullMenu = document.querySelector(".header-right");

burger.addEventListener(
  "click",

  function () {
    burger.classList.toggle("burger--active");
    fullMenu.classList.toggle("header-right--active");
    document.body.classList.toggle("stop-scroll");
  }
);

/* Search */

let searchOpen = document.querySelector(".search-open");
let searchForm = document.querySelector(".header__search");
let searchActive = document.querySelector(".search__btn");
let searchClosed = document.querySelector(".search__btn-close");
let searchField = document.querySelector(".search__field");

searchOpen.addEventListener("click", function (e) {
  e.preventDefault();
  searchOpen.classList.toggle("search-open--active");
  searchActive.classList.toggle("search__btn--active");
  searchForm.classList.toggle("header__search--active");
  searchClosed.classList.toggle("search__btn-close--active");
  searchField.classList.toggle("search__field--active");
});

searchClosed.addEventListener("click", function (e) {
  e.preventDefault();
  searchActive.classList.remove("search__btn--active");
  searchForm.classList.remove("header__search--active");
  searchOpen.classList.remove("search-open--active");
  searchClosed.classList.remove("search__btn-close--active");
  searchField.classList.remove("search__field--active");
});

/* Hero */

/* Swiper */

const swiperHero = new Swiper(".hero__swiper", {
  direction: "horizontal",
  loop: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

/* Gallery */

/* Select */

const element = document.querySelector(".gallery__select");
const choices = new Choices(element, {
  searchEnabled: false,
  searchChoices: false,
  itemSelectText: "",
  editItems: false,
  shouldSort: false,
});

/* Swiper */

const swiperGallery = new Swiper(".gallery__swiper", {
  slidesPerView: 3,
  grid: {
    rows: 1,
    fill: "row",
  },
  slidesPerGroup: 3,
  spaceBetween: 50,
  pagination: {
    el: ".gallery .gallery__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".gallery__btn_next",
    prevEl: ".gallery__btn_prev",
  },

  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

  speed: 800,

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-3";
        } else {
          slide.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-3";
        } else {
          slide.tabIndex = "";
        }
      });
    },
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    479: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 25,
    },

    770: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 38,
    },

    760: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },

    993: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1360: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});

/* Catalog */

/* Accordion */

new Accordion(".catalog__accordion", {
  elementClass: "accordion",
  triggerClass: "accordion__disc",
  panelClass: "accordion__content",
  activeClass: "accordion--active",
});

/* Tabs */

let stepBtn = document.querySelectorAll(".painter__btn");
let howArticle = document.querySelectorAll(".painter__info");

stepBtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    stepBtn.forEach(function (btn) {
      btn.classList.remove("painter__btn--active");
    });
    e.currentTarget.classList.add("painter__btn--active");

    howArticle.forEach(function (element) {
      element.classList.remove("painter__info--active");
    });
    document.querySelector(`[data-target="${path}"]`).classList.add("painter__info--active");
  });
});

/* Events */

/* Swiper */

const swiperEvents = new Swiper(".events__swiper", {
  loop: true,
  slidesPerView: 3,
  grid: {
    rows: 1,
    fill: "row",
  },
  slidesPerGroup: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: ".events__btn_next",
    prevEl: ".events__btn_prev",
  },

  pagination: {
    el: ".events__pagination",
    type: "bullets",
    clickable: true,
    bulletClass: "events__pagination-bullet",
    bulletActiveClass: "events__pagination-bullet-active",
  },

  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

  breakpoints: {
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    769: {
      loop: false,
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 25,
      pagination: {
        el: ".events__pagination",
        type: "bullets",
        clickable: true,
      },
    },
    576: {
      loop: false,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 35,
      pagination: {
        el: ".events__pagination",
        type: "bullets",
        clickable: true,
      },
    },
    320: {
      loop: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 35,
      pagination: {
        el: ".events__pagination",
        type: "bullets",
        clickable: true,
      },
    },
  },
});

/* Projects */

/* Swiper */

const swiperProjects = new Swiper(".projects__swiper", {
  loop: true,
  slidesPerView: 3,
  grid: {
    rows: 1,
    fill: "row",
  },
  slidesPerGroup: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: ".partners__btn_next",
    prevEl: ".partners__btn_prev",
  },

  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-6";
        } else {
          slide.tabIndex = "-6";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-6";
        } else {
          slide.tabIndex = "-6";
        }
      });
    },
  },

  breakpoints: {
    1025: {
      loop: true,
      slidesPerView: 3,
      grid: {
        rows: 1,
        fill: "row",
      },
      slidesPerGroup: 3,
      spaceBetween: 50,
      navigation: {
        nextEl: ".partners__btn_next",
        prevEl: ".partners__btn_prev",
      },
    },
    769: {
      loop: true,
      slidesPerView: 2,
      grid: {
        rows: 1,
        fill: "row",
      },
      slidesPerGroup: 2,
      spaceBetween: 55,
      pagination: {
        el: ".projects .projects__pagination",
      },
      navigation: {
        nextEl: ".partners__btn_next",
        prevEl: ".partners__btn_prev",
      },
    },
    576: {
      loop: true,
      slidesPerView: 2,
      grid: {
        rows: 1,
        fill: "row",
      },
      slidesPerGroup: 2,
      spaceBetween: 35,
      navigation: {
        nextEl: ".partners__btn_next",
        prevEl: ".partners__btn_prev",
      },
    },
    320: {
      loop: true,
      slidesPerView: 1,
      grid: {
        rows: 1,
        fill: "row",
      },

      a11y: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      slidesPerGroup: 1,
      spaceBetween: 35,
      navigation: {
        nextEl: ".projects__btn_next",
        prevEl: ".projects__btn_prev",
      },
    },
  },
});

/* Feedback */

/* Form */

/* Mask */

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

/* Validator */

new JustValidate(".feedback__form", {
  rules: {
    name: {
      required: true,
      manLength: 2,
      maxLength: 30,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        console.log(phone);
        return Number(phone) && phone.length === 10;
      },
    },
  },

  messages: {
    name: {
      required: "Вы не ввели имя",
    },

    tel: {
      required: "Вы не ввели телефон",
      function: "Недопустимый формат",
    },
  },
  colorWrong: "#D11616",
});

/* Map */

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("main_map", {
    center: [55.7584767655884, 37.60113812086667],
    zoom: 17,
  });

  myMap.behaviors.disable("scrollZoom");

  var myPlacemark = new ymaps.Placemark(
    [55.7584767655884, 37.60113812086667],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "../img/map/marker-map.svg",
      iconImageOffset: [-25, -25],
    }
  );

  myMap.geoObjects.add(myPlacemark);
}
