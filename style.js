const price = document.getElementById('price');
const addToCart = document.getElementById('btn-add-to-cart');
const total = document.getElementById('total');

const productPrice = 5000;
let totalPrice = 0;

price.innerText = `৳ ${productPrice}`;
total.innerText = `Total: ৳ ${totalPrice}`;

addToCart.addEventListener('click', ()=>{
    totalPrice += productPrice;
    total.innerText = ` Total: ৳ ${totalPrice}`;
})