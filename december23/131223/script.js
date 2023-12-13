const toogleChatButt = document.querySelector(".open-chat");
const chatWindow = document.querySelector(".chat-window");
toogleChatButt.addEventListener("click", () => {
  chatWindow.classList.toggle("hidde");
});
