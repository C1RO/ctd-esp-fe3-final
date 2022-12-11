
import React, {useContext,useState} from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AdbIcon from '@mui/icons-material/Adb';
import {ContextGlobal} from './utils/global.context';
import { Link, Route, Routes, useNavigate } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
const pages = ['Home', 'Contact', 'Favs'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const {state, dispatch } = useContext(ContextGlobal)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);

  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {

    setAnchorElNav(null);
    if (page === 'Home') {
      navigate("/")

    }
    if (page === 'Contact') {
      navigate("/" + page)

    }
    if (page === 'Favs') {
      navigate("/" + page)

    }

  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar style={state.bgFlag == "Dark" ?  {background: '#2E3B55'} : {background: '#1976d2'}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MedicalInformationIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: "large" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DH Odonto
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu()}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <MedicalInformationIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, fontSize: "large" }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DH Odonto

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Change mode">
            <IconButton sx={{ ml: 1 }} onClick={() => dispatch(state.bgFlag ==="Dark" ? {type:"Light"} : {type:"Dark"})} color="inherit">
        {state.bgFlag === 'Light' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
            </Tooltip>

          </Box>

        </Toolbar>

      </Container>

    </AppBar>
  );
}
export default ResponsiveAppBar;