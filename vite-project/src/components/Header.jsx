import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Avatar, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";

export const Header = ({ loggedInUser, setLoggedInUser }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    navigate('/profile');
    handleMenuClose();
  };

  const handleLogout = () => {
    setLoggedInUser('');
    handleMenuClose();
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'purple' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }} onClick={() => navigate('/homepage')}>
          <img src="../../public/downloadfile-3.jpg" alt="logo" style={{ height: '50px' }} />
        </IconButton>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Hello World!
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            {loggedInUser.name}
          </Typography>
          <IconButton onClick={handleMenuClick} color="inherit">
            <Avatar src={loggedInUser.avatar_url} alt={loggedInUser.name} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};