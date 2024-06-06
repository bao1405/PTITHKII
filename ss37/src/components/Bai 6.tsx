import React, { useReducer } from 'react';

type State = {
  count: number;
};

type Action = {
  type: 'decrement';
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'decrement':
      return { ...state, count: state.count - 1 };
    default:
      throw new Error('Unknown action type');
  }
};

const BT6: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { count: 10 });

  return (
    <div>
        <h1>Bài 6</h1>
      <p>Current count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        BT6
      </button>
    </div>
  );
};

export default BT6;
