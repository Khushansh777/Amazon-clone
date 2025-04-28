import { cartQuantity } from "../../data/cart.js";
import { cart } from "../../data/cart.js";
import { products } from "../../data/products.js";


export function renderPayementSummary() {
    const payementSummaryElement = document.querySelector('.payment-summary')
    let matchingItem;
     let totalCost = 0;
     let totalhtml = '';
     let shippingCharges  = 0;
     let totalBeforeCharge = 0;
    cart.forEach(element => {

        for (const product of products) {
            if(element.id === product.id){
                matchingItem = product
            } 
        }

      if(matchingItem) {
        const itemCost = matchingItem.priceCents * element.quantity;
        totalCost += itemCost 
        let deliveryChargerItem =  element.deliveryPrice;

            if(deliveryChargerItem === 'FREE'){
                deliveryChargerItem = 0;
            }
            shippingCharges += deliveryChargerItem ; 
            
            let totalBeforeTaxItem = itemCost + deliveryChargerItem;
            totalBeforeCharge +=  totalBeforeTaxItem 
     
    }})

 let html = '' ;
    html += 
    ` <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${cartQuantity}):</div>
            <div class="payment-summary-money">$${(Math.round(totalCost /100)).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${(Math.round(shippingCharges/100)).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${(totalBeforeCharge / 100).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${((totalBeforeCharge * 0.1)/100).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${((totalBeforeCharge + totalBeforeCharge * 0.1) /100 ).toFixed(2)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
        </div>`
    totalhtml = html
    payementSummaryElement.innerHTML = totalhtml
    console.log(totalBeforeCharge)
  }