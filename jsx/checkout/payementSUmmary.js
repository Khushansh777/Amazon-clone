import { cartQuantity } from "../../data/cart.js";
import { cart } from "../../data/cart.js";
import { products } from "../../data/products.js";
import { placeOrders } from "../../data/orders.js";
export let orderDate ;
export function renderPayementSummary() {
    const payementSummaryElement = document.querySelector('.payment-summary');
    if (!payementSummaryElement) {
        console.error('Payment summary container not found!');
        return;
    }
     if (!products || products.length === 0) {
        console.log('Products not loaded yet, will render payment summary later');
        return;
    }
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

          <button class="place-order-button button-primary js-orders-element">
            Place your order
          </button>
        </div>`
    totalhtml = html
    payementSummaryElement.innerHTML = totalhtml
    console.log(totalBeforeCharge);

    document.querySelector('.js-orders-element').addEventListener('click', async () => {
      console.log('Original cart:', cart);

      const mappedCart = cart.map(item => {
        const mappedItem = {
          productId: item.productId,
          quantity: item.quantity,
          deliveryOptionId: Number(item.deliveryOptionId),
          deliveryDate: item.deliverDate,
          deliveryPrice: item.deliveryPrice === 'FREE' ? 0 : Number(item.deliveryPrice)
        };
        console.log('Mapped cart item:', mappedItem);
        return mappedItem;
      });

     

 

      try {
        const response = await fetch('https://supersimplebackend.dev/orders', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(orderData)
        });

        // if (!response.ok) {
        //   const errorData = await response.json();
        //   console.error('Order creation failed:', errorData);
        //   console.error('Request payload:', orderData);
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }
        
        const orders = await response.json();
        placeOrders(orders);
       orderDate = new Date
        console.log('Order created successfully:', orders);
      } catch (error) {
        console.error('Error creating order:', error);
      }
      window.location.href = 'orders.html'
    });

  }

function renderOrder() {
  const container = document.querySelector('.js-order-container');
  if (!container) {
    // Not on the orders page, so just exit
    return;
  }
  // ... rest of your code ...
}