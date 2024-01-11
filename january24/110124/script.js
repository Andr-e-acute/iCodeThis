const selectButts = document.querySelectorAll(".card-container .card>button");
const selectedCounter = document.querySelector("body .counter");
selectButts.forEach((butt) => {
  butt.addEventListener("click", (e) => {
    butt.closest(".card").classList.toggle("deselected");
    setCounter();
  });
});

function setCounter() {
  selectedCounter.textContent = `${
    document.querySelectorAll(".card.deselected").length
  }/3`;
}
setCounter();
