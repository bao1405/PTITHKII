import React, { useState, ChangeEvent } from 'react';

const Exercise02: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h2>bài 3</h2>
      <input type="date" value={inputValue} onChange={handleInputChange} placeholder="Nhập ngày tháng"/>
      <p>thời gian: {inputValue}</p>
    </div>
  );
};

export default Exercise02;
