const closeButts = document.querySelectorAll("button.close");
closeButts.forEach((butt) => {
  butt.addEventListener("click", () => {
    butt.closest(".modal").classList.add("closed");
  });
});
