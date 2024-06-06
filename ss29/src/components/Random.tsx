import React, { useState } from 'react';

const RandomGender: React.FC = () => {
  const genders = ['Nam', 'Nữ', 'Khác'];
  const [randomGender, setRandomGender] = useState<string>('Nam');

  const getRandomGender = () => {
    const randomIndex = Math.floor(Math.random() * genders.length);
    setRandomGender(genders[randomIndex]);
  };

  return (
    <div>
      <h2>Random Gender</h2>
      <button onClick={getRandomGender}>Random gender</button>
      <p>Giới tính: {randomGender}</p>
    </div>
  );
};

export default RandomGender;
