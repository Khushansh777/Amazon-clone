// all  Global variables
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
      src="images/ratings/rating-${product.rating.stars * 10}.png">
    <div class="product-rating-count link-primary">
      ${product.rating.count}
    </div>
  </div>

  <div class="product-price">
    $${(product.priceCents / 100).toFixed(2)}
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

let cartQuantity = 0;
addCartBtn.forEach((button) => {
  button.addEventListener("click", () => {
    let productID = button.dataset.productId;
    let { productName } = button.dataset;
    let added = document.querySelector(`.added-to-cart-${productID}`);
    let selector = document.querySelector(`.js-quantity-selector-${productID}`);
    let value = Number(selector.value);
    let isThere = false;
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

    if (cart.length > 0) {
      cart.forEach((element) => {
        if (element.id === productID) {
          element.quantity += value;
          cartQuantity += value;
          isThere = true;
        }
      });
    }
    // Add new item to cart OUTSIDE the forEach loop
    if (!isThere) {
      cart.push({ name: productName, quantity: value, id: productID });
      cartQuantity += value;
    }
    console.log(cart);
    let cartQuantiyNo = document.querySelector(".cart-quantity");

    cartQuantiyNo.innerHTML = cartQuantity;
  });
});
