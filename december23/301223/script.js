const moreButts = document.querySelectorAll(".profile .more");
moreButts.forEach((butt) => {
  butt.addEventListener("click", () => {
    butt.querySelector(".dropdown").classList.toggle("expand");
  });
});
