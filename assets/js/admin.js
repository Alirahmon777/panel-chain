const cardInfoModal = document.querySelector('#card-info-modal');
const cardInfoOpen = document.querySelectorAll('.open-card-info');
const cardInfoClose = document.querySelector('#close-card-info');

cardInfoOpen.forEach((item) => {
  item.addEventListener('click', () => {
    cardInfoModal.classList.remove('opacity-0');
    cardInfoModal.classList.remove('pointer-events-none');
  });
});

cardInfoClose.addEventListener('click', () => {
  cardInfoModal.classList.add('opacity-0');
  cardInfoModal.classList.add('pointer-events-none');
});
