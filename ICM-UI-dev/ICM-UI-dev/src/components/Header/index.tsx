import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import './styles.scss';
import { Avatar } from '@mui/material';
import CustomSearch from '@components/CustomSearch';

const drawerWidth = 370;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginRight: '20px',
        height: '84px',
        width: `calc(100% - ${drawerWidth + 20}px)`,
        borderRadius: '41.1px',
        marginTop: '16px',
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

type HeaderPropsType = { open: boolean; handleDrawerOpen: () => void };

const Header = ({ open, handleDrawerOpen }: HeaderPropsType) => {
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" open={open} className="custom-header">
        <Toolbar className="header-toolbar-container">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon className="menu-icon" />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div"> */}
          <div className="navbar-container">
            <CustomSearch></CustomSearch>
            {/* </Typography> */}
            <div className="navbar-profile-container">
              <div className="notification-container">
                <NotificationsNoneOutlinedIcon className="notification-icon" fontSize="small" />
              </div>
              <div className="user-container">
                <div>
                  <Avatar>
                    <PermIdentityOutlinedIcon />
                  </Avatar>
                </div>
                <div className="user-info">
                  <h6>Admin</h6>
                  <h5>Andrew Smith</h5>
                </div>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
