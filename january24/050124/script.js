const display = document.getElementById("display");
const numberButts = document.querySelectorAll(".num");
const clearButts = document.querySelectorAll(".clear");
const funcButt = document.querySelectorAll(".func");
const equalButt = document.querySelector(".equal");
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

function calc() {
  let result = "";
  switch (operator) {
    case "+":
      result = Number(currentNumber) + Number(secondNumber);
      break;
    case "-":
      result = Number(currentNumber) - Number(secondNumber);
      break;
    case "÷":
      result = Number(secondNumber) / Number(currentNumber);
      break;
    case "x":
      result = Number(currentNumber) * Number(secondNumber);
      break;

    default:
      break;
  }
  if (result !== "") {
    secondNumber = result;
    operator = "";
    currentNumber = "";
  }
}
function handleFunc(e) {
  const symb = e.target.textContent;

  if (operator === "") {
    operator = symb;
    secondNumber = currentNumber;
    currentNumber = "";
  } else {
    calc();
    operator = symb;
  }
  showDisplay();
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

equalButt.addEventListener("click", () => {
  calc();
  currentNumber = secondNumber;
  secondNumber = "";
  showDisplay();
});
