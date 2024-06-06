import React, { useReducer } from 'react';

type State = {
  count: number;
};

type Action = {
  type: 'increment';
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    default:
      throw new Error('Unknown action type');
  }
};

const BT5: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Current count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        BT5
      </button>
    </div>
  );
};

export default BT5;
