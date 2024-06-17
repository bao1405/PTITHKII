import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <h1>Thông tin cá nhân</h1>
      <p><strong>Id:</strong> {user.id}</p>
      <p><strong>Họ và tên:</strong> {user.userName}</p>
      <p><strong>Giới tính:</strong> {user.gender}</p>
      <p><strong>Ngày sinh:</strong> {user.dateBirth}</p>
      <p><strong>Địa chỉ:</strong> {user.address}</p>
    </div>
  );
};

export default Profile;
