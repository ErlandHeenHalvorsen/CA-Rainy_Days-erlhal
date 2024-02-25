function renderProductCards(list, out) {
  out.innerHTML = "";
  let cardNew = "";

  for (let product of list) {
    cardNew += `<div class="product-cards">
    <div class="card">
      <img
        src="${product.image.url}"
        alt="${product.image.alt}"
      >
      <h2>${product.title}</h2>
      <p>Price: ${product.price}</p>
      <a href="./jacketSpesifick.html?id=${product.id}" class="jacket-card-link">View Product</a>
      <p class="jacket-text">${product.description}</p>
    </div>`;
  }
  out.innerHTML = cardNew;
}

function renderProductList(list, out) {
  out.innerHTML = "";
  let listNew = "";

  for (let product of list) {
    listNew += `<li class="card">
      <img
        src="${product.image.url}"
        alt="${product.image.alt}"
      >
      <div>
        <h2>${product.title}</h2>
        <p>Price: ${product.price}</p>
        <a href="./jacketSpesifick.html?id=${product.id}" class="jacket-card-link">View Product</a>
        <p class="jacket-text">${product.description}</p>
      </div>
    </li>`;
  }
  out.innerHTML = listNew;
}

function renderSingleProduct(product, out) {
  out.innerHTML = `
  <img
    src="${product.image.url}"
    alt="${product.image.alt}"
  />
  <h2>${product.title}</h2>
    <p class="price">${product.price},- <a class="buy-button" href="Checkout.html">Buy Now</a></p>
    <p class="jacket-text">${product.description}</p>
  
  `;
}

export { renderProductCards, renderProductList, renderSingleProduct };
