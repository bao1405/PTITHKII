import React, { useState, useCallback } from 'react';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const handleChangeColor = useCallback((e) => {
    setSelectedColor(e.target.value);
  }, []);

  return (
    <div>
        <h1>Bài 3</h1>
      <h2>Color Picker</h2>
      <input
        type="color"
        value={selectedColor}
        onChange={handleChangeColor}
      />
      <div style={{ marginTop: '10px', width: '100px', height: '50px', backgroundColor: selectedColor }}></div>
    </div>
  );
};

export default ColorPicker;
