import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Avatar, Box, Button, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useTheme } from '@mui/material/styles';
import { useAppContext } from '../context/AppContext';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Game', path: '/game' },
  { label: 'Leaderboard', path: '/leaderboard' },
  { label: 'Wallet', path: '/wallet' },
  { label: 'Settings', path: '/settings' },
];

const NavBar = () => {
  const { state } = useAppContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [profileAnchor, setProfileAnchor] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleProfileMenu = (event) => setProfileAnchor(event.currentTarget);
  const handleProfileClose = () => setProfileAnchor(null);

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#000', boxShadow: '0 0 24px 2px #8a0037', borderBottom: '2px solid #8a0037' }}>
      <Toolbar sx={{ minHeight: 72 }}>
        <Typography
          variant="h3"
          sx={{
            flexGrow: 1,
            fontFamily: 'Cinzel, serif',
            color: 'accent.main',
            letterSpacing: 3,
            fontWeight: 900,
            textShadow: '0 0 24px #8a0037',
            cursor: 'pointer',
            userSelect: 'none',
            fontSize: { xs: 28, md: 36 },
          }}
        >
          LuckyLoop
        </Typography>
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={handleMenu}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              {navLinks.map(link => (
                <MenuItem key={link.label} component={NavLink} to={link.path} onClick={handleClose} sx={{ fontFamily: 'Cinzel, serif' }}>{link.label}</MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 3 }}>
            {navLinks.map(link => (
              <Button
                key={link.label}
                component={NavLink}
                to={link.path}
                sx={{
                  color: '#e0e0e0',
                  fontFamily: 'Cinzel, serif',
                  fontWeight: 700,
                  fontSize: 18,
                  px: 2,
                  position: 'relative',
                  '&.active': {
                    color: 'accent.main',
                    '::after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 2,
                      height: 4,
                      borderRadius: 2,
                      background: 'linear-gradient(90deg, #8a0037 60%, #bfa14a 100%)',
                    },
                  },
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}
        <IconButton color="inherit" onClick={handleProfileMenu} sx={{ ml: 2 }}>
          {state.user.avatar ? <Avatar src={state.user.avatar} /> : <AccountCircle fontSize="large" />}
        </IconButton>
        <Menu anchorEl={profileAnchor} open={Boolean(profileAnchor)} onClose={handleProfileClose}>
          <MenuItem component={NavLink} to="/wallet" onClick={handleProfileClose}>Wallet</MenuItem>
          <MenuItem component={NavLink} to="/settings" onClick={handleProfileClose}>Settings</MenuItem>
          <MenuItem onClick={handleProfileClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar; 