import React, { useState } from 'react';

const Select = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <h1>Bài 8</h1>
            {selectedOption && <p>Thành phố: {selectedOption}</p>}
            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="">-- Chọn Thành phố --</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hà Nam">Hà Nam</option>
                <option value="Nghệ An">Nghệ An</option>
            </select>
        </div>
    );
};

export default Select;
