let rangeMin = 1;
const range = document.querySelector('.range-selected');
const rangeInput = document.querySelectorAll('.range-input input');
const rangePrice = document.querySelectorAll('.range-inputs');
const rangePriceMin = document.querySelector('#prix-min');
const rangePriceMax = document.querySelector('#prix-max');

range.style.left = (parseInt(rangePriceMin.value) / rangeInput[0].max) * 100 + '%';
range.style.right = 100 - (parseInt(rangePriceMax.value) / rangeInput[1].max) * 100 + '%';

rangeInput.forEach((input) => {
  input.addEventListener('input', (e) => {
    let minRange = parseInt(rangeInput[0].value);
    let maxRange = parseInt(rangeInput[1].value);
    if (maxRange - minRange < rangeMin) {
      if (e.target.className === 'min') {
        rangeInput[0].value = maxRange - rangeMin;
      } else {
        rangeInput[1].value = minRange + rangeMin;
      }
    } else {
      rangePriceMin.value = minRange + '.00';
      rangePriceMax.value = maxRange + '.00';
      range.style.left = (minRange / rangeInput[0].max) * 100 + '%';
      range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + '%';
    }
  });
});

rangePrice.forEach((input) => {
  input.addEventListener('input', (e) => {
    let minPrice = rangePrice[0].value;
    let maxPrice = rangePrice[1].value;
    if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInput[1].max) {
      if (e.target.className.includes('min')) {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + '%';
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + '%';
      }
    }
  });
});
