let WishListProduct = JSON.parse(localStorage.getItem("wishlist") || "[]");
function getData() {
  if (WishListProduct.length > 0) {
    displaydata(WishListProduct);
    console.log(WishListProduct);
  }
}
getData();

function displaydata(product) {
  const main = document.querySelector(".main");
  main.className = "main";
  product.map((item, index) => {
    const left = document.createElement("div");
    left.className = "left";

    const imgContainer = document.createElement("img");
    imgContainer.src = item.image;
    imgContainer.className = "img";

    const right = document.createElement("div");
    right.className = "right";

    const title = document.createElement("h2");
    title.innerHTML = item.title;
    title.className = "title";

    const price = document.createElement("h3");
    price.innerHTML = item.price;
    price.className = "price";

    const description = document.createElement("p");
    description.innerHTML = item.description;
    description.className = "description";

    const categories = document.createElement("h4");
    categories.innerHTML = item.category;
    categories.className = "categories";

    const removeWishL = document.createElement("removeWishL");
    removeWishL.innerHTML = "Remove from Wishlist";
    removeWishL.className = "btn removeWishL ";
    removeWishL.addEventListener("click", function () {
      removeFromWishlist(item.id);
      
    });

    left.append(imgContainer);
    right.append(title, price, description, categories, removeWishL);
    main.append(left, right);
  });
}

function removeFromWishlist(id) {
  WishListProduct = WishListProduct.filter((item) => item.id !== id);
  localStorage.setItem("wishlist", JSON.stringify(WishListProduct));
  alert("product remove from the cart");
  window.location.reload();
}