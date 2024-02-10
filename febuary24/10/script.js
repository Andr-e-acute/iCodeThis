const colors = {
  free: "#3a393a",
  basic: "#192858",
  pro: "#882173",
  premium: "#17b4ce",
};

const downloadSelector = document.querySelectorAll(".downs");
const card = document.querySelector("body>.card");
downloadSelector.forEach((butt) => {
  butt.addEventListener("click", () => {
    if (butt.classList.contains("selected")) {
      return;
    } else {
      downloadSelector.forEach((btn) => {
        btn.classList.remove("selected");
      });
      butt.classList.add("selected");
      choosePlan(butt.classList);
    }
  });
});

function choosePlan(list) {
  if (list.contains("free")) {
    changeColor("free");
    changePlan("free");
  } else if (list.contains("basic")) {
    changeColor("basic");
    changePlan("basic");
  } else if (list.contains("pro")) {
    changeColor("pro");
    changePlan("pro");
  } else {
    changeColor("premium");
    changePlan("premium");
  }
}

function changeColor(plan) {
  console.log(colors[plan]);
  card.style.setProperty("--color", colors[plan]);
}

function changePlan(planSelected) {
  document.querySelectorAll(".plan").forEach((plan) => {
    if (plan.classList.contains(planSelected)) {
      plan.classList.remove("hidden");
    } else {
      plan.classList.add("hidden");
    }
  });
}
