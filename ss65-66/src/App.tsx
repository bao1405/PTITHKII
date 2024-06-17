import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from './app/store1';
import { setUser } from './features/user/userSlice';
import Profile from './components/Profile';
import ListUser from './components/ListUser';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = {
      id: '1',
      userName: 'Nguyễn Văn Nam',
      gender: 'Nam',
      dateBirth: '20/03/2023',
      address: 'Thanh Xuân, Hà Nội',
    };

    dispatch(setUser(userData));
  }, [dispatch]);
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  return (
    <div>
      <Profile />
      <div className={`app ${darkMode ? 'dark' : 'light'}`}></div>
      <ThemeToggle/>
    </div>
  );
};

export default App;
