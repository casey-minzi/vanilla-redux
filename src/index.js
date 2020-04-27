import { createStore } from 'redux';

const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const number = document.querySelector('span');

//reducer is a function that modifies the data
const countModifier = (state = 0) => {
	return state;
};

//store stores the data
const countStore = createStore(countModifier);

console.log(countStore.getState());