// all  Global variables
import { cart, updateCartQuantity, cartQuantity } from "../data/cart.js";
import { products,  } from '../data/products.js';
import { moneyFn } from "./money.js";

let ProductMain = document.querySelector(".products-grid");
let ProductHTML = "";

products.forEach((product) => {
  ProductHTML += `<div class="product-container">
  <div class="product-image-container">
    <img class="product-image"
      src="${product.image}">
  </div>

  <div class="product-name limit-text-to-2-lines">
    ${product.name}
  </div>

  <div class="product-rating-container">
    <img class="product-rating-stars"
      src= ${product.getImage()}>
    <div class="product-rating-count link-primary">
      ${product.rating.count}
    </div>
  </div>

  <div class="product-price">
    $${product.getPrice()}
  </div>

  <div class="product-quantity-container ">
    <select class = "js-quantity-selector-${product.id}">
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  </div>
  ${product.setImage()}
  ${product.warrantyLink()}
  ${product.instructionLink()}
  <div class="product-spacer"></div>

  <div class="added-to-cart added-to-cart-${product.id}">
    <img src="images/icons/checkmark.png">
   <p>Added</p> 
  </div>

  <button class="add-to-cart-button button-primary" data-product-id="${
    product.id
  }" data-product-name="${product.name}">
    Add to Cart
  </button>
</div>`;
});

ProductMain.innerHTML = ProductHTML;

const addCartBtn = document.querySelectorAll(".add-to-cart-button");



function animateAddToCart(param,productID) {
    let added = document.querySelector(`.added-to-cart-${productID}`);
    let isShowing = false;
    let IntervalID;
    if (isShowing === false) {
      IntervalID = setTimeout(() => {
        added.classList.add("added-opacity");
      }, 200);
      setTimeout(() => added.classList.remove("added-opacity"), 2000);
      isShowing = true;
    } else {
      clearInterval(IntervalID);
      added.classList.remove("added-opacity");
      isShowing = false
    }
      let cartQuantiyNo = document.querySelector(".cart-quantity");

    cartQuantiyNo.innerHTML = cartQuantity;

}

addCartBtn.forEach((button) => {
  button.addEventListener("click", () => {
    let productID = button.dataset.productId;
    animateAddToCart(button,productID)
     updateCartQuantity(productID, button);
  
  });
});
