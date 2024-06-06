import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  return (
    <div>
      <h1>Bài 5</h1>
      <h2>Thời gian hiện tại :{time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
