export const cart = [];
export let cartQuantity = 0;
export function updateCartQuantity(param, btn) { 
    
   let selector = document.querySelector(`.js-quantity-selector-${param}`);
   let value = Number(selector.value);
    let isThere = false;
    let { productName } = btn.dataset; 
   
if (cart.length > 0) {
      cart.forEach((element) => {
        if (element.id === param) {
          element.quantity += value;
          cartQuantity += value;
          isThere = true;
        }
      });
    }
    // Add new item to cart OUTSIDE the forEach loop
    if (!isThere) {
      cart.push({ name: productName, quantity: value, id: param });
      cartQuantity += value;
    }
}