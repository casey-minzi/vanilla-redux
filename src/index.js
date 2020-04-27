import { createStore } from 'redux';

const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const number = document.querySelector('span');

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

countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'SUBTRACT' });
console.log(countStore.getState())