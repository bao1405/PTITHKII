import React, { useState } from 'react';

const AddElement: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const addNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1; 
    const updatedNumbers = [...numbers, randomNumber]; 
    setNumbers(updatedNumbers); 
  };

  return (
    <div>
        <h2>Bài 7</h2>
      <button onClick={addNumber}>Add element</button>
      <p>Mảng số: [{numbers.join(', ')}]</p>
    </div>
  );
};

export default AddElement;
