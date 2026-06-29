let cart = [];

function addCart(name, price) {
  cart.push({
    name: name,
    price: price,
  });

  displayCart();
}

function displayCart() {
  let box = document.getElementById("cartItems");

  box.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    box.innerHTML += `

<div class="cartBox">

<p>${item.name}</p>

<p>₹${item.price}</p>

<button onclick="removeItem(${index})">
Remove
</button>

</div>

`;
  });

  document.getElementById("count").innerHTML = cart.length;

  document.getElementById("total").innerHTML = total;
}

function removeItem(index) {
  cart.splice(index, 1);

  displayCart();
}
