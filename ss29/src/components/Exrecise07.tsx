import React, { useState } from 'react';

const Exercise07: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount(count + 1); 
  };

  return (
    <div>
        <h2>bài 8</h2>
      <h2>số lần khi bấm click: {count}</h2>
      <button onClick={incrementCount}>click {count} lần</button>
    </div>
  );
};

export default Exercise07;
