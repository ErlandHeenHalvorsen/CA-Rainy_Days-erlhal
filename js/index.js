import { getAllProducts } from "./get-products.js";
import { listData } from "./utils.js";

const element = document.getElementById("BestSellers");

async function getProducts() {
  try {
    let jackets = await getAllProducts();
    jackets = jackets.filter((obj) => obj.favorite === true);

    listData(jackets, element);
  } catch (error) {
    console.log(error);
  }
}

getProducts();

// bruk denne til å hente ut alle produktene.
