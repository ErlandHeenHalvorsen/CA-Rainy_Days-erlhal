import { getAllProducts } from "./get-products.js";
import { renderProductList } from "./utils.js";

const productUl = document.getElementById("productList");

async function displayJackets() {
  const products = await getAllProducts();

  console.log(products);

  renderProductList(products, productUl);
}

displayJackets();
