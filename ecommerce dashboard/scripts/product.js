const createBtn = document.querySelector(".c-btn");
createBtn.addEventListener("click", () => createProduct());

function createProduct() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;
  const price = document.getElementById("price").value;
  const stock = document.getElementById("stock").value;

  const body = {
    title: title,
    description: description,
    category: category,
    price: price,
    stock: stock,
  };
  console.log(body);
  fetch("http://localhost:9050/api/v1/product/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) =>{
      // showProducts(data);
      alert("Product created successfully")
      window.location.href="products.html"

    })
  }

fetch("http://localhost:9050/api/v1/product/getAllProducts", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => showProducts(data));

function showProducts(data) {
  console.log(data);
  let tbody = document.querySelector("#products tbody");
  data.products.forEach((product) => {
    let trhtml = `
      <tr>
          <td>${product.title}</td>
          <td>${product.category}</td>
          <td>${product.price}</td>
          <td><i class="fa-solid fa-pen-to-square"></i> <i class="fa-solid fa-trash"></i></td>
      </tr> `;
    tbody.innerHTML += trhtml;
  });
}

const createBtnEl = document.querySelector(".create-btn");

const spanCloseEl = document.querySelector(".close");

const modalEl = document.querySelector(".modal");
createBtnEl.addEventListener("click", () => {
  modalEl.classList.add("active");
});

spanCloseEl.addEventListener("click", () => {
  console.log("ckjkj");
  modalEl.classList.remove("active");
});


