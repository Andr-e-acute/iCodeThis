const dropdownButt = document.querySelector("button.account-dropdown");

dropdownButt.addEventListener("click", () => {
  dropdownButt.classList.toggle("expanded");
  document.querySelector(".account").classList.toggle("hidden");
});
