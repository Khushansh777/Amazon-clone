import { dateOptions } from "./dateoptions.js";
import { date } from "../jsx/checkout/orderSummary.js";
import { addBusinessDays, format, addDays, addMonths } from 'https://cdn.jsdelivr.net/npm/date-fns@3.6.0/+esm';

export const saveStorageFn = function() {
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('cartQ', JSON.stringify(cartQuantity));
}

export let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function localStoreCart() {
  JSON.parse(localStorage.getItem('cart')) || [];
}

export let cartQuantity = JSON.parse(localStorage.getItem('cartQ')) || 0;

let dateOptions2;

export function calcCulateDelivery(param) { 
  dateOptions2 = [...dateOptions];
  const today = format(new Date(), 'EEEE, MMMM dd  ');
  dateOptions2.forEach(element => {
    element.deliverDate = format(
      addBusinessDays(today, element.days || param),
      'EEEE MMMM dd'
    )
  });
  return dateOptions2;
}

export function calcDeliveryCart(param) {
  const today = format(new Date(), 'EEEE, MMMM dd  ');
  const calcDay = format(
    addBusinessDays(today, param),
    'EEEE MMMM dd'
  );
  return calcDay;
}

export function orderPlacedDate() {
  const today = format(new Date(), 'EEEE, MMMM dd');
  return today;
}

calcCulateDelivery();

export function updateCartQuantity(param, btn, dateOptionsID = 1) { 
  const selectedDeliveryOption = dateOptions.find(option => option.id === dateOptionsID);
  let selector = document.querySelector(`.js-quantity-selector-${param}`);
  let value = Number(selector.value);
  let isThere = false;

  if (cart.length > 0) {
    cart.forEach((element) => {
      if (element.productId === param) {
        element.quantity += value;
        cartQuantity += value;
        isThere = true;
        saveStorageFn();
        if (dateOptionsID && !element.dateOptionsID || element.dateOptionsID !== dateOptionsID) {
          element.deliverDate = selectedDeliveryOption.deliverDate;
          element.deliveryPrice = selectedDeliveryOption.price;
          element.deliveryDays = selectedDeliveryOption.days;
        }
      }
    });
  }

  if (!isThere) {
    let { productName } = btn.dataset;  
    cart.push({   
      name: productName, 
      quantity: value, 
      id: param,
      productId: param, 
      deliveryOptionId: dateOptionsID,
      deliverDate: selectedDeliveryOption.deliverDate,
      deliveryPrice: selectedDeliveryOption.price,
      deliveryDays: selectedDeliveryOption.days
    });
    cartQuantity += value;
  }

  let cartQuantityNo = document.querySelector(".cart-quantity");
  if (cartQuantityNo) {
    cartQuantityNo.innerHTML = cartQuantity;
  }

  saveStorageFn();
}

export function updateDeleiveryOption(productID, deliveryOptionId) {
  const cartItem = cart.find(option => option.id === productID);
  if(!cartItem) return false;
  
  const deliveryOption = dateOptions.find(option => option.id === deliveryOptionId);
  if (!deliveryOption) return false;
  
  cartItem.deliveryOptionId = deliveryOptionId;
  cartItem.deliverDate = deliveryOption.deliverDate;
  cartItem.deliveryPrice = deliveryOption.price;
  cartItem.deliveryDays = deliveryOption.days;
  date.innerHTML = cartItem.deliverDate;
  cartItem.productId = productID;
  saveStorageFn();
}

document.addEventListener('DOMContentLoaded', () => {
  const cartQuantityNo = document.querySelector(".cart-quantity");
  if(cart.length < 0) {
    cartQuantity = 0;
  }
  if(cartQuantity > 0) {
    if (cartQuantityNo) {
      cartQuantityNo.innerHTML = cartQuantity;
    }
  }
});

export function deleteCartItem(productID) {
  const itemToRemove = cart.find(cartItem => cartItem.id === productID);
  const newArray = cart.filter(element => productID !== element.id);
  cart.length = 0;
  cart.push(...newArray);
  cartQuantity = Math.max(0, cartQuantity - itemToRemove.quantity);
   
  if(cart.length === 0) {
    cartQuantity = 0;
  }

  saveStorageFn();

  const checkoutHeader = document.querySelector('.checkout-header-middle-section');
  if (checkoutHeader) {
    checkoutHeader.innerHTML = `Checkout(${cartQuantity})`;
  }

  return cart;
}

export function getCartBackend(param) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => {
    const backCart = xhr.response;
    param();
  });
  xhr.open('GET', 'https://supersimplebackend.dev/cart/');
  xhr.send();
}
