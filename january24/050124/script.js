const display = document.getElementById("display");
const numberButts = document.querySelectorAll(".num");
const clearButts = document.querySelectorAll(".clear");
const funcButt = document.querySelectorAll(".func");

let currentNumber = "";
let secondNumber = "";
let operator = "";

function pressedNumber(e) {
  const number = e.target.textContent;
  if (currentNumber == 0) {
    currentNumber = number;
  } else if (currentNumber.length < 8) {
    currentNumber += number;
  }
  showDisplay();
}

function showDisplay() {
  display.value = `${secondNumber}${operator}${currentNumber}`;
}

function handleFunc(e) {
  const symb = e.target.textContent;
  if (operator === "") {
    console.log("empty");
  }
}
numberButts.forEach((numButt) => {
  numButt.addEventListener("click", (e) => {
    pressedNumber(e);
  });
});

clearButts.forEach((clear) => {
  clear.addEventListener("click", () => {
    currentNumber = "0";
    secondNumber = "";
    operator = "";
    showDisplay();
  });
});

funcButt.forEach((func) => {
  func.addEventListener("click", (e) => {
    handleFunc(e);
  });
});
