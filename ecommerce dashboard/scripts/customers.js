const createUserBtn = document.querySelector(".c-btn");

createUserBtn.addEventListener("click", () => createUser());

function createUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phone_number").value;
  const password = document.getElementById("password").value;
  const address = document.getElementById("address").value;

  const body = {
    name: name,
    email: email,
    phone_number: phoneNumber,
    password: password,
    address: address,
  };
  console.log(body);
  fetch("http://localhost:9050/api/v1/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("User created successfully");
      window.location.href="customers.html"
    });
}

fetch("http://localhost:9050/api/v1/getAllUsers", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => showUsers(data));

function showUsers(data) {
  let tbody = document.querySelector("tbody");
  data.users.forEach((user) => {
    let trhtml = `
        <tr>
                        <td><input type="checkbox"></td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.phone_number}</td>
                        <td>${user.address}</td>
                        <td><i class="fa-solid fa-pen-to-square"></i> <i class="fa-solid fa-trash"></i> </td>
                    </tr>`;

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
