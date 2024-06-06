import React, { useState, useEffect } from 'react';

const Scroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.title = `vị trí cuộn: ${scrollPosition}px`;
  }, [scrollPosition]);

  const generateLorem = (count) => {
    const lorem = '';
    return lorem.repeat(count);
  };

  return (
    <div>
        <h1>Bài 6</h1>
      <h1>Scroll Component</h1>
      <p>{generateLorem(50)}</p>
      <p>Scroll Position: {scrollPosition}px</p>
    </div>
  );
};

export default Scroll;
