const api = "https://v2.api.noroff.dev/rainy-days";

async function getAllProducts() {
  let response = await fetch(api);
  response = await response.json();
  let data = response.data;

  return data;
}

async function getSingleProduct(id) {
  let response = await fetch(`${api}/${id}`);
  response = await response.json();
  let data = response.data;

  return data;
}

export { getAllProducts, getSingleProduct };
