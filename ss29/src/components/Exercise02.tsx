import React, { useState, ChangeEvent } from 'react';

const Exercise02: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h2>Bài 2</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter text here"/>
      <p>dữ liệu người dùng nhập: {inputValue}</p>
    </div>
  );
};

export default Exercise02;
