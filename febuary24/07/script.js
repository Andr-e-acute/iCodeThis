const moreList = document.querySelector("ul.more-list");
const moreButt = document.querySelector("button.more");
moreButt.addEventListener("click", () => {
  moreList.classList.toggle("hidden");
});
