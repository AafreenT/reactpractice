
import React from 'react';

const UserTable = ({ users, editUser, deleteUser }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Mobile Number</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.address}</td>
            <td>{user.mobile}</td>
            <td>{user.gender}</td>
            <td>
              <button className="btn btn-info" onClick={() => editUser(index)}>Edit</button>
              <button className="btn btn-danger" onClick={() => deleteUser(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;