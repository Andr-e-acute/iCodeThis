const exercises = document.querySelectorAll("section ul li");
exercises.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("done");
  });
});
