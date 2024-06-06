import React, { useState, useMemo } from 'react';

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 100); // Tạo số ngẫu nhiên từ 0 đến 99
    setRandomNumber(newRandomNumber);
  };

  const memoizedRandomNumber = useMemo(() => {
    return randomNumber;
  }, [randomNumber]);

  return (
    <div>
      <h1>Bài 4</h1>
      <p>Random Number: {memoizedRandomNumber}</p>
      <button onClick={generateRandomNumber}>Generate</button>
    </div>
  );
};

export default RandomNumberGenerator;
