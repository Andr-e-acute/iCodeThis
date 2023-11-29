const billedButt = document.getElementById("billedButt");
const starterPlan = document.getElementById("starter");
const proPrice = document.querySelector("#pro h2");
const proMaus = document.getElementById("maus");
function setProPrice() {
  let price = "?";
  if (proPrice.dataset.period == "year") {
    price = proPrice.dataset.price * 11;
  } else if (proPrice.dataset.period == "month") {
    price = proPrice.dataset.price;
  }
  proPrice.innerHTML = `$ ${price}<span>/${proPrice.dataset.period}</span>`;
}

billedButt.addEventListener("change", () => {
  if (billedButt.checked) {
    starterPlan.classList.remove("active");
    proPrice.dataset.period = "year";
    setProPrice();
  } else {
    starterPlan.classList.add("active");
    proPrice.dataset.period = "month";
    setProPrice();
  }
});
proMaus.addEventListener("change", (e) => {
  proPrice.dataset.price = e.target.value;
  setProPrice();
});
