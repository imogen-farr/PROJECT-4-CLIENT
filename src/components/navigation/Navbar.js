import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthenticated } from '../../hooks/useAuthenticated';
import { AUTH } from '../../lib/auth';
import '../../styles/App.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import MoreIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import NavDrawer from './NavDrawer';
// import Logo from '../../assets/books-icon-2.png';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const navigate = useNavigate();
  const [isLoggedIn] = useAuthenticated();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const logout = () => {
    AUTH.logout();
    handleMenuClose();
    navigate('/welcome');
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {isLoggedIn ? (
        <MenuList sx={{ width: 1 }} disablePadding>
          <MenuItem onClick={logout}>Log Out</MenuItem>
        </MenuList>
      ) : (
        <MenuItem
          sx={{ width: 1 }}
          onClick={() => {
            handleMenuClose();
            navigate('/login');
          }}
        >
          Log In
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box className='navigation' sx={{ flexGrow: 1, mb: 5 }}>
      <AppBar
        position='static'
        sx={{
          backgroundColor: '#643909',
          color: 'rgb(240, 173, 4)',
          margin: 0,
          paddingBottom: 0,
          fontFamily: 'American Typewriter (serif)',
          borderBottom: 'none',
        }}
      >
        <Toolbar>
          <NavDrawer />

          <Typography
            variant='h6'
            noWrap
            component='div'
            className='text'
            sx={{
              display: { xs: 'none', sm: 'block' },
              fontFamily: 'American Typewriter (serif)',
            }}
          >
            gobolino
          </Typography>
          {/* <img src={Logo} /> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <Avatar />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Navbar;
