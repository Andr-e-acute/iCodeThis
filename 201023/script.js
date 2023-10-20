const dropdowns = document.querySelectorAll(".dropdown");
const body = document.querySelector("body");

function selectDropdown(dropdown) {
  if (!dropdown.classList.contains("selected")) {
    deselectAlldropdowns();
    dropdown.classList.add("selected");
  } else {
    deselectAlldropdowns();
  }
}
function deselectAlldropdowns() {
  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("selected");
  });
}
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    selectDropdown(dropdown);
  });
});
body.addEventListener("click", deselectAlldropdowns);
