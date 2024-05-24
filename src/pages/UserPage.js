import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserPage = () => {
  const [users, setUsers] = useState('');

  useEffect(() => {
    userList();
  }, []);

  const userList = () => {
    axios
      .get('/api/users')
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the users!', error);
      });
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
