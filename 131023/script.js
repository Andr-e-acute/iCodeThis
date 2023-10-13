const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((element) => {
      element.classList.remove("selected");
    });
    card.classList.add("selected");
  });
});
