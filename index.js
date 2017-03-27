import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import todoAppReducer from './reducers/todos';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions'
import App from './components/App';

export const store = createStore(todoAppReducer);


// // Log the initial state
// console.log(store.getState())

// // Every time the state changes, log it
// // Note that subscribe() returns a function for unregistering the listener
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

// // Dispatch some actions
// store.dispatch(addTodo('Learn about actions'))
// store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('app')
)
