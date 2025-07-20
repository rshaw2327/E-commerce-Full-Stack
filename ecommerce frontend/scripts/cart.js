
// let cartProductLocal=JSON.parse(localStorage.getItem("cart")) || []
// let cartItems=Array.isArray(cartProductLocal)?cartProductLocal:[cartProductLocal]
const cartItems=JSON.parse(localStorage.getItem("cart") || "[]")
function getData() {

  if (cartItems.length > 0) {
    showData(cartItems);
  }
}
getData();

function showData(cartItems) {
  console.log(cartItems);

  let totalCartItemsValue = cartItems.length;
  let subtotalValue = 0;
  let discountValue = 5;
  let amountTopayValue = 0;
  let cartM = document.querySelector(".cart-m");
  let cartProducts = document.createElement("div");
  cartProducts.className = "cart-products";
  cartItems.map((item, index) => {
    let singleProduct = document.createElement("div");
    singleProduct.className = "single-product";

    let left = document.createElement("div");
    left.className = "left";

    let img = document.createElement("img");
    img.className = "img";
    img.src = item.image;

    let right = document.createElement("div");
    right.className = "right";

    let title = document.createElement("h2");
    title.className = "title";
    title.innerHTML = item.title;

    let price = document.createElement("h3");
    price.className = "price";
    price.innerHTML = item.price;
    subtotalValue = subtotalValue + item.price;

    let description = document.createElement("p");
    description.className = "description";
    description.innerHTML = item.description;

    let categories = document.createElement("h4");
    categories.className = "categories";
    categories.innerHTML = item.category;

    let removeCart = document.createElement("button");
    removeCart.className = "removeCart";
    removeCart.innerHTML = "Remove From Cart";
    removeCart.addEventListener("click", function () {
      removeFromCart(item.id);
    });

    right.append(title, price, description, categories, removeCart);

    left.append(img);
    singleProduct.append(left, right);
    cartProducts.append(singleProduct);
  });

  function removeFromCart(id) {
    cartItems = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert("product remove from the cart");
    window.location.reload();
  }
  let cartTotal = document.createElement("div");
  cartTotal.className = "cart-total";

  let cart_total = document.createElement("h2");
  //   cart_total.className = "cart-total";
  cart_total.innerHTML = "Cart Total";

  let totalItems = document.createElement("span");
  totalItems.className = "totalItems";
  totalItems.innerHTML = " Total Cart Items ";

  let strong_total = document.createElement("strong");
  strong_total.className = "strong";
  strong_total.innerHTML = totalCartItemsValue;
  totalItems.append(strong_total);

  let subtotal = document.createElement("span");
  subtotal.className = "subtotal";
  subtotal.innerHTML = " Subtotal ";

  let strong_subtotal = document.createElement("strong");
  strong_subtotal.className = "strong";
  strong_subtotal.innerHTML = subtotalValue.toFixed(2);
  subtotal.append(strong_subtotal);

  amountTopayValue = (
    subtotalValue -
    (subtotalValue * discountValue) / 100
  ).toFixed(2);

  let discount = document.createElement("span");
  discount.className = "discount";
  discount.innerHTML = " Discount ";

  let strong_discount = document.createElement("strong");
  strong_discount.className = "strong";
  strong_discount.innerHTML = discountValue + "%";
  discount.append(strong_discount);

  let hr = document.createElement("hr");

  let amount_to_pay = document.createElement("span");
  amount_to_pay.className = "bold";
  amount_to_pay.innerHTML = "Amount To Pay ";

  let strong_amount_pay = document.createElement("strong");
  strong_amount_pay.className = "strong";
  strong_amount_pay.innerHTML = amountTopayValue;
  amount_to_pay.append(strong_amount_pay);

  let btncheckout = document.createElement("button");
  btncheckout.className = "btncheckout";
  btncheckout.innerHTML = "Checkout";
  cartTotal.append(
    cart_total,
    totalItems,
    subtotal,
    discount,
    hr,
    amount_to_pay,
    btncheckout
  );

  cartM.append(cartProducts, cartTotal);
}
