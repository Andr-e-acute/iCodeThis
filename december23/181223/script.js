const selectBtn = document.querySelector(".select-button");

selectBtn.addEventListener("click", () => {
  document.querySelector(".custom-dropdown").classList.toggle("active");
});

const gridButts = document.querySelectorAll(".grid-selector > button");
const productContainer = document.querySelector(".card-container");
gridButts.forEach((butt) => {
  butt.addEventListener("click", () => {
    console.log(butt);
    gridButts.forEach((butt) => {
      butt.classList.remove("selected");
    });
    butt.classList.add("selected");
    console.log(typeof butt.dataset.gridcolumn);
    productContainer.classList.remove(
      "columns1",
      "columns2",
      "columns3",
      "columns4"
    );
    productContainer.classList.add(`columns${butt.dataset.gridcolumn}`);
  });
});
