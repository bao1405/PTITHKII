import React, { useState } from 'react';

const ChangeColor = () => {
    const [textColor, setTextColor] = useState('black');
    const changeColor = () => {
        setTextColor('red');
    };

    return (
        <div>
            <h1>Bài 3</h1>
            <p style={{ color: textColor }}>Màu chữ thay đổi</p>
            <button onClick={changeColor}>Thay đổi màu chữ</button>
        </div>
    );
};

export default ChangeColor;
