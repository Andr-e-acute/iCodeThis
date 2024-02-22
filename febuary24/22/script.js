const addHourButt = document.querySelector("button.add");
const cancelButt = document.querySelector("button.cancel");
const saveButt = document.querySelector("button.save");

const addHour = document.querySelector("form.addHour");
addHourButt.addEventListener("click", () => {
  addHour.classList.remove("hidden");
  addHourButt.classList.add("hidden");
});

cancelButt.addEventListener("click", (e) => {
  e.preventDefault();
  addHour.classList.add("hidden");
  addHourButt.classList.remove("hidden");
});
saveButt.addEventListener("click", (e) => {
  e.preventDefault();
  addHour.classList.add("hidden");
  addHourButt.classList.remove("hidden");
});
