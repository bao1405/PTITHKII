import React, { useReducer } from 'react';

type ActionType = {
  type: 'SELECT_GENDER';
  payload: string;
};

type StateType = {
  selectedGender: string | null;
};

const initialState: StateType = {
  selectedGender: null,
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'SELECT_GENDER':
      return { ...state, selectedGender: action.payload };
    default:
      return state;
  }
};

const BT8: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SELECT_GENDER', payload: event.target.value });
  };

  return (
    <div>
      <input
        type="radio"
        id="Nam"
        name="gender"
        value="Nam"
        checked={state.selectedGender === 'Nam'}
        onChange={handleRadioChange}
      />
      <label htmlFor="Nam">Nam</label>
        <br />
      <input
        type="radio"
        id="Nữ"
        name="gender"
        value="Nữ"
        checked={state.selectedGender === 'Nữ'}
        onChange={handleRadioChange}
      />
      <label htmlFor="Nữ">Nữ</label>
    <br />
      <input
        type="radio"
        id="Khác"
        name="gender"
        value="Khác"
        checked={state.selectedGender === 'Khác'}
        onChange={handleRadioChange}
      />
      <label htmlFor="Khác">Khác</label>


      <div>
        {state.selectedGender && (
          <p>Giới tính được chọn: {state.selectedGender}</p>
        )}
      </div>
    </div>
  );
};

export default BT8;
