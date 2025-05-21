// main.js - The key file that controls execution order
import { renderOrderSummary } from "../jsx/checkout/orderSummary.js";
import { renderPayementSummary } from "./checkout/payementSUmmary.js";
import { getFromBackend, getCartBackendFetch } from "../data/products.js";
import { getCartBackend } from "../data/cart.js";

// Show loading indicators
// new Promise((response) =>{
//   getFromBackend(() =>{
//     response();
//   }). 
// }).then()
// Promise.all([
//   new Promise(resolve => setTimeout(() => resolve('Lol'), 1000)),
//   new Promise(resolve => setTimeout(() => resolve('Lolq'), 500)),
// ]).then(console.log); // Should log both after 1 second
Promise.all([
  getCartBackendFetch(),
  new Promise((resolve, reject) => {
    console.log('Setting up getCartBackend promise');
    getCartBackend((err, data) => {
      console.log('getCartBackend callback executed');
      if (err) {
        reject(err);
      } else {
        resolve(data || 'Lol1');  // Default value if data is undefined
      }
      console.log(['done']);
    });
  })
])
.then((values) => {
  console.log('All promises resolved:', values);
  renderOrderSummary();
  renderPayementSummary();
})
.catch((error) => {
  console.error('Error in Promise.all:', error);
});


// getFromBackend(() =>{
//    renderOrderSummary();
//    renderPayementSummary();
// })



