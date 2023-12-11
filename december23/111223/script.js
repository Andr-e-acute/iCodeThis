const giftAmount = document.getElementById("gift-amount");
const decreaseButt = document.getElementById("dec-amount");
const increaseButt = document.getElementById("inc-amount");
const selectAmountButts = document.querySelectorAll(".amount-select");
const errorMessage = document.querySelector("form .error-message");

function inputRangeError(input) {
  errorMessage.textContent = "";
  console.log(input.validity);
  if (input.validity.rangeUnderflow) {
    errorMessage.textContent = "amount to low for a gift Card";
    errorMessage.classList.add("active");
  }
  if (input.validity.rangeOverflow) {
    errorMessage.textContent = "amount to high for a gift Card";
    errorMessage.classList.add("active");
  }
  if (input.validity.stepMismatch) {
    errorMessage.textContent = "only five dollar steps possible";
    errorMessage.classList.add("active");
  }
  if (input.validity.valid) {
    errorMessage.textContent = "";
    errorMessage.classList.remove("active");
  }
}

giftAmount.addEventListener("change", () => {
  inputRangeError(giftAmount);
});

decreaseButt.addEventListener("click", (e) => {
  e.preventDefault();
  giftAmount.value = Number(giftAmount.value) - 5;
  inputRangeError(giftAmount);
});

increaseButt.addEventListener("click", (e) => {
  e.preventDefault();
  giftAmount.value = Number(giftAmount.value) + 5;
  inputRangeError(giftAmount);
});

giftAmount.addEventListener("click", (e) => {
  e.stopPropagation();
});

selectAmountButts.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const amount = button.querySelector("span").textContent;
    console.log(amount);
    giftAmount.value = Number(amount);
  });
});
