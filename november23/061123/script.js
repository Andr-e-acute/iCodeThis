const progressBar = document.querySelector(".year-progress .progressbar");
const percentageDisplay = document.querySelector(".year-progress  .percentage");

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

let fullYearSec = getFullYear();
let secLeft = getTimeLeft();

// need it leapYear == percent wrong
function getFullYear() {
  const now = new Date();
  const startOfYear = new Date(`${now.getFullYear()}-01-01T00:00:00`);
  const endOfYear = new Date(`${now.getFullYear()}-12-31T23:59:59`);
  document.querySelector(
    ".content > h1"
  ).innerHTML = `${now.getFullYear()} Progress`;
  return (endOfYear - startOfYear) / 1000;
}
function getTimeLeft() {
  const now = new Date();
  const endOfYear = new Date(`${now.getFullYear()}-12-31T23:59:59`);
  return Math.floor((endOfYear - now) / 1000);
}

function countDown() {
  let minutes = Math.floor(secLeft / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  //   formating time with padding
  daysDisplay.innerHTML = days.toString().padStart(2, "0");
  hoursDisplay.innerHTML = (hours % 60).toString().padStart(2, "0");
  minDisplay.innerHTML = (minutes % 60).toString().padStart(2, "0");
  secDisplay.innerHTML = (secLeft % 60).toString().padStart(2, "0");

  //   timeLeft.innerHTML = `${days} days,${hours} hours,${minutes} minutes,${sec} seconds`;

  // newYear  secLeft 0 call both getFunction
  if (secLeft <= 0) {
    console.log("newYear");
    fullYearSec = getFullYear();
    secLeft = getTimeLeft();
  }

  secLeft = secLeft - 1;
}
function changePercentLeft() {
  const percentLeft = secLeft / fullYearSec;
  const progress = 1 - percentLeft;
  percentageDisplay.innerHTML = `${progress.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 2,
  })}`;
  progressBar.style.width = `${progress * 100}%`;
}
countDown();
changePercentLeft();

setInterval(countDown, 1000);
// percentage only  change every ~53min 10min interval is good enough
// setInterval(changePercentLeft, 600000);
// for testing every min
setInterval(changePercentLeft, 60000);
