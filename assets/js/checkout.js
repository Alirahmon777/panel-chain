const checkoutModal = document.querySelector('#checkout-modal');
const checkoutModalClose = document.querySelector('#checkout-modal-close');
const paymentCheck = document.querySelector('#payment-check');
const paymentUnCheck = document.querySelector('#payment-uncheck');
const checkoutModalWrapper = document.querySelector('#checkout-modal-wrapper');
const checkoutBtn = document.querySelector('#checkout-btn');
const paymentBtnCheck = document.querySelector('#payment-btn-check');
const paymentBtnUnCheck = document.querySelector('#payment-btn-uncheck');
const dropdown = document.querySelector('.dropdown-selection');
const allFiltersModal = document.querySelector('#all-filters-modal');
const allFiltersModalBtn = document.querySelector('#all-filters-btn');
const allFiltersModalClose = document.querySelector('#all-filters-close');

checkoutBtn.addEventListener('click', () => {
  checkoutModal.classList.toggle('opacity-0');
  checkoutModal.classList.toggle('pointer-events-none');
});

paymentBtnCheck.addEventListener('click', () => {
  if (paymentCheck.style.display != 'flex') {
    paymentBtnCheck.classList.add('text-primary');
    paymentBtnUnCheck.classList.remove('text-primary');
    paymentUnCheck.style.display = 'none';
    paymentCheck.style.display = 'flex';
    return;
  }
  paymentBtnCheck.classList.remove('text-primary');
  paymentCheck.style.display = 'none';
});

paymentBtnUnCheck.addEventListener('click', () => {
  if (paymentUnCheck.style.display != 'flex') {
    paymentBtnUnCheck.classList.add('text-primary');
    paymentBtnCheck.classList.remove('text-primary');
    paymentCheck.style.display = 'none';
    paymentUnCheck.style.display = 'flex';
    return;
  }
  paymentBtnUnCheck.classList.remove('text-primary');
  paymentUnCheck.style.display = 'none';
});

checkoutModal.addEventListener('click', () => {
  checkoutModal.classList.add('opacity-0');
  checkoutModal.classList.add('pointer-events-none');
});

checkoutModalClose.addEventListener('click', () => {
  checkoutModal.classList.add('opacity-0');
  checkoutModal.classList.add('pointer-events-none');
});

const stopPropagation = (e) => {
  e.stopPropagation();
};

const showNewsModal = (e) => {
  e.stopPropagation();
  document.body.classList.add('overflow-hidden');

  allFiltersModal.classList.remove('opacity-0');
  allFiltersModal.classList.remove('pointer-events-none');
  allFiltersModal.classList.remove('translate-x-[400px]');
};

const hideNewsModal = (e) => {
  e.stopPropagation();
  document.body.classList.remove('overflow-hidden');

  allFiltersModal.classList.add('opacity-0');
  allFiltersModal.classList.add('pointer-events-none');
  allFiltersModal.classList.add('translate-x-[400px]');
};

checkoutModalWrapper.addEventListener('click', stopPropagation);

allFiltersModalBtn.addEventListener('click', showNewsModal);
allFiltersModalClose.addEventListener('click', hideNewsModal);

dropdown.addEventListener('click', () => {
  dropdown.classList.toggle('open');
});
