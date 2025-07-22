fetch("https://e-commerce-full-stack-production.up.railway.app/api/v1/product/getAllProducts")
  .then((res) => res.json())
  .then((data) => showData(data.products));

function showData(data) {
  console.log(data);
  const products = document.getElementById("products");
  data.map((item, index) => {
    const product = document.createElement("a");
    product.className = "product";
    product.href = `product.html?id=${item._id}`;
    const title = document.createElement("h2");
    title.innerHTML = item.title;
    const imageContainer = document.createElement("div");
    // imageContainer.setAttribute("class","img")
    imageContainer.className = "img";
    imageContainer.style.margin = "50px";
    const image = document.createElement("img");
    image.src = item.image;
    imageContainer.append(image);
    const price = document.createElement("h3");
    price.innerHTML = item.price;
    const description = document.createElement("p");
    description.innerHTML = item.description;
    description.style.fontSize = "20px";
    const categories = document.createElement("h4");
    categories.innerHTML = item.category;
    product.append(title, imageContainer, price, description, categories);
    products.append(product);
  });
}
