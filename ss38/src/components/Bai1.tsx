import React, { useState, useCallback } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
        <h1>Bài 1</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
    </div>
  );
};

export default Counter;
