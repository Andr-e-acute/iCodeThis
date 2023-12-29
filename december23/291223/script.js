const draggables = document.querySelectorAll(".card[draggable = 'true']");

draggables.forEach((card) => {
  card.addEventListener("dragend", (event) => {
    const height = event.target.offsetHeight / 2;
    const width = event.target.offsetWidth / 2;

    card.style.top = `${event.y - height}px`;
    card.style.left = `${event.x - width}px`;
  });
});
