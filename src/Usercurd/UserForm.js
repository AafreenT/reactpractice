import React, { useState, useEffect } from 'react';

const UserForm = ({ addUser, selectedUser, updateUser }) => {
  const [user, setUser] = useState({ firstname: '', lastname: '', address: '', mobile: '', gender: '' });
  
  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      updateUser(user);
    } else {
      addUser(user);
    }
    setUser({ firstname: '', lastname: '', address: '', mobile: '', gender: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>First Name</label>
        <input type="text" name="firstname" className="form-control" value={user.firstname} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input type="text" name="lastname" className="form-control" value={user.lastname} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input type="text" name="address" className="form-control" value={user.address} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Mobile Number</label>
        <input type="text" name="mobile" className="form-control" value={user.mobile} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Gender</label>
        <input type="text" name="gender" className="form-control" value={user.gender} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">
        {selectedUser ? 'Update' : 'Add'} User
      </button>
    </form>
  );
};

export default UserForm;