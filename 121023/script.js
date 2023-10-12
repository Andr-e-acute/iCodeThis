const dropdowns = document.querySelectorAll(".navbar > li");
const body = document.querySelector("body");

function closeAllDropdowns() {
  dropdowns.forEach((element) => {
    element.classList.remove("active");
  });
}

body.addEventListener("click", closeAllDropdowns);
dropdowns.forEach((cat) => {
  cat.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      closeAllDropdowns();
    } else {
      closeAllDropdowns();
      e.target.classList.toggle("active");
    }
    e.stopPropagation();
  });
});
