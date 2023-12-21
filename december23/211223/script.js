const cards = document.querySelectorAll(".card");
const cartCounter = document.getElementById("cart-counter");
const cartMessage = document.getElementById("cart-message");
const cartMessageRemoved = document.getElementById("cart-message-removed");
const shopButt = document.getElementById("shopButt");
const faqButt = document.getElementById("faqButt");
const shopContent = document.querySelector("main > .shop-container");
const faqContent = document.querySelector("main > .faq-container");
const faqExpandButt = document.querySelectorAll(
  ".expand-container button.expand"
);
const faqQuestions = document.querySelectorAll(".expand-container");
let cart = [];

function addMarkedToCart() {
  cart = [];
  const addedProducts = document.querySelectorAll(
    ".shop-container .card.added"
  );
  addedProducts.forEach((product) => {
    cart.push(product.dataset.product);
  });
}
function refreshCart() {
  if (cart.length >= 1) {
    cartCounter.classList.remove("hidden");
    cartCounter.textContent = `${cart.length}`;
  } else {
    cartCounter.classList.add("hidden");
  }
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("added");
    if (card.classList.contains("added")) {
      cartMessage.classList.remove("hidden");
      setTimeout(() => {
        cartMessage.classList.add("hidden");
      }, "1000");
    } else {
      cartMessageRemoved.classList.remove("hidden");
      setTimeout(() => {
        cartMessageRemoved.classList.add("hidden");
      }, "1000");
    }
    addMarkedToCart();
    refreshCart();
  });
});

shopButt.addEventListener("click", () => {
  shopContent.classList.remove("hidden");
  faqContent.classList.add("hidden");
});
faqButt.addEventListener("click", () => {
  faqContent.classList.remove("hidden");
  shopContent.classList.add("hidden");
});

faqExpandButt.forEach((butt) => {
  butt.addEventListener("click", () => {
    butt.closest(".expand-container").classList.toggle("closed");
  });
});
faqQuestions.forEach((expand) => {
  console.log("test");
  expand.addEventListener("click", () => {
    expand.classList.toggle("closed");
  });
});
addMarkedToCart();
refreshCart();
