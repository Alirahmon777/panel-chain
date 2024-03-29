const showAllSellerBtn = document.querySelector('#show-all-seller');
const closeAllSellerBtn = document.querySelector('#close-all-seller');
const bestSeller = document.querySelector('#best-seller');
const allSeller = document.querySelector('#all-seller');

showAllSellerBtn.addEventListener('click', () => {
  bestSeller.classList.add('hidden');
  allSeller.classList.remove('hidden');
});

closeAllSellerBtn.addEventListener('click', () => {
  bestSeller.classList.remove('hidden');
  allSeller.classList.add('hidden');
});
