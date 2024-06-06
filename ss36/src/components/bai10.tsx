import React, { useState, useEffect } from 'react';

const KeyPress = () => {
  const [keyInfo, setKeyInfo] = useState({ keyName: '', keyCode: '' });

  useEffect(() => {
    const handleKeyPress = (event) => {
      const { key, keyCode } = event;
      setKeyInfo({ keyName: key, keyCode: keyCode });
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div>
      <h1>Bài 10</h1>
      <h1>KeyPress</h1>
      <p>Tên phím: {keyInfo.keyName}</p>
      <p>Mã phím: {keyInfo.keyCode}</p>
    </div>
  );
};

export default KeyPress;
