window.onload = function () {
  emailjs.init("vhxGw3K_-Vr-Ij81v");
};

// This will help the btn to scroll down to the services
document.getElementById("bookScroll").onclick = function () {
  document.getElementById("services").scrollIntoView();
};

// Make an array for the services
const services = [
  { name: "Dry Cleaning", price: 200 },
  { name: "Wash & Fold", price: 100 },
  { name: "Ironing", price: 30 },
  { name: "Stain Removal", price: 500 },
  { name: "Leather & Suede Cleaning", price: 999 },
  { name: "Wedding Dress Cleaning", price: 2800 }
];


// Get all the elements
const serviceList = document.getElementById("services-list");
const cartItems = document.getElementById("cart-items");
const totalAmount = document.getElementById("total");
const emailMsg = document.getElementById("emailMsg");
const subMsg = document.getElementById("subMsg");

// Initialise empty cart array
let cart = [];

// Set total as 0 so that total will calculate without junk
let total = 0;

// Add services to the table which is in the html
for (let i = 0; i < services.length; i++) {
  const service = services[i];

  const div = document.createElement("div");
  div.className = "service-item";

  div.innerHTML =
    "<strong>" +
    service.name +
    "</strong> : ₹" +
    service.price +
    ' <button class="btn add">Add</button>';

  serviceList.appendChild(div);

  const button = div.querySelector("button");


  // after clicking add and remove btn
  button.onclick = function () {
    let index = -1;

    for (let j = 0; j < cart.length; j++) {
      if (cart[j].name === service.name) {
        index = j;
        break;
      }
    }

    if (index === -1) {
      cart.push(service);
      total = total + service.price;

      button.textContent = "Remove";
      button.className = "btn remove";
    } else {
      total = total - cart[index].price;
      cart.splice(index, 1);

      button.textContent = "Add";
      button.className = "btn add";
    }

    //update the cart
    updateCart();
  };
}


// after sending email after the cart to empty for future use
function updateCart() {
  const emptyMsg = document.querySelector(".emptyCartMsg");

  cartItems.innerHTML = "";

  if (cart.length === 0) {
    emptyMsg.style.display = "block";

    // reset all buttons to "Add"
    const buttons = document.querySelectorAll("#services-list .btn");

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].textContent = "Add";
      buttons[i].className = "btn add";
    }

  } else {
    emptyMsg.style.display = "none";
  }

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];

    cartItems.innerHTML +=
      "<tr>" +
      "<td>" +
      (i + 1) +
      "</td>" +
      "<td>" +
      item.name +
      "</td>" +
      "<td>₹" +
      item.price +
      "</td>" +
      "</tr>";
  }

  totalAmount.textContent = total;
}


// Getting elements to send the email
document.getElementById("bookBtn").onclick = function () {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (name === "" || email === "" || phone === "" || cart.length === 0) {
    alert("Please fill all fields and add a service.");
    return;
  }

  let serviceNames = "";

  for (let i = 0; i < cart.length; i++) {
    serviceNames = serviceNames + cart[i].name;

    if (i !== cart.length - 1) {
      serviceNames = serviceNames + ", ";
    }
  }

  const params = {
    user_name: name,
    user_email: email,
    user_phone: phone,
    selected_services: serviceNames,
    total_amount: total
  };


  // Send email
  emailjs
    .send("service_cjps9f7", "template_cc5mlli", params)
    .then(function () {
      emailMsg.classList.remove("hidden");

      cart = [];
      total = 0;

      updateCart();

      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";

      setTimeout(function () {
        emailMsg.classList.add("hidden");
      }, 4000);
    })
    .catch(function () {
      alert("Failed to send email.");
    });
};

// Getting the elements to send the email
document.getElementById("subscribeBtn").onclick = function () {
  const name = document.getElementById("subName").value.trim();
  const email = document.getElementById("subEmail").value.trim();

  if (name === "" || email === "") {
    alert("Please enter name and email.");
    return;
  }

  emailjs
    .send("service_cjps9f7", "template_x5gjrrw", {
      subscriber_name: name,
      subscriber_email: email
    })
    .then(function () {
      subMsg.classList.remove("hidden");

      document.getElementById("subName").value = "";
      document.getElementById("subEmail").value = "";

      setTimeout(function () {
        subMsg.classList.add("hidden");
      }, 4000);
    })
    .catch(function () {
      alert("Failed to subscribe.");
    });
};