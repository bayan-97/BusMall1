/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;
var cartItems;
function loadCart() {
  cartItems = JSON.parse(localStorage.getItem('items')) || [];
  // new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tableElement = document.querySelector('#cart tbody');
  console.log(cartItems.length);
  for (let index = 0; index < cartItems.length; index++) {
    var tableRow = document.createElement('tr');
    tableElement.appendChild(tableRow);
    var tableData1 = document.createElement('td');
    tableData1.textContent = "remove";
    tableRow.appendChild(tableData1);
    var tableData2 = document.createElement('td');
    tableData2.textContent = cartItems[index].quantity;
    tableRow.appendChild(tableData2);
    var tableData3 = document.createElement('td');
    var imgData = document.createElement('img');
    imgData.setAttribute('src', Product.allProducts[index].filePath)
    tableData3.appendChild(imgData);
    tableRow.appendChild(tableData3);

    // var removeData = document.createElement('button');

    
    
    
    // tableRow.appendChild(tableData1);
    // tableRow.appendChild(tableData2);
    // tableRow.appendChild(tableData3);
    
    
  }

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}
function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
