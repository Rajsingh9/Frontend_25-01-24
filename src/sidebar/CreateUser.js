import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const CreateUser = ({ onCreateUser }) => {
  const [user, setUser] = useState({
    userId: '',
    email: '',
    fullName: '',
    password: '',
    role: 'user', // Default role
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and submit the user data
    onCreateUser(user);
    // Optionally, you can reset the form or close the modal after submission
    setUser({
      userId: '',
      email: '',
      fullName: '',
      password: '',
      role: 'user',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="User ID"
        type="number"
        name="userId"
        value={user.userId}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Full Name"
        type="text"
        name="fullName"
        value={user.fullName}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Role</InputLabel>
        <Select
          name="role"
          value={user.role}
          onChange={handleChange}
          label="Role"
        >
          <MenuItem value="user">User</MenuItem>
          <MenuItem value="dealer">Dealer</MenuItem>
          <MenuItem value="supplier">Supplier</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" fullWidth>
        Submit
      </Button>
    </form>
  );
};

export default CreateUser;
