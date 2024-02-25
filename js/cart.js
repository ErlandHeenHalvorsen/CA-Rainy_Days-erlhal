function getCart() {
  // get cart
  let cart = localStorage.get("rainy-cart");

  if (cart) {
    cart = JSON.parse(cart);

    return cart;
  }
}

function addToCart(id) {
  // get cart
  let cart = localStorage.get("rainy-cart");

  //   cart ? (cart = JSON.parse(cart)) : (cart = []);

  // if cart exist parse JSON
  // else create new array
  if (cart) {
    cart = JSON.parse(cart);
  } else {
    cart = [];
  }

  // find product
  let product = cart.find((item) => item === id);

  // if product is not in cart, push ID to array
  // set localstorage and return cart
  if (!product) {
    cart.push(product);
    localStorage.setItem("rainy-cart", JSON.stringify(cart));

    return cart;
  }
}

function removeFromCart(id) {
  // get cart from localstorage
  let cart = localStorage.get("rainy-cart");
  cart = JSON.parse(cart);

  // get product index
  let index = cart.indexOf((item) => item === id);

  // if product index is 0 or more, remove from array and set localstorage and return cart
  if (index >= 0) {
    cart.splice(index, 1);
    localStorage.setItem("rainy-cart", JSON.stringify(cart));

    return cart;
  }
}

export { getCart, addToCart, removeFromCart };
