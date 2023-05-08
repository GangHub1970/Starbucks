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
