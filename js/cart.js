function getCart() {
  let cart = localStorage.getItem("rainy-cart");

  if (cart) {
    cart = JSON.parse(cart);
  } else {
    cart = [];
  }

  return cart;
}

function addToCart(id) {
  let cart = localStorage.getItem("rainy-cart");

  if (cart) {
    cart = JSON.parse(cart);
  } else {
    cart = [];
  }

  let productIndex = cart.findIndex((item) => item === id);

  if (productIndex === -1) {
    cart.push(id);
    localStorage.setItem("rainy-cart", JSON.stringify(cart));

    return cart;
  }
}

function removeFromCart(id) {
  let cart = localStorage.getItem("rainy-cart");

  if (cart) {
    cart = JSON.parse(cart);
  } else {
    return;
  }

  let index = cart.findIndex((item) => item === id);

  if (index >= 0) {
    cart.splice(index, 1);
    localStorage.setItem("rainy-cart", JSON.stringify(cart));

    return cart;
  }
}

export { getCart, addToCart, removeFromCart };
