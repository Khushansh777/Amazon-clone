// import { dateOptions } from "./dateoptions.js";
// import { date } from "../jsx/checkout/orderSummary.js";
// import { addBusinessDays, format, addDays, addMonths } from 'https://cdn.jsdelivr.net/npm/date-fns@3.6.0/+esm';
// export const saveStorageFn = function() {
//   localStorage.setItem('cart0', JSON.stringify(cart0));
//   localStorage.setItem('cart0Q', JSON.stringify(cart0Quantity));
// }
// function cartgiver(){

// // cart0 module
// const cart1 = {
//   items: JSON.parse(localStorage.getItem('cart0')) || [],
//   cart0Quantity: JSON.parse(localStorage.getItem('cart0Q')) || 0,
//   dateOptions2: undefined,
  
//   // Get cart0 from localStorage
//   localStorecart0() {
//     return JSON.parse(localStorage.getItem('cart0')) || [];
//   },
  
//   // Calculate delivery options with dates
//   calcCulateDelivery(param) { 
//     this.dateOptions2 = [...dateOptions];
//     const today = new Date();
    
//     this.dateOptions2.forEach(element => {
//       element.deliverDate = format(
//         addBusinessDays(today, element.days || param),
//         'EEEE MMMM dd'
//       );
//       console.log(element.deliverDate);
//     });
    
//     console.log(format(today, 'EEEE, MMMM dd'));
//     return this.dateOptions2;
//   },
  
//   // Calculate a single delivery date
//   calcDeliverycart0(param) {
//     const today = new Date();
//     const calcDay = format(
//       addBusinessDays(today, param),
//       'EEEE MMMM dd'
//     );
//     return calcDay;
//   },
  
//   // Update cart0 with new item or increase quantity
//   updatecart0Quantity(param, btn, dateOptionsID = 1) { 
//     const selectedDeliveryOption = dateOptions.find(option => option.id === dateOptionsID);
//     let selector = document.querySelector(`.js-quantity-selector-${param}`);
//     let value = Number(selector.value);
//     let isThere = false;
    
//     if (this.items.length > 0) {
//       this.items.forEach((element) => {
//         if (element.id === param) {
//           element.quantity += value;
//           this.cart0Quantity += value;
//           isThere = true;
//           if (dateOptionsID && (!element.deliveryOptionId || element.deliveryOptionId !== dateOptionsID)) {
//             element.deliveryOptionId = dateOptionsID;
//             element.deliverDate = selectedDeliveryOption.deliverDate;
//             element.deliveryPrice = selectedDeliveryOption.price;
//             element.deliveryDays = selectedDeliveryOption.days;
//           }
//         }
//       });
//     }
    
//     // Add new item to cart0 if not found
//     if (!isThere) {
//       let { productName } = btn.dataset;  
//       this.items.push({
//         name: productName, 
//         quantity: value, 
//         id: param, 
//         deliveryOptionId: dateOptionsID,
//         deliverDate: selectedDeliveryOption.deliverDate,
//         deliveryPrice: selectedDeliveryOption.price,
//         deliveryDays: selectedDeliveryOption.days
//       });
//       this.cart0Quantity += value;
//     }
    
//     // Update DOM and save to localStorage
//     let cart0QuantityNo = document.querySelector(".cart0-quantity");
//     if (cart0QuantityNo) {
//       cart0QuantityNo.innerHTML = this.cart0Quantity;
//     }
    
//     saveStorageFn();
//     console.log(this.items);
//   },
  
//   // Update delivery option for a specific product
//   updateDeleiveryOption(productID, deliveryOptionId) {
//     const cart0Item = this.items.find(option => option.id === productID);
//     if (!cart0Item) return false;
    
//     const deliveryOption = dateOptions.find(option => option.id === deliveryOptionId);
//     if (!deliveryOption) return false;
    
//     cart0Item.deliveryOptionId = deliveryOptionId;
//     cart0Item.deliverDate = deliveryOption.deliverDate;
//     cart0Item.deliveryPrice = deliveryOption.price;
//     cart0Item.deliveryDays = deliveryOption.days;
    
//     if (date) {
//       date.innerHTML = cart0Item.deliverDate;
//     }
    
//     saveStorageFn();
//     return true;
//   },
  
//   // Initialize cart0 quantity on page load
//   loader() {
//     document.addEventListener('DOMContentLoaded', () => {
//       const cart0QuantityNo = document.querySelector(".cart0-quantity");
      
//       if (this.items.length === 0) {
//         this.cart0Quantity = 0;
//       }
      
//       if (this.cart0Quantity > 0 && cart0QuantityNo) {
//         cart0QuantityNo.innerHTML = this.cart0Quantity;
//       }
//     });
//   },
  
//   // Remove item from cart0
//   deletecart0Item(productID) {
//     const itemToRemove = this.items.find(cart0Item => cart0Item.id === productID);
//     if (!itemToRemove) return this.items;
    
//     this.cart0Quantity = Math.max(0, this.cart0Quantity - itemToRemove.quantity);
//     this.items = this.items.filter(element => productID !== element.id);
    
//     if (this.items.length === 0) {
//       this.cart0Quantity = 0;
//     }
    
//     saveStorageFn();
    
//     const checkoutHeader = document.querySelector('.checkout-header-middle-section');
//     if (checkoutHeader) {
//       checkoutHeader.innerHTML = `Checkout(${this.cart0Quantity})`;
//     }
    
//     return this.items;
//   }
// };
// }
// // Make cart0 available globally
// export { cart1 };










//



