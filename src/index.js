import { createStore } from 'redux';

const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const number = document.querySelector('span');

number.innerText = 0;

//reducer is a function that modifies the data
const countModifier = (count = 0, action) => {
	if (action.type === 'ADD') {
		return count = count + 1;
	} else if (action.type === 'SUBTRACT') {
		return count = count - 1;
	} else {
		return count;
	}
};

//store stores the data
const countStore = createStore(countModifier);

const onChange = () => {
	number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
	countStore.dispatch({ type: 'ADD' });
};

const handleSubtract = () => {
	countStore.dispatch({ type: 'SUBTRACT' });
};

add.addEventListener('click', handleAdd);
subtract.addEventListener('click', handleSubtract);