/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
    document.getElementById("cart").remove();
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tablebody=document.getElementById('cart').getElementsByTagName('tbody');
  table.appendChild(tablebody);

  // TODO: Iterate over the items in the cart
  for (let i=0; i<cart.length;i++){
        // TODO: Create a TR
      let trElement=document.createElement('tr');
      tablebody.appendChild(trElement);
  // TODO: Create a TD for the delete link, quantity,  and the item
      let tdElement1=document.createElement('td');
      tdElement1.textContent=cart[i].removeItem(cart.name);
      trElement.appendChild(tdElement1);

      let tdElement2=document.createElement('td');
      tdElement2.textContent=cart[i].quantity;
      trElement.appendChild(tdElement2);

      let tdElement3=document.createElement('td');
      tdElement2.textContent=Product.allProducts[i].name;
      trElement.appendChild(tdElement2);
  }
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
