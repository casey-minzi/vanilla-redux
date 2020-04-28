import { createStore } from 'redux';
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

//You should NEVER mutate state. You create new state with previous contents
const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO :
			return [...state, { text: action.text, id: Date.now() }];
		case DELETE_TODO :
			return [];
		default :
			return state;
	}
};

const store = createStore(reducer);

//subscribe function takes a callback function called listener.
//This callback will be invoked everytime dispatch is called
store.subscribe(() => console.log(store.getState()));

const onSubmit = e => {
	e.preventDefault();
	const todo = input.value;
	input.value = '';
	store.dispatch({ type: ADD_TODO, text: todo })
};

form.addEventListener('submit', onSubmit);