const pageNumbers = document.getElementById("pagesNumbers");
const nextButt = document.getElementById("next-butt");
const prevButt = document.getElementById("prev-butt");
const pageCount = 10;
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
  const pageNum = document.createElement("button");
  pageNum.classList.add("pageButt", "goTo");
  pageNum.textContent = str;
  pageNumbers.appendChild(pageNum);
}
function appendPageNum(i) {
  const pageNum = document.createElement("button");
  pageNum.classList.add("pageButt", "num");
  pageNum.dataset.index = i;
  pageNum.textContent = i;
  pageNumbers.appendChild(pageNum);
}

function setCurrentPage(page) {
  currentPage = page;
  createPageArr();
  createPageButt();

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
  setCurrentPage(currentPage + 1);
}
function prevPage() {
  setCurrentPage(currentPage - 1);
}

setCurrentPage(1);
