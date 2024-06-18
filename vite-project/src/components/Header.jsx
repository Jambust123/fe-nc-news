import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

const handleClick = (event) => {
  navigate(`/homepage`);
}

  return (
    <AppBar onClick={handleClick} position="static" sx={{ backgroundColor: 'darkgrey' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
          <img src="../../public/downloadfile-3.jpg" alt="logo" style={{ height: '50px' }}/>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Hello World!
        </Typography>
      </Toolbar>
    </AppBar>
  );
};