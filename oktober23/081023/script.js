const notifyButts = document.querySelectorAll(".notify-butt");
const dropdowns = document.querySelectorAll(".dropdown");
const notifyDropdown = document.querySelector(".dropdowns > .notifications");
const messagesDropdown = document.querySelector(".dropdowns >.messages");
const body = document.querySelector("body");

function deselectNotifyButts() {
  notifyButts.forEach((butt) => {
    butt.classList.remove("selected");
  });
}

function dropdownsUp() {
  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("active");
  });
}

notifyButts.forEach((butt) => {
  butt.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    deselectNotifyButts();
    butt.classList.add("selected");
    if (butt.classList.contains("notifications")) {
      dropdownsUp();
      notifyDropdown.classList.add("active");
    }
    if (butt.classList.contains("messages")) {
      dropdownsUp();
      messagesDropdown.classList.add("active");
    }
  });
});
body.addEventListener("click", () => {
  deselectNotifyButts();
  dropdownsUp();
});
