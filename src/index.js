// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = product.querySelector('.price span').innerHTML
  let quantity = product.querySelector('quantity input').value
  let subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = price * quantity;
  return subtotal.innerHTML;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let products = document.querySelectorAll('.product');
  let totalPrice = 0;

  products.forEach(product => {
    let priceSubtotal = 0;
    priceSubtotal = updateSubtotal(product);
    totalPrice += priceSubtotal;
  })

  // ITERATION 3
  //... your code goes here
  let total = document.querySelector('#total-value span');
  total.innerText = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const tBody = target.parentNode.parentNode.parentNode;
  const productRemoved = target.parentNode.parentNode;
  tBody.removeChild(productRemoved);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let name = document.querySelector('.create-product input[type="text"]').value
  let price = document.querySelector('.create-product input[type="number"]').value
  let newProduct = document.createElement('tr')
  newProduct.classList.add('product')
  newProduct.innerHTML = `
  <td class="name">
    <span>${name}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove" onclick="removeProduct(event)">Remove</button>
  </td>`
  let parent = document.querySelector('tbody');
  parent.appendChild(newProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
