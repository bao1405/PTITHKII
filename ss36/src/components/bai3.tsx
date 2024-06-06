import React, { useState } from 'react';

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('Trang chủ');

  const tabs = ['Trang chủ', 'Sản phẩm', 'Giới thiệu', 'Liên hệ'];

  const handleItemClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav>
        <h1>bài 3</h1>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={currentPage === tab ? 'active' : ''}
          onClick={() => handleItemClick(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
