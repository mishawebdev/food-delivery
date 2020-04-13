const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

cartButton.addEventListener('click', toggeModal);
close.addEventListener('click', toggeModal);

function toggeModal() {
  modal.classList.toggle('is-open');
}

new WOW().init();