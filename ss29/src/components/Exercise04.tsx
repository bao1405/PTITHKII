import React, { useState, ChangeEvent } from 'react';

const Exercise04: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <h2>Bài 4</h2>
      <select value={selectedValue} onChange={handleSelectChange}>
        <option value="">Chọn tỉnh/thành phố</option>
        <option value="Hanoi">Hà Nội</option>
        <option value="HoChiMinh">Hồ Chí Minh</option>
        <option value="Danang">Đà Nẵng</option>
        <option value="HaiPhong">Hải Phòng</option>
        {/* Thêm các option khác tương tự cho các tỉnh/thành phố khác */}
      </select>
      <p>Tỉnh/Thành phố: {selectedValue}</p>
    </div>
  );
};

export default Exercise04;
