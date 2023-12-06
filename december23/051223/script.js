const messagebarCloseButt = document.querySelector(".messagebar button.close");

messagebarCloseButt.addEventListener("click", () => {
  const messagebar = messagebarCloseButt.closest(".messagebar");
  console.log(messagebar);
  messagebar.classList.add("hidden");
});
