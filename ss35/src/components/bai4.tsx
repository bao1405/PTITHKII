import React, { useState } from 'react';

const Toggle = () => {
    const [isHidden, setIsHidden] = useState(false);
    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    };
    return (
        <div>
            <h1>Bài 4</h1>
            <button onClick={toggleVisibility}>Toggle Tiêu Đề</button>
            {!isHidden && <h1>Tiêu Đề</h1>}
        </div>
    );
};

export default Toggle;
