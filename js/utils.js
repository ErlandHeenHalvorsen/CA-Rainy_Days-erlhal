export function listData(list, out) {
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

function listProduct() {}
