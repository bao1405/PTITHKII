import React, { useState } from 'react';

const ChangeTitle = () => {
  const [newTitle, setNewTitle] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setNewTitle(inputValue);
    document.title = inputValue; 
  };

  return (
    <div>
        <h1>Bài 1</h1>
      <input
        type="text"
        placeholder="Nhập tiêu đề mới..."
        value={newTitle}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default ChangeTitle;
