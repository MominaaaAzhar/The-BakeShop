import React, { useState, useCallback } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItemText, ListItemButton, Avatar, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading, user } = useSelector((state) => state.auth);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    dispatch(logout());
    navigate('/login');
  }, [dispatch, navigate]);

  const handleMenuClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const getInitials = (firstName, lastName) => {
    const firstInitial = firstName ? firstName.charAt(0) : '';
    const lastInitial = lastName ? lastName.charAt(0) : '';
    return `${firstInitial}${lastInitial}`.toUpperCase();
  };

  const authLinks = (
    <>
      <Button color="inherit" component={Link} to="/home">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/dashboard">
        Dashboard
      </Button>
      {user && user.isAdmin && (
        <Button color="inherit" component={Link} to="/admin">
          Admin Portal
        </Button>
      )}
      {user && (
        <IconButton color="inherit" onClick={handleMenuClick}>
          <Avatar
            style={{
              backgroundColor: user.avatarBgColor || '#000',
              color: user.avatarTextColor || '#fff',
            }}
          >
            {getInitials(user.firstName, user.lastName)}
          </Avatar>
        </IconButton>
      )}
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
          Profile
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );

  const guestLinks = (
    <>
      <Button color="inherit" component={Link} to="/login">
        Login
      </Button>
      <Button color="inherit" component={Link} to="/register">
        Register
      </Button>
    </>
  );

  const drawerLinks = (
    <List>
      <ListItemButton component={Link} to="/home" onClick={() => setDrawerOpen(false)}>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton component={Link} to="/products" onClick={() => setDrawerOpen(false)}>
        <ListItemText primary="Products" />
      </ListItemButton>
      <ListItemButton component={Link} to="/about" onClick={() => setDrawerOpen(false)}>
        <ListItemText primary="About" />
      </ListItemButton>
      <ListItemButton component={Link} to="/contact" onClick={() => setDrawerOpen(false)}>
        <ListItemText primary="Contact" />
      </ListItemButton>
      {isAuthenticated ? (
        <>
          <ListItemButton component={Link} to="/dashboard" onClick={() => setDrawerOpen(false)}>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton component={Link} to="/profile" onClick={() => setDrawerOpen(false)}>
            <ListItemText primary="Profile" />
          </ListItemButton>
          {user && user.isAdmin && (
            <ListItemButton component={Link} to="/admin" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="Admin Portal" />
            </ListItemButton>
          )}
          <ListItemButton onClick={() => { handleLogout(); setDrawerOpen(false); }}>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </>
      ) : (
        <>
          <ListItemButton component={Link} to="/login" onClick={() => setDrawerOpen(false)}>
            <ListItemText primary="Login" />
          </ListItemButton>
          <ListItemButton component={Link} to="/register" onClick={() => setDrawerOpen(false)}>
            <ListItemText primary="Register" />
          </ListItemButton>
        </>
      )}
    </List>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Bakery
        </Typography>
        <div className="desktop-menu">
          <Button color="inherit" component={Link} to="/products">
            Products
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
          {!loading && (isAuthenticated ? authLinks : guestLinks)}
        </div>
        <div className="mobile-menu">
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        </div>
        <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          {drawerLinks}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
