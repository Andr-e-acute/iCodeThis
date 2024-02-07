const selectButt = document.querySelectorAll(".selection");

selectButt.forEach((butt) => {
  butt.addEventListener("click", () => {
    document.querySelector(".selection.active").classList.remove("active");
    butt.classList.add("active");
  });
});
