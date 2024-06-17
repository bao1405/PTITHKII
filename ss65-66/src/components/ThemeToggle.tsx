import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store1';
import { toggleTheme } from '../features/theme/themeSlice';

const ThemeToggle: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={darkMode} onChange={handleChange} />
        Dark Mode
      </label>
    </div>
  );
};

export default ThemeToggle;
