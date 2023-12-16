const pageNumbers = document.getElementById("pagesNumbers");
const nextButt = document.getElementById("next-butt");
const prevButt = document.getElementById("prev-butt");
const goToModal = document.getElementById("goToModal");
const pageCount = 16;

let currentPage;
let pageArr = [];

function createPageArr() {
  pageArr = [];
  pageArr.push(1);

  if (currentPage < 3) {
    for (let i = 2; i <= 5; i++) {
      pageArr.push(i);
    }
    pageArr.push("...");
  } else if (currentPage >= pageCount - 3) {
    pageArr.push("...");
    for (let i = pageCount - 3; i < pageCount; i++) {
      pageArr.push(i);
    }
  } else {
    pageArr.push("...");

    pageArr.push(currentPage - 1);
    pageArr.push(currentPage);
    pageArr.push(currentPage + 1);

    pageArr.push("...");
  }
  pageArr.push(pageCount);
}
function createPageButt() {
  // need to create an array with the placeholders ... for more then 5 pages
  //   for (let i = 1; i <= pageCount; i++) {
  //     appendPageNum(i);
  //   }
  pageNumbers.innerHTML = "";
  pageArr.forEach((num) => {
    if (num === "...") {
      appendGoTo(num);
    } else {
      appendPageNum(num);
    }
  });
}
function appendGoTo(str) {
  const goTo = document.createElement("button");
  goTo.classList.add("pageButt", "goTo");
  goTo.textContent = str;
  pageNumbers.appendChild(goTo);
  goTo.addEventListener("click", () => {
    goToModal.classList.remove("hidden");
    goToModal.style.left = `${goTo.offsetLeft - goToModal.clientWidth / 2}px`;
  });
}
function appendPageNum(i) {
  const pageNum = document.createElement("button");
  pageNum.classList.add("pageButt", "num");
  pageNum.dataset.index = i;
  pageNum.textContent = i;
  pageNumbers.appendChild(pageNum);
  pageNum.addEventListener("click", () => {
    setCurrentPage(i);
  });
}

function setCurrentPage(page) {
  currentPage = page;
  createPageArr();
  createPageButt();
  goToModal.classList.add("hidden");

  //   currentPage Number status
  document.querySelectorAll(".pageButt.num").forEach((butt) => {
    butt.classList.remove("selected");
    if (butt.dataset.index == currentPage) {
      butt.classList.add("selected");
    }
  });
  //prevNextButt status
  nextButt.addEventListener("click", nextPage);
  nextButt.classList.remove("deactive");
  prevButt.addEventListener("click", prevPage);
  prevButt.classList.remove("deactive");
  if (currentPage <= 1) {
    prevButt.removeEventListener("click", prevPage);
    prevButt.classList.add("deactive");
  }
  if (currentPage >= pageCount) {
    nextButt.removeEventListener("click", nextPage);
    nextButt.classList.add("deactive");
  }
}

function nextPage() {
  setCurrentPage(Number(currentPage) + 1);
}
function prevPage() {
  setCurrentPage(Number(currentPage) - 1);
}
goToModal.addEventListener("submit", (e) => {
  e.preventDefault();
  goToModal.querySelector("input").setAttribute("max", `${pageCount}`);
  const value = goToModal.querySelector("input").value;
  setCurrentPage(Number(value));
});
setCurrentPage(7);
