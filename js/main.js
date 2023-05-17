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
    nextEl: ".promotion .swiper-button-next",
    prevEl: ".promotion .swiper-button-prev",
  },
});

new Swiper(".awards .swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 5, // 한번에 3개의 슬라이드를 보여준다.
  spaceBetween: 30, // 슬라이드 사이 여백
  navigation: {
    nextEl: ".awards .swiper-button-next",
    prevEl: ".awards .swiper-button-prev",
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

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한 반복
    yoyo: true, // 되돌아가는 애니메이션까지 실행
    ease: "power1.inOut",
    delay: random(0, delay),
  });
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

// 범위에 해당하는 랜덤 수를 소수점 2자리까지 생성하는 함수
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach((spyEl) => {
  // 요소가 화면에 보이는지 보이지 않는지를 확인하는 메서드이다.
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 화면의 맨위를 0, 맨밑을 1로 두고, 어느 지점에서 요소가 나타나면 효과를 나타낼건지 지정
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
