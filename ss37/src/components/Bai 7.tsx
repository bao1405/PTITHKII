import React, { useReducer } from 'react';

type ActionType = {
  type: 'UPDATE_TEXT';
  payload: string;
};

type StateType = {
  text: string;
};

const initialState: StateType = {
  text: '',
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

const BT7: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_TEXT', payload: event.target.value });
  };

  return (
    <div>
        <h1>Bài 7</h1>
      <input
        type="text"
        value={state.text}
        onChange={handleInputChange}
        placeholder="Nhập chuỗi..."
      />
      <div>
        <p>Chuỗi đã nhập: {state.text}</p>
      </div>
    </div>
  );
};

export default BT7;
