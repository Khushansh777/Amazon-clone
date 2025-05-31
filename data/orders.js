import { cart, orderPlacedDate, calcDeliveryCart } from "./cart.js";
import { products } from "./products.js";
import { formatCurrency } from "../jsx/formatCurr.js";

let orders = JSON.parse(localStorage.getItem('orders')) || [];

// console.log(orders)

export function placeOrders(param) {
  orders.unshift(param);
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

function renderOrder() {
  const container = document.querySelector('.js-order-container');
  if (!container) {
    console.error('Order container not found!');
    return;
  }
  let html = '';

  if (!cart || cart.length === 0) {
    // console.log('Cart is empty');
    container.innerHTML = `
      <div class="empty-cart-message">
        <p>Your cart is empty</p>
        <a href="amazon.html" class="continue-shopping-link">Continue Shopping</a>
      </div>`;
    return;
  }

  if (!orders || orders.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-message">
        <p>You have no orders yet.</p>
        <a href="amazon.html" class="continue-shopping-link">Continue Shopping</a>
      </div>`;
    return;
  }

  orders.forEach((cartItem, idx) => {
    // Find the product info for this cart item
    const matchedProduct = products.find(product => product.id === cartItem.productId);
    if (!matchedProduct) return;

    html += `
      <div class="order-container">
        <div class="order-header">
          <div class="order-header-left-section">
            <div class="order-date">
              <div class="order-header-label">Order Placed:</div>
              <div>${orderPlacedDate()}</div>
            </div>
            <div class="order-total">
              <div class="order-header-label">Total:</div>
              <div>$${formatCurrency(matchedProduct.priceCents)}</div>
            </div>
          </div>
          <div class="order-header-right-section">
            <div class="order-header-label">Order ID:</div>
            <div>${matchedProduct.id}</div>
          </div>
        </div>
        <div class="order-details-grid">
          <div class="product-image-container">
            <img src="${matchedProduct.image}">
          </div>
          <div class="product-details">
            <div class="product-name">
              ${cartItem.name}
            </div>
            <div class="product-delivery-date">
              Arriving on: ${cartItem.deliverDate}
            </div>
            <div class="product-quantity">
              Quantity: ${cartItem.quantity}
            </div>
            <button class="buy-again-button button-primary js-buy-again" data-product-id="${matchedProduct.id}">
              <img class="buy-again-icon" src="images/icons/buy-again.png">
              <span class="buy-again-message">Buy it again</span>
            </button>
          </div>
          <div class="product-actions">
            <a href="tracking.html?orderId=${matchedProduct.id}&productId=${idx + 1}">
              <button class="track-package-button button-secondary">
                Track package
              </button>
            </a>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Add event listeners after the HTML is rendered
  document.querySelectorAll('.js-buy-again').forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      const matchedProduct = products.find(product => product.id === productId);
      
      if (matchedProduct) {
        // Create a new order object with the correct structure
        const newOrder = {
          name: matchedProduct.name,
          quantity: 1,
          id: matchedProduct.id,
          productId: matchedProduct.id,
          deliveryOptionId: 1, // Default to standard delivery
          deliverDate: calcDeliveryCart(7), // Default to 7-day delivery
          deliveryPrice: 'FREE',
          deliveryDays: 7
        };
        
        placeOrders(newOrder);
        window.location.href = 'amazon.html'; // Redirect to shopping page
      }
    });
  });
}

// Wait for DOM to be fully loaded before running renderOrder
document.addEventListener('DOMContentLoaded', () => {
  renderOrder();
});
