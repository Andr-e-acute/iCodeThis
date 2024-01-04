let vistorNumbers = [
  { name: "morbi ligula", count: 15756 },
  { name: " Scelerisque", count: 11144 },
  { name: "Praesent maecenas", count: 8838 },
  { name: "Morbi ligula", count: 1539 },
  { name: "morbi Ligula", count: 1153 },
];

const colors = ["#b671c6", "#e84b7a", "#ee6d19", "#fdd54f", "#74eeb3"];

let total = 0;
const graph = document.querySelector(".data .graph");
const vistorTotal = document.getElementById("visitorTotal");
const dataLegend = document.querySelector(".data .legend");

function setTotal(numbers) {
  numbers.forEach((country) => {
    total += country.count;
  });
  vistorTotal.textContent = `${Math.round(total / 1000)}k`;
}

function addPercent(numbers) {
  numbers.forEach((country) => {
    country.percent = (country.count / total) * 100;
  });
}
function setLegend(numbers) {
  dataLegend.innerHTML = "";
  numbers.forEach((number, index) => {
    number.color = colors[index];
    const div = document.createElement("div");
    const name = document.createTextNode(number.name);
    const percent = document.createElement("span");
    percent.textContent = `${Math.round(number.percent)}%`;
    percent.style.backgroundColor = number.color;
    div.appendChild(percent);
    div.appendChild(name);
    dataLegend.appendChild(div);
  });
}

function setGraph(numbers) {
  let gradientStr = "";
  const gap = 0.25;
  let currentPerc = 0;
  //   fucked up percent like because of the gaps in the chart
  let percentMinusGap = (100 - numbers.length * gap * 2) / 100;

  numbers.forEach((number) => {
    const numberPercent = number.percent * percentMinusGap;
    let partStr = `${number.color} ${currentPerc}% ${
      numberPercent + currentPerc
    }%, var(--bg-color) ${currentPerc + numberPercent + gap}% ,`;
    currentPerc = currentPerc + numberPercent + gap * 2;
    gradientStr += partStr;
  });
  // for smoother transition to start of chart.
  gradientStr += `${numbers[0].color} 100%`;
  graph.style.background = `conic-gradient(${gradientStr})`;
}

window.addEventListener("load", () => {
  setTotal(vistorNumbers);
  addPercent(vistorNumbers);
  setLegend(vistorNumbers);
  setGraph(vistorNumbers);
});
