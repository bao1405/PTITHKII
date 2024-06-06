import React, { useState } from 'react';

const CountClick = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);
    document.title = `click ${newClickCount} lần`; 
  };

  return (
    <div>
        <h1>Bài 2</h1>
      <button onClick={handleClick}>Click {clickCount} lần</button>
    </div>
  );
};

export default CountClick;
