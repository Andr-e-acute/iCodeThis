const loginButt = document.getElementById("login");
const loginCard = document.querySelector(".loginCard");
const lampCard = document.getElementById("lampCard");
const onOffButt = document.getElementById("on-off");

loginButt.addEventListener("click", () => {
  loginCard.classList.add("hidden");
  lampCard.classList.remove("hidden");
});

onOffButt.addEventListener("click", () => {
  console.log(onOffButt);
  lampCard.classList.toggle("off");
});
