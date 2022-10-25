const search = document.querySelector(".search");
const input = document.querySelector(".search input");
const searchIcon = document.querySelector(".search .material-icons");

search.addEventListener("click", () => {
  input.placeholder = "통합검색";
  input.focus();
  searchIcon.classList.add("hidden");
});

input.addEventListener("blur", () => {
  input.placeholder = "";
  searchIcon.classList.remove("hidden");
});

const badges = document.querySelector(".badges");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    badges.style.opacity = 0;
    badges.style.pointerEvents = "none";
  } else {
    badges.style.opacity = 1;
    badges.classList.remove("hidden");
    badges.style.pointerEvents = "auto";
  }
});

const noticeSwiper = new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: {
    delay: 3000,
  },
  loop: true,
  slidesPerView: 1,
});

const promotionSwiper = new Swiper(".promotion .swiper", {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".promotion .swiper-button-next",
    prevEl: ".promotion .swiper-button-prev",
  },
});

const awardSwiper = new Swiper(".awards .swiper", {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  navigation: {
    nextEl: ".awards .swiper-button-next",
    prevEl: ".awards .swiper-button-prev",
  },
});

const promotionBtn = document.querySelector(
  ".notice .textAndBtn .material-icons"
);
const promotion = document.querySelector(".promotion");
const pagination = document.querySelector(".swiper-pagination");
let promotionIsHide = false;

promotionBtn.addEventListener("click", () => {
  if (!promotionIsHide) {
    promotion.classList.add("hide");
    pagination.style.display = "none";
  } else {
    promotion.classList.remove("hide");
    pagination.style.display = "block";
  }

  promotionIsHide = !promotionIsHide;
});
