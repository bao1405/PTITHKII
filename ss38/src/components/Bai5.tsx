import React, { useState, useCallback } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = useCallback(() => {
    if (newTodo.trim() !== '') {
      setTodos(prevTodos => [...prevTodos, newTodo]);
      setNewTodo('');
    }
  }, [newTodo]);

  const handleChange = event => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <h1>Bài 5</h1>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={handleChange}
          placeholder="Enter new todo"
        />
        <button onClick={handleAddTodo}>Thêm</button>
        <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default TodoList;
