import { getSingleProduct } from "./get-products.js";
import { renderSingleProduct } from "./utils.js";

let params = new URLSearchParams(document.location.search);
let id = params.get("id");

const showcase = document.querySelector(".showcase");

async function singleProduct() {
  const singleProduct = await getSingleProduct(id);
  console.log(singleProduct);
  renderSingleProduct(singleProduct, showcase);
}

singleProduct();
