const outputBubble = document.getElementById("userChosenBubble");
const useCaseButtons = document.querySelectorAll(".useCase");
const useCase = document.getElementsByClassName("caseSelected");
const userCount = document.getElementById("userCount");
const planCard = document.querySelector(".plan-card");
const plans = {
  free: {
    name: "Free plan",
    description:
      "Get a free plan with up to 5,000 active users and unlimited logins. No credit card required.",
    price: "free",
    color: "#f4843a",
  },
  standard: {
    name: "Standard Plan",
    description:
      "Get a Standard plan with up to 7,500 active users and unlimited logins.And B2B",
    price: "$100,00",
    color: "#399df3",
  },
  premium: {
    name: "Premium Plan",
    description:
      "Get a Standard plan with up to 10,000 active users and unlimited logins.And B2B B2E Premium Service inclusive",
    price: "$500,00",
    color: "#39f36b",
  },
};

function renderCurrentPlan(plan) {
  planCard.querySelector("h2").textContent = plan.name;
  planCard.querySelector("p").textContent = plan.description;
  planCard.querySelector("button").textContent = `Start for ${plan.price}`;
  document
    .querySelector(":root")
    .style.setProperty("--contrast-color", plan.color);
}
function setBubbleValue(slider, outputBubble) {
  const value = slider.value;
  const min = slider.min;
  const max = slider.max;

  const usValue = Number(value).toLocaleString("en-US", {
    maximumFractionDigits: 2,
  });
  outputBubble.innerHTML = usValue;

  //  dynamic position of the OutputBubble
  const outputBubbleWidth = outputBubble.offsetWidth;
  const sliderPercent = Number(((value - min) * 100) / (max - min));
  const thumbSize = getComputedStyle(slider).getPropertyValue("--thumbSize");
  // so complicates because of the offset of the thumb  no idea how to solve more elegant
  outputBubble.style.left = `calc((${sliderPercent}% - (${thumbSize} * ${
    sliderPercent / 100
  }) - ${outputBubbleWidth}px / 2 + ( ${thumbSize} / 2 ) `;
}
function changePlan() {
  let currentPlan;

  const currentUseCase = useCase[0].name;
  if (currentUseCase === "B2E") {
    currentPlan = plans.premium;
  } else if (currentUseCase === "B2B") {
    if (userCount.value <= 7500) {
      currentPlan = plans.standard;
    } else {
      currentPlan = plans.premium;
    }
  } else if (currentUseCase === "B2C") {
    if (userCount.value <= 5000) {
      currentPlan = plans.free;
    } else if (userCount.value <= 7500) {
      currentPlan = plans.standard;
    } else {
      currentPlan = plans.premium;
    }
  }
  renderCurrentPlan(currentPlan);
}

useCaseButtons.forEach((butt) => {
  butt.addEventListener("click", (e) => {
    // deselect all buttons
    useCaseButtons.forEach((button) => {
      button.classList.remove("caseSelected");
    });
    // select actual
    e.target.classList.add("caseSelected");
    changePlan();
  });
});
userCount.addEventListener("input", (event) => {
  changePlan();
  const slider = event.target;
  setBubbleValue(slider, outputBubble);
});
document.addEventListener(
  "DOMContentLoaded",
  setBubbleValue(userCount, outputBubble)
);
