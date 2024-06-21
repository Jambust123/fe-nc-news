import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    // Handle create account logic here
    console.log('Creating account with:', { username, name, profilePicture });
  };

  const handleBackToLogin = () => {
    navigate('/');
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
          Create Account
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Profile Picture URL"
          variant="outlined"
          fullWidth
          margin="normal"
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
        />
        {profilePicture && (
          <Avatar
            src={profilePicture}
            alt="Profile Picture"
            style={{ marginTop: '20px', width: '100px', height: '100px' }}
          />
        )}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleCreateAccount}
          sx={{ marginTop: '20px', backgroundColor: 'green', '&:hover': { backgroundColor: 'purple' } }}
        >
          Create Account
        </Button>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleBackToLogin}
          sx={{ marginTop: '20px', backgroundColor: 'green', '&:hover': { backgroundColor: 'purple' } }}
        >
          Back to Login
        </Button>
      </Box>
    </Container>
  );
};