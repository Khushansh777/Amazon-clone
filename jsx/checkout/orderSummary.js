import {products} from '../../data/products.js';
import {cart, cartQuantity, deleteCartItem, updateDeleiveryOption,calcDeliveryCart} from '../../data/cart.js';
 import { renderPayementSummary } from './payementSUmmary.js';
 import { checkoutHeader } from '../checkoutheader.js';
export const date = document.querySelector('.delivery-date');

export function renderOrderSummary() {
  if (!products || products.length === 0) {
    console.log('Products not loaded yet, will render when products are available');
    return;
  }
document.addEventListener('DOMContentLoaded', () => {
const container =  document.querySelector('.order-summary');
if (!container) {
    console.error('Order summary container not found in DOM!');
    return;
  }
  renderCart();

function renderCart() {
   
  checkoutHeader(cartQuantity)

 
let html = '';

if (!cart || cart.length === 0) {
    console.log('Cart is empty');
    container.innerHTML = `
      <div class="empty-cart-message">
        <p>Your cart is empty</p>
        <a href="ecmp.html" class="continue-shopping-link">Continue Shopping</a>
      </div>`;
    return;
  }
cart.forEach((cartItem) => {
  let quantity = cartItem.quantity;
  let matchingItem ;
  let deliveryOption;
 
 for (const product of products) {
    if(product.id === cartItem.id){
        matchingItem = product;
        deliveryOption = cartItem;
        break;  
    }
 }

  if(matchingItem)  
    { html += `<div class="cart-item-container js-cart-item-${matchingItem.id}">
          <div class="delivery-date js-delivery-date-${matchingItem.id}">
            Delivery date: ${deliveryOption.deliverDate}
          </div>

          <div class="cart-item-details-grid">
            <img class="product-image"
              src="${matchingItem.image}">

            <div class="cart-item-details">
              <div class="product-name">
                ${matchingItem.name}
              </div>
              <div class="product-price">
               $${matchingItem.getPrice()}
              </div>
              <div class="product-quantity">
                <span>
                  Quantity: <span class="quantity-label">${quantity}</span>
                </span>
                <span class="update-quantity-link js-update-quantity-btn link-primary" data-productid="${matchingItem.id}">
                  Update
                </span>
                <input type="number" class="quantity-input display-none">
                <span class="save-quantity-link link-primary display-none" data-productid="${matchingItem.id}">Save</span>
                <span class="delete-quantity-link link-primary" data-id="${matchingItem.id}">
                  Delete
                </span>
              </div>
            </div>

            <div class="delivery-options">
              <div class="delivery-options-title">
                Choose a delivery option:
              </div>
              <div class="delivery-option">
                <input type="radio" ${deliveryOption.deliveryOptionId === 1 ? 'checked' : ''}
                  class="delivery-option-input"
                  data-product-id="${matchingItem.id}"
                  data-option-id="1"
                  name="delivery-option-${matchingItem.id}">
                <div>
                  <div class="delivery-option-date">
                    ${calcDeliveryCart(7)}
                  </div>
                  <div class="delivery-option-price">
                    FREE Shipping
                  </div>
                </div>
              </div>
              <div class="delivery-option">
                <input type="radio" ${deliveryOption.deliveryOptionId === 2 ? 'checked' : ''}
                  class="delivery-option-input"
                  data-product-id="${matchingItem.id}"
                  data-option-id="2"
                  name="delivery-option-${matchingItem.id}">
                <div>
                  <div class="delivery-option-date">
                    ${calcDeliveryCart(5)}
                  </div>
                  <div class="delivery-option-price">
                    $4.99 - Shipping
                  </div>
                </div>
              </div>
              <div class="delivery-option">
                <input type="radio" ${deliveryOption.deliveryOptionId === 3 ? 'checked' : ''}
                  class="delivery-option-input"
                  data-product-id="${matchingItem.id}"
                  data-option-id="3"
                  name="delivery-option-${matchingItem.id}">
                <div>
                
                  <div class="delivery-option-date">
                    ${calcDeliveryCart(2)}
                  </div>
                  <div class="delivery-option-price">
                    $9.99 - Shipping
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  }
});

container.innerHTML = html || "<p>No items could be displayed</p>";
saveBtn()
setupUpdateButtons();
setupDeleteButtons();
};
// delete btn
function  setupDeleteButtons() {   
 const deleteElements = document.querySelectorAll('.delete-quantity-link');
    deleteElements.forEach(deleteBtn => {
      deleteBtn.addEventListener('click', () => {
        const datasetId = deleteBtn.dataset.id;
        deleteCartItem(datasetId);
        const toDelete = document.querySelector(`.js-cart-item-${datasetId}`);
  
          // If element not found, re-render the whole cart
          renderCart();
        
       
         if (cart.length === 0) {
          renderCart(); // Re-render to show empty cart message
        }
      });
    });
    
}  
   
//update btn 
 const updateBtn = document.querySelectorAll('.js-update-quantity-btn');
function setupUpdateButtons() {
 const updateBtn = document.querySelectorAll('.js-update-quantity-btn');
updateBtn.forEach((btn) => {
  btn.addEventListener('click',  () => {
  const parentElement = btn.closest('.product-quantity');
  const dataId = btn.dataset.productid;
  const input = parentElement.querySelector('.quantity-input');
  const quanitityDisplay =  parentElement.querySelector('.quantity-label');
  const saveBtn =  parentElement.querySelector('.save-quantity-link');
   const para  = parentElement.querySelector('.quantity-label');
  input.value = quanitityDisplay.innerHTML;
  saveBtn.classList.remove('display-none');
  input.classList.remove('display-none');
  btn.classList.add('display-none');
  para.classList.add('display-none');
  console.log(dataId);
    })
})
}
// save btn
function saveBtn() {
  const saveBtn = document.querySelectorAll('.save-quantity-link');
  saveBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const dataid = btn.dataset.productid;
      const parent = btn.closest('.product-quantity');
      let input = parent.querySelector('.quantity-input');
      const para = parent.querySelector('.quantity-label');
      const updateBtm = parent.querySelector('.js-update-quantity-btn');
      
      let newQuantity = Number(input.value);
      
      // Make sure newQuantity is at least 1
      if (newQuantity < 1) {
        newQuantity = 1;
        input.value = 1;
      }
      
      // Update cart item quantity
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === dataid) {
          cart[i].quantity = newQuantity;
          break;
        }
      }
      
      // Calculate new total quantity
      let totalQuantity = 0;
      for (let i = 0; i < cart.length; i++) {
        totalQuantity += Number(cart[i].quantity);
      }
      
      // Save directly to localStorage (avoid using cartQuantity variable)
      localStorage.setItem('cart', JSON.stringify(cart));
      localStorage.setItem('cartQ', JSON.stringify(totalQuantity));
      
      // Update UI elements
      para.innerHTML = `${newQuantity}`;
      btn.classList.add('display-none');
      input.classList.add('display-none');
      para.classList.remove('display-none');
      updateBtm.classList.remove('display-none');
      
      // Update checkout header
      checkoutHeader(totalQuantity)
      
      console.log('Saved cart:', JSON.stringify(cart));
      console.log('Saved cartQ:', localStorage.getItem('cartQ'));
    });
  });

   function inputListener() {
    const input = document.querySelectorAll('.delivery-option-input');
    input.forEach((element) => element.addEventListener('click', () => {
      const productID = element.dataset.productId;
      const deliverOPtionID = Number(element.dataset.optionId);
      updateDeleiveryOption(productID,deliverOPtionID);
      renderPayementSummary()
      console.log(cart)
      renderCart()
    }))
  }
inputListener()
}
renderCart()
// Update cart quantity display

  })
}
