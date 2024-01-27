const addable = document.querySelectorAll("li");
addable.forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelectorAll(".checked").forEach((checked) => {
      checked.classList.remove("checked");
    });

    element.classList.add("checked");
  });
});
