import React, { useState } from 'react';
import UserForm from './UserForm';
import UserTable from './UserList';

const UserCrudWrapper = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const editUser = (index) => {
    const userToEdit = { ...users[index], index };
    setSelectedUser(userToEdit);
  };

  const updateUser = (updatedUser) => {
    const newUsers = users.map((user, index) =>
      index === updatedUser.index ? updatedUser : user
    );
    setUsers(newUsers);
    setSelectedUser(null);
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>User CRUD Operations</h1>
      <UserForm addUser={addUser} selectedUser={selectedUser} updateUser={updateUser} />
      <UserTable users={users} editUser={editUser} deleteUser={deleteUser} />
    </div>
  );
};

export default UserCrudWrapper;