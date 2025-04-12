// all  Global variables
let ProductMain = document.querySelector('.products-grid')
// const Products  = [
//     {
//         name:'Black and Gray Athletic Cotton Socks - 6 Pairs',
//         img: 'images/products/athletic-cotton-socks-6-pairs.jpg',
//         rating:'45',
//         price:(1090 /10).toFixed(2),
//         ratingP:87
//     },
//     {
//         name:' Intermediate Size Basketball',
//         img: 'images/products/intermediate-composite-basketball.jpg',
//         rating:'40',
//         price:(2095 /10).toFixed(2),
//         ratingP:127
//     },
//     {
//         name:'Adults Plain Cotton T-Shirt - 2 Pack',
//         img: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//         rating:'45',
//         price:(799 /10).toFixed(2),
//         ratingP:56
//     },

// ]

let ProductHTML = '';

products.forEach((product) => {
    ProductHTML += `<div class="product-container">
  <div class="product-image-container">
    <img class="product-image"
      src="${product.image}">
  </div>

  <div class="product-name limit-text-to-2-lines">
    ${product.name}
  </div>

  <div class="product-rating-container">
    <img class="product-rating-stars"
      src="images/ratings/rating-${product.rating.stars * 10}.png">
    <div class="product-rating-count link-primary">
      ${product.rating.count}
    </div>
  </div>

  <div class="product-price">
    $${(product.priceCents / 100).toFixed(2)}
  </div>

  <div class="product-quantity-container">
    <select>
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  </div>

  <div class="product-spacer"></div>

  <div class="added-to-cart">
    <img src="images/icons/checkmark.png">
    Added
  </div>

  <button class="add-to-cart-button button-primary">
    Add to Cart
  </button>
</div>`})

 ProductMain.innerHTML = ProductHTML;
 console.log(ProductMain.innerHTML);
