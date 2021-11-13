console.log(777);

const h1 = document.querySelector('h1');
const plusBtn = document.querySelector('.btn-plus');
const minusBtn = document.querySelector('.btn-minus');

const changeCounter = (type) => {
  let counter = h1.innerText;
  counter = Number(counter);

  if (type === 'increment') {
    counter += 1;
  } else {
    counter -= 1;
  }

  h1.innerText = counter;
};

// console.log(h1);
// console.dir(h1);

// h1.innerText = 500;
// console.log(+h1.innerText + 1);

//console.log(plusBtn);

plusBtn.addEventListener('click', () => changeCounter('increment'));

minusBtn.addEventListener('click', () => changeCounter('decrement'));
