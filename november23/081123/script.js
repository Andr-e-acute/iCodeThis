const ticketHorizontal = document.querySelectorAll(".horizontal > *:not(p)");
const vertical = document.querySelector(".vertical .rotate-container");
ticketHorizontal.forEach((node) => {
  vertical.prepend(node.cloneNode(true));
});
