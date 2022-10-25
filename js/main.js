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
const toTopBtn = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    badges.style.opacity = 0;
    badges.style.pointerEvents = "none";
    toTopBtn.style.opacity = 1;
    toTopBtn.style.pointerEvents = "auto";
  } else {
    badges.style.opacity = 1;
    badges.style.pointerEvents = "auto";
    toTopBtn.style.opacity = 0;
    toTopBtn.style.pointerEvents = "none";
  }
});

toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
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
    disableOnInteraction: false,
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
    delay: 3000,
    disableOnInteraction: false,
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

const visualEls = document.querySelectorAll(".fade-in");
visualEls.forEach((visualEl, index) => {
  gsap.to(visualEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

const floatingEls = document.querySelectorAll(".floating");
floatingEls.forEach((floatingEl) => {
  gsap.to(floatingEl, random(1.5, 2.5), {
    y: random(15, 20),
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
  });
});

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
