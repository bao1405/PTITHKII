import React, { useEffect, useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
        <h1>Bài 4</h1>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default FocusInput;
