import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions'

const { SHOW_ALL } = VisibilityFilters

// var initialState = {
// 	todos: [],
// 	visibilityFilter: SHOW_ALL
// }

// var todoApp = (state = initialState, action) => {
// 	switch (action.type) {
// 		case SET_VISIBILITY_FILTER: 
// 		  return { visibilityFilter: action.filter};

// 		case ADD_TODO: 
// 		  return [...state.todos, { text: action.text, completed: false }];
	

// 		case TOGGLE_TODO: 
// 			return state.todos.map((todo, index) => {
// 				if (index === action.index) {
// 					return {
// 						text: todo.text,
// 						completed: !todo.completed
// 					};
// 				}
// 				return todo;
// 			});

// 		default: 
// 			return state;
// 	}
// }

function todoReducer (state = [], action) {
	switch(action.type) {
		case ADD_TODO: 
		  return [...state, { text: action.text, completed: false, id: action.id }];
	

		case TOGGLE_TODO: 
			return state.map((todo, index) => {
				if (index === action.id) {
					return {
						text: todo.text,
						completed: !todo.completed,
						id: todo.id
					};
				}
				return todo;
			});

		default: 
		  return state;
	}
};

function visiblityReducer (state = SHOW_ALL, action) {
	switch(action.type) {
		case SET_VISIBILITY_FILTER: 
		  return action.filter;

		default: 
		  return state;
	}
};

// function todoAppReducer(state, action) {
// 	todos: todoReducer(state.todos, action),
// 	visibilityFilter: visiblityReducer(state.visibilityFilter, action)
// };

const todoAppReducer = combineReducers({
	todos: todoReducer,
	visibilityFilter: visiblityReducer
});

// All combineReducers() does is generate a function that calls your reducers with the slices of state selected 
//according to their keys, and combining their results into a single object again. It's not magic. And like other 
//reducers, combineReducers() does not create a new object if all of the reducers provided to it do not change state.

export default todoAppReducer;



