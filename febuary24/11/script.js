const incomplete = document.querySelector("ul.incomplete ");
const completed = document.querySelector("ul.completed ");

let checkboxes = document.querySelectorAll("input[type='checkbox']");

checkboxes.forEach((box) => {
  box.addEventListener("change", () => {
    if (box.checked) {
      completed.appendChild(box.closest("li"));
    } else {
      incomplete.appendChild(box.closest("li"));
    }
  });
});
