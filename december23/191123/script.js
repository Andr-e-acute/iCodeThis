const paymentChoseInput = document.querySelectorAll(
  "form .payment-container input "
);
const paymentForms = document.querySelectorAll(".payment-form");
paymentChoseInput.forEach((input) => {
  input.addEventListener("click", (e) => {
    const paymentInput = document.querySelector(
      `#${input.dataset.paymentmethod}-form`
    );
    paymentForms.forEach((form) => {
      form.style.display = "none";
      const allRequireds = form.querySelectorAll("input[required]");
      allRequireds.forEach((input) => {
        input.required = false;
      });
    });

    if (paymentInput.id == "card-form") {
      paymentInput.style.display = "grid";
    } else {
      paymentInput.style.display = "flex";
    }

    paymentInput.querySelectorAll("input").forEach((input) => {
      input.required = true;
    });
  });
});
