import React, { PropTypes } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

const TodoList = ({todos, onTodoClick}) => (
	<div>
		{todos.map(todo => {
			return <Todo 
				key={todo.id}
				{...todo}
				onClick={() => onTodoClick(todo.id)}
			/>
		})}
	</div>
);

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	}).isRequired).isRequired,
	onTodoClick: PropTypes.func.isRequired
}

export default TodoList;

