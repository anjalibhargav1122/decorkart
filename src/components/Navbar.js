import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from "../assets/logo.avif";
import Button from '@mui/material/Button';
import { TiEyeOutline } from "react-icons/ti";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { Divider } from '@mui/material';

const pages = ['Decor', 'Kitchen & Dining', 'Lighting', "Wall Decor", "Bath Decor", "Furniture", "Gift Atelier"];
const settings = ["Track Order", "Sign In", "Easy Returns"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [isNavbarFixed, setIsNavbarFixed] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsNavbarFixed(scrollTop > 0); // Fix navbar only when scrolled
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      sx={{
        width: '100%',
        backgroundColor: '#350001',
        paddingTop: "8px",
        paddingBottom: "8px",
        position: isNavbarFixed ? 'fixed' : 'static', // Dynamically set position
        top: 0,
        left: 0,
        zIndex: 1100, // Ensure navbar stays on top
        boxShadow: isNavbarFixed ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <Typography
            noWrap
            component="a"
            href="#"
            sx={{
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
            }}
          >
            <div style={{ width: '230px', height: 'auto' }}>
              <img className='w-full h-full' src={logo} alt="Logo" />
            </div>
          </Typography>
        </Box>

        {/* Navigation Menu (Mobile) */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="open navigation menu"
            aria-controls="menu-appbar-nav"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar-nav"
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
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Navigation Menu (Desktop) */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
          {pages.map((page, index) => (
            <Typography
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: 'white',
                cursor: 'pointer',
                padding: '0 8px', // Adds space around each item
                display: 'block',
                fontSize: '14px',
                fontFamily: ' "Avenir Next Rounded", sans-serif',
                fontWeight: '500',
              }}
            >
              {page}
            </Typography>
          ))}
        </Box>

        {/* User Menu */}
        <Box sx={{ flexGrow: 0, ml: 2, display: "flex", alignItems: "center" }}>
          <Button
            variant="contained"
            size="small"
            sx={{
              borderRadius: '9999px',
              background: "white",
              color: "black",
              fontFamily: ' "Avenir Next Rounded", sans-serif',
              textTransform: "none",
              marginRight: "12px"
            }}
          >
            Get App
          </Button>
          <div className='mr-3'>
            <TiEyeOutline className='text-3xl' /><p className='ff text-xs'>Viewed</p>
          </div>
          <div className='mr-3'>
            <CiSearch className='text-3xl' /><p className='ff text-xs'>Search</p>
          </div>
          <div>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <FiUser color="white" size="1.5rem" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar-user"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" className='hover:text-[#c3c3c3]  ff ' sx={{ fontSize: "0.8rem"}}>{setting}<Divider/></Typography>
                </MenuItem>
              ))}
            </Menu>
            <p className='ff text-xs'>Account</p>
          </div>
          <div className='ml-3 relative'>
            <PiShoppingCartSimpleLight className='text-3xl' />
            <p className='ff text-xs'>Cart</p>
            <div className='absolute top-0 right-0 w-5 h-5 bg-white text-black flex items-center justify-center rounded-full text-[10px]'>0</div>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

