import React from 'react';

const Season = () => {
  const getSeason = () => {
    const currentMonth = new Date().getMonth() + 1;
    let season = '';
    
    switch (true) {
      case currentMonth >= 1 && currentMonth <= 3:
        season = 'Mùa Xuân';
        break;
      case currentMonth >= 4 && currentMonth <= 6:
        season = 'Mùa Hạ';
        break;
      case currentMonth >= 7 && currentMonth <= 9:
        season = 'Mùa Thu';
        break;
      case currentMonth >= 10 && currentMonth <= 12:
        season = 'Mùa Đông';
        break;
      default:
        season = 'Không xác định';
    }

    return season;
  };

  return (
    <div>
        <h1>Bài 8</h1>
      <h1>Mùa hiện tại</h1>
      <p>Hiện tại là {getSeason()}</p>
    </div>
  );
};

export default Season;
