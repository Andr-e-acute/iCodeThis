const daysDisplay = document.querySelector(".dateTime-container>.days>.amount");
const hoursDisplay = document.querySelector(
  ".dateTime-container>.hours>.amount"
);
const minDisplay = document.querySelector(
  ".dateTime-container>.minutes>.amount"
);
const secDisplay = document.querySelector(
  ".dateTime-container>.seconds>.amount"
);
const secLeft = getSecLeft();

function getSecLeft() {
  const now = new Date();
  //   when is christmas in each country
  const endOfCountdown = new Date("2023-12-24T11:59:59");
  return Math.floor((endOfCountdown - now) / 1000);
}
function timer() {
  let minutes = Math.floor(secLeft / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  //   formating time with  0 padding
  daysDisplay.innerHTML = days.toString().padStart(2, "0");
  hoursDisplay.innerHTML = (hours % 60).toString().padStart(2, "0");
  minDisplay.innerHTML = (minutes % 60).toString().padStart(2, "0");
  secDisplay.innerHTML = (secLeft % 60).toString().padStart(2, "0");
}
timer();
setInterval(timer, 1000);
