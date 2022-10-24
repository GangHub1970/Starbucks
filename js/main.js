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
