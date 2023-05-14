const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");

// _.throttle(함수, 시간(ms))
// lodash의 throttle을 이용해서 scroll 이벤트가 짧은 시간에 너무 많이 발생하지 않게 조절한다.
window.addEventListener(
  "scroll",
  _.throttle(() => {
    if (window.scrollY > 500) {
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    // 시간차를 두고 하나씩 나타나게 하기위해 index 값을 받아 1초씩 뒤에 나타나도록 설정한다.
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

new Swiper(".notice-line .swiper", {
  direction: "vertical",
  loop: true,
  autoplay: true,
});

new Swiper(".promotion .swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  centeredSlides: true, // active 슬라이드를 중간에 보여준다.
  slidesPerView: 3, // 한번에 3개의 슬라이드를 보여준다.
  spaceBetween: 10, // 슬라이드 사이 여백
  loopedSlides: 2,
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
const promotionUploadBtn = promotionToggleBtn.querySelector(".material-icons");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", () => {
  // isHidePromotion 값을 변경하며 hide 클래스를 추가/삭제한다.
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
    // 토글 버튼이 클릭될 때마다 버튼을 회전시켜 방향을 맞춰준다.
    promotionUploadBtn.style.transform = "rotate(180deg)";
  } else {
    promotionEl.classList.remove("hide");
    promotionUploadBtn.style.transform = "rotate(0)";
  }
});
