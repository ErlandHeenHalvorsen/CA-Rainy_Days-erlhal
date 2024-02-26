import { getAllProducts } from "./get-products.js";
import { renderProductCards } from "./utils.js";

const element = document.getElementById("BestSellers");

async function getProducts() {
  try {
    let jackets = await getAllProducts();
    jackets = jackets.filter((obj) => obj.favorite === true);

    renderProductCards(jackets, element);
  } catch (error) {
    console.log(error);
  }
}

getProducts();
