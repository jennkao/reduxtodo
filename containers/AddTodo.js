import React from 'react';
import { addTodo } from '../actions';
import { store } from '../index';

const AddTodo = () => {
	let input;
	return (
		<div>
			<form onSubmit={(event) => {
				event.preventDefault();
				if (!input.value.trim()) {
					return;
				}

				store.dispatch(addTodo(input.value));
				input.value = '';
			}}>
				<input ref={node => {
					input = node;
				}} />

				<button type = 'submit'>
					Add todo 
				</button>
			</form>
		</div>
	)
};

export default AddTodo;

