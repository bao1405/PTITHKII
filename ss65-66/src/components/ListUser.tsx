import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store2';
import './ListUser.css'; // import the CSS file

const ListUser: React.FC = () => {
  const users = useSelector((state: RootState) => state.user.users);

  return (
    <div>
      <h1>List of Users</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.userName}</td>
              <td>{user.gender}</td>
              <td>{user.dateBirth}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;
