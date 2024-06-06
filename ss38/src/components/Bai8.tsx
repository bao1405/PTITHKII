import React, { useMemo } from 'react';
import UserItem from './UserItem';

interface User {
  id: number;
  userName: string;
  email: string;
  address: string;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const userList = useMemo(() => {
    return users.map(user => <UserItem key={user.id} user={user} />);
  }, [users]);

  return (
    <div>
      <h2>User List</h2>
      {userList}
    </div>
  );
};

export default UserList;
