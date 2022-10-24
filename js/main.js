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
