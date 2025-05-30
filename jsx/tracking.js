import { cart } from "../data/cart.js";
import { products } from "../data/products.js";
 
const currentURL = new URL(window.location.href);
   // console.log(currentURL.searchParams.get('orderId'));
   // console.log(currentURL.searchParams.get('productId'));

 function renderTrackingInfo(){

const container = document.querySelector('#js-ordertracking-container');

if (!container) {
  // console.error('Container .js-ordertracking-container not found!');
  return;
}

// Find the product info for this cart item

const matchedProduct = products.find(product => product.id === currentURL.searchParams.get('orderId'));
const deliveryDate =   cart.find(cartItem => cartItem.id === currentURL.searchParams.get('orderId'));
// console.log(deliveryDate)
// console.log(matchedProduct)
if (!matchedProduct) return;
let html = '';
html += `
    <a class="back-to-orders-link link-primary" href="orders.html?productid=123&">
        View all orders
    </a>

    <div class="delivery-date">
        ${deliveryDate.deliverDate}
    </div>

    <div class="product-info">
        ${matchedProduct.name}
    </div>

    <div class="product-info">
        ${deliveryDate.quantity}
    </div>

    <img class="product-image" src="${matchedProduct.image}">

    <div class="progress-labels-container">
        <div class="progress-label">
        Preparing
        </div>
        <div class="progress-label current-status">
        Shipped
        </div>
        <div class="progress-label">
        Delivered
        </div>
    </div>

    <div class="progress-bar-container">
        <div class="progress-bar"></div>
    </div>
    </div>`

container.innerHTML = html
}
document.addEventListener('DOMContentLoaded', () => {
 renderTrackingInfo()
});

