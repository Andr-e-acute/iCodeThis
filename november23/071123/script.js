// violett rating card
const ratingButts = document.querySelectorAll(".rate.card input");
const expCard = document.querySelector("#exp-rating");
const qtyCard = document.querySelector("#qty-rating");
const endCard = document.querySelector("#end-card");
const progressIndicator1 = document.querySelector("#question-1");
const progressIndicator2 = document.querySelector("#question-2");

function expCardActive() {
  qtyCard.classList.add("hidden");
  endCard.classList.add("hidden");
  expCard.classList.remove("hidden");
  expCard.style.display = "flex";
  endCard.style.display = "none";
  qtyCard.style.display = "none";
  progressIndicator1.classList.remove("grayed");
  progressIndicator2.classList.add("grayed");
}
function qtyCardActive() {
  expCard.classList.add("hidden");
  endCard.classList.add("hidden");
  qtyCard.classList.remove("hidden");
  expCard.style.display = "none";
  endCard.style.display = "none";
  qtyCard.style.display = "flex";
  progressIndicator1.classList.remove("grayed");
  progressIndicator2.classList.remove("grayed");
}
function endCardActive() {
  expCard.classList.add("hidden");
  qtyCard.classList.add("hidden");
  endCard.classList.remove("hidden");
  expCard.style.display = "none";
  endCard.style.display = "initial";
  qtyCard.style.display = "none";
  progressIndicator1.classList.remove("grayed");
  progressIndicator2.classList.remove("grayed");
}
ratingButts.forEach((butt) => {
  butt.addEventListener("click", () => {
    if (butt.closest("fieldset") === expCard) {
      qtyCardActive();
    } else if (butt.closest("fieldset") === qtyCard) {
      endCardActive();
    }
  });
});
progressIndicator1.addEventListener("click", expCardActive);
progressIndicator2.addEventListener("click", qtyCardActive);
