const selection = document.querySelectorAll(".selection");

selection.forEach((butt) => {
  butt.addEventListener("click", () => {
    selection.forEach((btn) => {
      btn.classList.remove("selected");
    });
    butt.classList.add("selected");
  });
});
