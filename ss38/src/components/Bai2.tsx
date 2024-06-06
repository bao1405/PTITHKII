import React, { useMemo } from 'react';

const UserList = () => {
  const users = [
    { 
        id: 1, 
        name: 'Alice', 
        age: 25 
    },
    { 
        id: 2, 
        name: 'Bob', 
        age: 30 
    },
    { 
        id: 3, 
        name: 'Charlie', 
        age: 18 
    },
    { 
        id: 4, 
        name: 'David', 
        age: 20 
    },
  ];

  const filteredUsers = useMemo(() => users.filter(user => user.age > 18), [users]);

  return (
    <div>
        <h1>Bài 2</h1>
      <h2>User List</h2>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
