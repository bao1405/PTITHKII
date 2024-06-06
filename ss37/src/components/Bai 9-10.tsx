import React, { useReducer, useEffect } from 'react';

type ActionType =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'REMOVE_TODO'; payload: number };

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type StateType = {
  todos: Todo[];
};

const initialState: StateType = {
  todos: [],
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: action.payload,
            completed: false,
          },
        ],
      };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'REMOVE_TODO':
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

const TodoList: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      dispatch({ type: 'ADD_TODO', payload: JSON.parse(savedTodos) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos));
  }, [state.todos]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newTodo = formData.get('todo') as string;
    if (newTodo.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      event.currentTarget.reset();
    }
  };

  const handleDeleteConfirm = (id: number) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa công việc này?')) {
      dispatch({ type: 'REMOVE_TODO', payload: id });
    }
  };

  return (
    <div className="container mt-5">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="input-group">
          <input type="text" name="todo" className="form-control" placeholder="Add new todo..." />
          <button type="submit" className="btn btn-primary">Add</button>
        </div>
      </form>
      <ul className="list-group">
        {state.todos.map(todo => (
          <li
            key={todo.id}
            className={`list-group-item ${todo.completed ? 'list-group-item-success' : ''}`}
            onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
          >
            {todo.text}
            <button
              type="button"
              className="btn btn-danger btn-sm float-end"
              onClick={(event) => {
                event.stopPropagation();
                handleDeleteConfirm(todo.id);
              }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
