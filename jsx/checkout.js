// main.js - The key file that controls execution order
import { renderOrderSummary } from "../jsx/checkout/orderSummary.js";
import { renderPayementSummary } from "./checkout/payementSUmmary.js";
// import {   } from "../data/products.js";
import { getCartBackend } from "../data/cart.js";

renderOrderSummary();
renderPayementSummary();
// Show loading indicators
// new Promise((response) =>{
//   getFromBackend(() =>{
//     response();
//   }).

// }).then()
// Promise.all(
//   new Promise(resolve => setTimeout(() => resolve('Lol'), 1000)),
//   new Promise(resolve => setTimeout(() => resolve('Lolq'), 500)),
// ]).then(console.log); // Should log both after 1 second

// async function  loadSomething(){

//   await getCartBackendFetch();
//   const dataResolved = await new Promise((resolve, reject) => {
//     console.log('Setting up getCartBackend promise');
//     getCartBackend((err, data) => {
//       console.log('getCartBackend callback executed');
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data || productsExtra);  // Default value if data is undefined
//       }
//       console.log(['done']);
//     });
//   })
//   console.log('dataResolved', dataResolved);
//   console.log('All promises resolved:');
//   renderOrderSummary();
//   renderPayementSummary();
//   return 'Lol';
// }

// loadSomething()

// async function loadSomething2() {
//   const values = await Promise.all([
//     getCartBackendFetch(),
//     new Promise((resolve, reject) => {
//       console.log('Setting up getCartBackend promise');
//       getCartBackend((err, data) => {
//         console.log('getCartBackend callback executed');
//         if (err) {
//           reject(err);
//         } else {
//           resolve(data);
//         }
//         console.log(['done']);
//       });
//     })
//   ]);
//   console.log('All promises resolved:', values);
//   renderOrderSummary();
//   renderPayementSummary();
//   return values;
// }

// // Call the function once and properly await its result
// loadSomething2().then(values => {
//   console.log('loadSomething2 completed with values:', values);
// });

// getFromBackend(() =>{
//    renderOrderSummary();
//    renderPayementSummary();
// })



