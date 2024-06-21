import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../utils/api';

export const Login = ({ setLoggedInUser }) => {
  const [username, setUsername] = useState('');
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers().then((users) => {
      setAllUsers(users);
    });
  }, []);

  const handleLogin = () => {
    const userExists = allUsers.some(user => user.username === username);
    if (userExists) {
      const loggedInUser = allUsers.find(user => user.username === username);
      setLoggedInUser(loggedInUser);
      navigate('/homepage'); 
    } else {
      alert('Username not found');
    }
  };

  const handleCreateAccount = () => {
    navigate('/create-account');
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" component="h1" gutterBottom>
          Hello World!
        </Typography>
        <Avatar
          src="./downloadfile-3.jpg"
          alt="Logo"
          sx={{ width: 100, height: 100, marginBottom: '20px' }}
        />
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onSubmit={handleLogin}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          sx={{ marginTop: '20px', backgroundColor: 'green', '&:hover': { backgroundColor: 'purple' } }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleCreateAccount}
          sx={{ marginTop: '20px', backgroundColor: 'green', '&:hover': { backgroundColor: 'purple' } }}
        >
          Create New Account
        </Button>
      </Box>
    </Container>
  );
};