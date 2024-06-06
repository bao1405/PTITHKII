import React, { useState, useRef } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(null);

  const handleIncrement = () => {
    prevCountRef.current = count; 
    setCount(prevCount => prevCount + 1);
  };


  return (
    <div>
        <h1>Bài 7</h1>
      <h1>Counter</h1>
      <p>Giá trị trước đó: {prevCountRef.current}</p>
      <p>Giá trị hiên tại:{count}</p>
      <button onClick={handleIncrement}>Tăng</button>

    </div>
  );
};

export default Counter;
