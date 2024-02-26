import { getCart } from "./cart.js";

function renderCart() {
  const cartDiv = document.getElementById("cart");
  const cart = getCart();

  cartDiv.innerHTML = "";

  if (cart.length === 0) {
    cartDiv.textContent = "Your cart is empty.";
    return;
  }

  const ul = document.createElement("ul");

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `Product ID: ${item}`;
    ul.appendChild(li);
  });

  cartDiv.appendChild(ul);
}

renderCart();
