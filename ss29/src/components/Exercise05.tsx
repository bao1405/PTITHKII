import React, { useState } from 'react';

const Exercise05: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
        <h2>Bài 5</h2>
      <button onClick={toggleVisibility}>{isVisible ? 'Hiển' : 'Ẩn'}</button>
    </div>
  );
};

export default Exercise05;
