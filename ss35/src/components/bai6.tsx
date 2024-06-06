import React, { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <h1>Bài 6</h1>
            <h2>bạn đã click {count} lần</h2>
            <button onClick={incrementCount}>Click để tăng số lần click</button>
        </div>
    );
};

export default Count;
