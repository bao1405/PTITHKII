import React, { useState, useEffect } from 'react';

const CountTimeRender = () => {
  const [timeSinceRender, setTimeSinceRender] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSinceRender(prevTime => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Bài 9</h1>
      <p>Thời gian đã trôi qua: {timeSinceRender} giây</p>
    </div>
  );
};

export default CountTimeRender;
