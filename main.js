const menu = document.querySelector('#menu');
const newsModal = document.querySelector('#news-modal');
const newsModalBtn = document.querySelector('#news-modal-btn');
const newsModalClose = document.querySelector('#news-modal-close');

const withdrawModal = document.querySelector('#withdraw-modal');
const withdrawModalClose = document.querySelector('#withdraw-modal-close');
const withdrawModalOpen = document.querySelectorAll('.withdraw-modal-open');
const withdrawModalWrapper = document.querySelector('#withdraw-modal-wrapper');

const menuWrapper = document.querySelector('#menu__wrapper');
const profileMenu = document.querySelector('#profile__menu');
const profileWrapper = document.querySelector('#profile__wrapper');
const openProfileMenu = document.querySelector('#open-profile-menu');
const openSearchMenu = document.querySelector('#open-search-menu');
const closeProfileMenu = document.querySelector('#close-profile-menu');
const openSearchArrow = openSearchMenu.querySelector('#open-search-arrow');

const toggleProfileMenu = (e) => {
  e.stopPropagation();

  openProfileMenu.classList.toggle('hidden');
  closeProfileMenu.classList.toggle('hidden');
  menu.classList.toggle('opacity-0');
  menu.classList.toggle('pointer-events-none');
  openSearchArrow.classList.remove('rotate-180');
  profileMenu.classList.add('opacity-0');
  profileMenu.classList.add('pointer-events-none');
};

const toggleSearchMenu = (e) => {
  e.stopPropagation();

  openSearchArrow.classList.toggle('rotate-180');
  profileMenu.classList.toggle('opacity-0');
  profileMenu.classList.toggle('pointer-events-none');
  openProfileMenu.classList.remove('hidden');
  menu.classList.add('opacity-0');
  menu.classList.add('pointer-events-none');
  closeProfileMenu.classList.add('hidden');
};

const showNewsModal = (e) => {
  e.stopPropagation();
  document.body.classList.add('overflow-hidden');

  openSearchArrow.classList.add('rotate-0');

  newsModal.classList.remove('opacity-0');
  newsModal.classList.remove('pointer-events-none');

  profileMenu.classList.add('opacity-0');
  profileMenu.classList.add('pointer-events-none');
  openProfileMenu.classList.remove('hidden');
  menu.classList.add('opacity-0');
  menu.classList.add('pointer-events-none');
  closeProfileMenu.classList.add('hidden');
};

const hideNewsModal = (e) => {
  e.stopPropagation();
  document.body.classList.remove('overflow-hidden');
  openSearchArrow.classList.add('rotate-0');

  newsModal.classList.add('opacity-0');
  newsModal.classList.add('pointer-events-none');

  profileMenu.classList.add('opacity-0');
  profileMenu.classList.add('pointer-events-none');
  openProfileMenu.classList.remove('hidden');
  menu.classList.add('opacity-0');
  menu.classList.add('pointer-events-none');
  closeProfileMenu.classList.add('hidden');
};

const openWithdrawModal = () => {
  withdrawModal.classList.toggle('opacity-0');
  withdrawModal.classList.toggle('pointer-events-none');
  profileMenu.classList.add('opacity-0');
  profileMenu.classList.add('pointer-events-none');
};

const closeWithdrawModal = (e) => {
  e.stopPropagation();
  withdrawModal.classList.add('opacity-0');
  withdrawModal.classList.add('pointer-events-none');
  profileMenu.classList.remove('opacity-0');
  profileMenu.classList.remove('pointer-events-none');
};

openSearchMenu.addEventListener('click', toggleSearchMenu);
openProfileMenu.addEventListener('click', toggleProfileMenu);
closeProfileMenu.addEventListener('click', toggleProfileMenu);
if (newsModalBtn) {
  newsModalBtn.addEventListener('click', showNewsModal);
}
if (newsModalClose) {
  newsModalClose.addEventListener('click', hideNewsModal);
}

let menuContainer;
let targetContainer;

menuWrapper.addEventListener('click', (e) => {
  menuContainer = e.target;
});

profileWrapper.addEventListener('click', (e) => {
  menuContainer = e.target;
});

document.body.addEventListener('click', (e) => {
  targetContainer = e.target;
  if (menuContainer != targetContainer) {
    menu.classList.add('opacity-0');
    menu.classList.add('pointer-events-none');
    profileMenu.classList.add('opacity-0');
    profileMenu.classList.add('pointer-events-none');
    closeProfileMenu.classList.add('hidden');
    openProfileMenu.classList.remove('hidden');
    openSearchArrow.classList.remove('rotate-180');
  }
});

withdrawModalOpen.forEach((item) => {
  item.addEventListener('click', openWithdrawModal);
});
withdrawModalClose.addEventListener('click', closeWithdrawModal);

withdrawModal.addEventListener('click', closeWithdrawModal);

withdrawModalWrapper.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
});

if (location.href == '/') {
  location.replace('/with-login');
}
