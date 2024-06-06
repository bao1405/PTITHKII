import React, { memo } from 'react';

interface User {
  id: number;
  userName: string;
  email: string;
  address: string;
}

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <div>
      <p>ID: {user.id}</p>
      <p>Name: {user.userName}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
      <hr />
    </div>
  );
};

export default memo(UserItem);
