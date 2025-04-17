export const cart = JSON.parse(localStorage.getItem('cart')) || [];
export let cartQuantity = JSON.parse(localStorage.getItem('cartQ')) || 0;
export function updateCartQuantity(param, btn) { 


let selector = document.querySelector(`.js-quantity-selector-${param}`);
let value = Number(selector.value);
let isThere = false;

   
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
      let { productName } = btn.dataset; 
      cart.push({ name: productName, quantity: value, id: param });
      cartQuantity += value;
    }
    

    localStorage.setItem('cartQ', JSON.stringify(cartQuantity));
    console.log('cartQ saved as:', localStorage.getItem('cartQ'));    
    let cartQuantityNo = document.querySelector(".cart-quantity");
  if (cartQuantityNo) {
    cartQuantityNo.innerHTML = cartQuantity;
  }

  localStorage.setItem('cart' ,JSON.stringify(cart));
  

  console.log(cart)
}
document.addEventListener('DOMContentLoaded', () => {
  const cartQuantityNo = document.querySelector(".cart-quantity");
  if(cart.length < 0){
      cartQuantity = 0;
    }
  if(cartQuantity > 0){
  if (cartQuantityNo) {
    cartQuantityNo.innerHTML = cartQuantity;
  }

}
});

export function deleteCartItem(productID){
  // Using a simple loop instead of cart.find()
  const itemToRemove = cart.find(cartItem => cartItem.id === productID);

  const newArray = cart.filter(element => productID !== element.id)
   cart.length = 0;
   cart.push(...newArray);
  cartQuantity = Math.max(0, cartQuantity - itemToRemove.quantity);
   
    if(cart.length === 0){
      cartQuantity = 0
    }

localStorage.setItem('cartQ', JSON.stringify(cartQuantity));
localStorage.setItem('cart', JSON.stringify(cart));
 const checkoutHeader = document.querySelector('.checkout-header-middle-section');
    if (checkoutHeader) {
      checkoutHeader.innerHTML = `Checkout(${cartQuantity})`;
    }

return cart
}
