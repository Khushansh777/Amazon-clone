export function checkoutHeader(cartQuantity) {
  const checkoutHeader = document.querySelector('.checkout-header-middle-section');
  if (checkoutHeader) {
    checkoutHeader.innerHTML = `Checkout (${cartQuantity})`;
  }
} 