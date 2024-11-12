import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => (
  <div>
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleComplete(todo.id)}
    />
    {todo.text}
    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
  </div>
);

export default TodoItem;
