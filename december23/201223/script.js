const cards = document.querySelectorAll(".card");
const cartCounter = document.getElementById("cart-counter");
const cartMessage = document.getElementById("cart-message");
const cartMessageRemoved = document.getElementById("cart-message-removed");
let cart = [];
function addMarkedToCart() {
  cart = [];
  const addedProducts = document.querySelectorAll(".container .card.added");
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
addMarkedToCart();
refreshCart();
