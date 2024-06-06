import React, { useState } from 'react';

const CountText = () => {
    const [charCount, setCharCount] = useState(0);
    const handleTextChange = (event) => {
        const text = event.target.value;
        setCharCount(text.length);
    };

    return (
        <div>
            <h1>Bài 7</h1>
            <textarea rows={4} cols={50} onChange={handleTextChange} placeholder="Nhập văn bản"/>
            <p>Số ký tự: {charCount}</p>
        </div>
    );
};

export default CountText;
