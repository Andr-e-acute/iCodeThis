const pieChart = document.querySelector(".progress-card .pie");
const piePercentText = pieChart.querySelector("span");
const progressButts = document.querySelectorAll(".progress-items .chapter");

function countChecked(arr) {
  let checkedCount = 0;
  arr.forEach((butt) => {
    if (butt.classList.contains("checked")) {
      checkedCount++;
    }
  });
  setPieChart(checkedCount);
}
function setPieChart(count, percentStep = 25) {
  const percent = percentStep * count;
  piePercentText.textContent = `${percent}`;
  pieChart.style = `--percent:${percent}`;
  if (percent <= 0) {
    pieChart.classList.add("hideProgress");
  } else {
    pieChart.classList.remove("hideProgress");
  }
}

progressButts.forEach((butt) => {
  butt.addEventListener("click", () => {
    butt.classList.toggle("checked");
    countChecked([...progressButts]);
  });
});

countChecked([...progressButts]);
