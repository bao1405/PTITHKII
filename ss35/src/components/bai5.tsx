import React, { useState } from 'react';

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <h1>Bài 5</h1>
            <input type="text" value={inputValue} onChange={handleChange} placeholder="Nhập giá trị" />
            <p>Giá trị nhập: {inputValue}</p>
        </div>
    );
};

export default Form;
