const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const number = document.querySelector('span');

let count = 0;

const updateCount = () => {
  number.innerText = count;
}
;
const handleAdd = () => {
  count = count + 1;
  updateCount();
};

const handleSubtract = () => {
  count = count - 1;
  updateCount();
};

add.addEventListener('click', handleAdd);
subtract.addEventListener('click', handleSubtract);