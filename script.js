document.getElementById("bookScroll").addEventListener("click", () => {
  document.querySelector("#booking").scrollIntoView({ behavior: "smooth" });
});

const services = [
  { name: "Dry Cleaning", price: 200.00 },
  { name: "Wash & Fold", price: 100.00 },
  { name: "Ironing", price: 30.00 },
  { name: "Stain Removal", price: 500.00 },
  { name: "Leather & Suede Cleaning", price: 999.00 },
  { name: "Wedding Dress Cleaning", price: 2800.00 },
];

const serviceList = document.getElementById("services-list");
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");
const emailMsg = document.getElementById("emailMsg");
const subMsg = document.getElementById("subMsg");

let cart = [];
let total = 0;

services.forEach((service) => {
  const div = document.createElement("div");
  div.classList.add("service-item");
  div.innerHTML = `
    <div class="service-details">
      <strong>🏷️ ${service.name}</strong> • ₹${service.price}
    </div>
    <button class="toggle-btn add">Add Item</button>
  `;
  serviceList.appendChild(div);

  const btn = div.querySelector(".toggle-btn");

  btn.addEventListener("click", () => {
    const i = cart.findIndex((item) => item.name === service.name);
    if (i === -1) {
      cart.push(service);
      total += service.price;
      btn.textContent = "Remove Item";
      btn.classList.remove("add");
      btn.classList.add("remove");
    } else {
      total -= cart[i].price;
      cart.splice(i, 1);
      btn.textContent = "Add Item";
      btn.classList.remove("remove");
      btn.classList.add("add");
    }
    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>₹${item.price}</td>
    `;
    cartItems.appendChild(row);
  });
  totalDisplay.textContent = total;
}

document.getElementById("bookBtn").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name || !email || !phone || cart.length === 0) {
    alert("⚠️ Please fill all fields and add at least one service.");
    return;
  }

  emailMsg.classList.remove("hidden");

  cart = [];
  total = 0;
  updateCart();

  document.querySelectorAll(".toggle-btn").forEach((btn) => {
    btn.textContent = "Add Item";
    btn.classList.remove("remove");
    btn.classList.add("add");
  });

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";

  setTimeout(() => {
    emailMsg.classList.add("hidden");
  }, 4000);
});

document.getElementById("subscribeBtn").addEventListener("click", () => {
  const name = document.getElementById("subName").value.trim();
  const email = document.getElementById("subEmail").value.trim();

  if (!name || !email) {
    alert("⚠️ Please enter name and email.");
    return;
  }

  subMsg.classList.remove("hidden");
  document.getElementById("subName").value = "";
  document.getElementById("subEmail").value = "";

  setTimeout(() => {
    subMsg.classList.add("hidden");
  }, 4000);
});
