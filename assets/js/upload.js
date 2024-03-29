const dropdown = document.querySelectorAll('.dropdown-selection');
dropdown.forEach((item) => {
  item.addEventListener('click', () => {
    checkIfOpenExist(item);
    item.classList.toggle('open');
  });
});

const checkIfOpenExist = (parent) => {
  dropdown.forEach((item) => {
    if (item == parent) return;
    if (item.className.includes('open')) {
      item.classList.remove('open');
    }
  });
};
