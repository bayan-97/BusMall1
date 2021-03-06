/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  console.log(Product.allProducts.length);
  var selectElement = document.querySelector('form fieldset label select');
  for(var i=0 ; i < Product.allProducts.length ; i++){
    var options = document.createElement('option');
    options.setAttribute('text', name);
    options.textContent = Product.allProducts[i].name;
    selectElement.appendChild(options);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit() {

  // TODO: Prevent the page from reloading
  event.preventDefault();
 
  // Do all the things ...
  addSelectedItemToCart(event);
  document.getElementById("catalog").reset();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(event) {
  // TODO: suss out the item picked from the select list
  var itemsValue = event.target.items.value;
  // TODO: get the quantity
  var quantityValue = event.target.quantity.value;
  // TODO: using those, add one item to the Cart
  new CartItem(itemsValue, quantityValue);


  
  // Cart.items.push(myItem);
}


// TODO: Update the cart count in the header nav with the number of items in the Cart
var counterSum = 0;
function updateCounter() {
  var counter = document.getElementById('itemCount');
  counterSum += 1;
  var pSpan = document.createElement('p');
  pSpan.textContent = '('+counterSum+')'; 
  counter.appendChild(pSpan);

}
var selectElement = document.getElementById("cartContents");
var ulElement = document.createElement('ul');
var liElement;
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  var test = JSON.parse(localStorage.getItem('items'))
  console.log(test);
  // TODO: Add a new element to the cartContents div with that information
 
  // var selectElement = document.getElementById("cartContents");
  // var ulElement = document.createElement('ul');
  while (ulElement.hasChildNodes()) {  
    ulElement.removeChild(ulElement.firstChild);
  } 
  for(var i=0 ; i < CartItemList.length ; i++){
     liElement = document.createElement('li');
    liElement.textContent = CartItemList[i].product+" "+ CartItemList[i].quantity;
    
    ulElement.appendChild(liElement);
  }
  selectElement.appendChild(ulElement);


}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
