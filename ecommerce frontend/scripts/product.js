let params = new URLSearchParams(window.location.search);
let productid = params.get("id");
// let cartProductLocal = JSON.parse(localStorage.getItem("cart")) || [];
// let cartProduct = Array.isArray(cartProductLocal)
const wishListProduct= JSON.parse(localStorage.getItem("wishlist") || "[]")  
const cartProduct=JSON.parse(localStorage.getItem("cart") || "[]")
  // ? cartProductLocal
  // : [cartProductLocal];
fetch(`http://localhost:9050/api/v1/product/getSingleProduct/${productid}`)
  .then((res) => res.json())
  .then((data) => displaydata(data.product));

function displaydata(product) {
  const singleproduct = document.getElementById("single-product");
  singleproduct.className = "single-product";

  const left = document.createElement("div");
  left.className = "left";

  const imgContainer = document.createElement("img");
  imgContainer.src = product.image;
  imgContainer.className = "img";

  const right = document.createElement("div");
  right.className = "right";

  const title = document.createElement("h2");
  title.innerHTML = product.title;
  title.className = "title";

  const price = document.createElement("h3");
  price.innerHTML = product.price;
  price.className = "price";

  const description = document.createElement("p");
  description.innerHTML = product.description;
  description.className = "description";

  const categories = document.createElement("h4");
  categories.innerHTML = product.category;
  categories.className = "categories";

  const btnContainer = document.createElement("div");
  btnContainer.className = "btn-container";

  const btnBuy = document.createElement("button");
  btnBuy.innerHTML = "Buy Now";
  btnBuy.className = "btn";

  const btnAdd = document.createElement("button");
  btnAdd.innerHTML = "Add To Cart";
  btnAdd.className = "btn";
  btnAdd.addEventListener("click", function () {
    addToCart(product);
    console.log(product);

 
  });
  const btnWishL= document.createElement("button");
  btnWishL.innerHTML="Add to WishList";
  btnWishL.className="btn WishL"  
  btnWishL.addEventListener("click",function () {
    addToWishlist(product)
    console.log(product)
  });


  left.append(imgContainer);
  btnContainer.append(btnAdd, btnBuy,btnWishL);
  right.append(title, price, description, categories, btnContainer);
  singleproduct.append(left, right);
}


// function addToWishList(b) {
//   let obj = b;
//   if(Object.keys(obj).length != 0) {
//     wishListProduct.push(obj);
//     localStorage.setItem("wishlist",JSON.stringify(wishListProduct));
//     alert("Product Added To Wishlist")
//   }


// } 
function addToWishlist(d) {
  let obj = d ;
  if (Object.keys(obj).length != 0) {
    wishListProduct.push(obj);
    localStorage.setItem("wishlist", JSON.stringify(wishListProduct));
    alert("Product Added To Wishlist");
  }
}


function addToCart(d) {
  let obj = d ;
  if (Object.keys(obj).length != 0) {
    cartProduct.push(obj);
    localStorage.setItem("cart", JSON.stringify(cartProduct));
    alert("Product Added To Cart");
  }
}
