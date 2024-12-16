// import * as React from 'react';
import React, { useState } from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ListSubheader } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/images/incentive-ace-logo.svg';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import WysiwygOutlinedIcon from '@mui/icons-material/WysiwygOutlined';
import PermDataSettingOutlinedIcon from '@mui/icons-material/PermDataSettingOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import LanOutlinedIcon from '@mui/icons-material/LanOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import './styles.scss';

const drawerWidth = 350;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      },
    },
  ],
}));

const logoutTask = () => {
  localStorage.removeItem('token');
};

type optionType = { title: string; icon: React.ReactElement; path: string; theme?: string; preTask?: any };

const mainOptions: optionType[] = [
  { title: 'Home', icon: <HomeOutlinedIcon />, path: '/home' },
  { title: 'Existing Plans & Scenarios', icon: <ListAltOutlinedIcon />, path: '/home' },
];

const setupNewPlanOptions: optionType[] = [
  // { title: 'Module Selection', icon: <SettingsApplicationsOutlinedIcon />, path: '/module-selection' },
  { title: 'General Setup', icon: <SettingsApplicationsOutlinedIcon />, path: '/general-setup' },
  { title: 'Team Setup', icon: <LanOutlinedIcon />, path: '/coming-soon' },
  { title: 'Product Setup', icon: <WysiwygOutlinedIcon />, path: '/coming-soon' },
  { title: 'Plan Setup', icon: <PermDataSettingOutlinedIcon />, path: '/coming-soon' },
  { title: 'Data Input & Templates', icon: <FeaturedPlayListOutlinedIcon />, path: '/data-input-templates' },
  { title: 'Data Validations', icon: <DonutSmallOutlinedIcon />, path: '/coming-soon' },
  { title: 'General Report', icon: <DvrOutlinedIcon />, path: '/coming-soon' },
];
const auditLogOptions: optionType[] = [
  { title: 'Error & Violation', icon: <ErrorOutlineOutlinedIcon />, path: '/coming-soon' },
];
const settingsOptions: optionType[] = [
  { title: 'Settings', icon: <SettingsOutlinedIcon />, path: '/coming-soon' },
  { title: 'Help', icon: <HelpOutlineOutlinedIcon />, path: '/coming-soon' },
];

const bottomOptions: optionType[] = [
  { title: 'Logout Account', icon: <LogoutOutlinedIcon />, path: '/login', theme: 'red', preTask: logoutTask },
];

type SidebarPropsType = { open: boolean; handleDrawerClose: () => void };

const Sidebar = ({ open, handleDrawerClose }: SidebarPropsType) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const activeTabObject = [...setupNewPlanOptions, ...auditLogOptions, ...settingsOptions].find(
    (pathObject) => pathObject.path === location.pathname,
  );
  const activeTabName = activeTabObject ? activeTabObject.title : 'Home';
  const [activeItemTitle, setActiveItemTitle] = useState<string>(activeTabName);

  const handleOptionClick = (event: React.SyntheticEvent, path: string, preTask: any, title: string) => {
    preTask && preTask();
    event.preventDefault();
    navigate(path);
    setActiveItemTitle(title);
  };

  return (
    <Drawer variant="permanent" open={open} sx={{ overflow: 'hidden' }}>
      <DrawerHeader>
        <img src={logo} alt="IncentiveAce" className="incentiveAceLogo" />
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <div style={{ overflowX: 'auto' }}>
        <List
          subheader={
            open ? (
              <ListSubheader component="div" id="nested-list-subheader">
                Main
              </ListSubheader>
            ) : null
          }
          sx={{ textWrap: 'auto' }}
        >
          {mainOptions.map(({ title, icon: Icon, path, preTask }: optionType, index) => (
            <ListItem
              key={`${title}+${index}`}
              disablePadding
              sx={{ display: 'block' }}
              className={`${activeItemTitle === title && 'active-list-item'}`}
            >
              <ListItemButton onClick={(e) => handleOptionClick(e, path, preTask, title)}>
                <ListItemIcon className="ListItemIcon">{Icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List
          subheader={
            open ? (
              <ListSubheader component="div" id="nested-list-subheader">
                SETUP NEW PLAN
              </ListSubheader>
            ) : null
          }
          sx={{ textWrap: 'auto' }}
        >
          {setupNewPlanOptions.map(({ title, icon: Icon, path, preTask }: optionType, index) => (
            <ListItem
              className={`${activeItemTitle === title && 'active-list-item'}`}
              key={`${title}+${index}`}
              disablePadding
              sx={{ display: 'block' }}
            >
              <ListItemButton onClick={(e) => handleOptionClick(e, path, preTask, title)}>
                <ListItemIcon>{Icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List
          subheader={
            open ? (
              <ListSubheader component="div" id="nested-list-subheader">
                AUDIT LOG
              </ListSubheader>
            ) : null
          }
          sx={{ textWrap: 'auto' }}
        >
          {auditLogOptions.map(({ title, icon: Icon, path, preTask }: optionType, index) => (
            <ListItem
              className={`${activeItemTitle === title && 'active-list-item'}`}
              key={`${title}+${index}`}
              disablePadding
              sx={{ display: 'block' }}
            >
              <ListItemButton onClick={(e) => handleOptionClick(e, path, preTask, title)}>
                <ListItemIcon>{Icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List
          subheader={
            open ? (
              <ListSubheader component="div" id="nested-list-subheader">
                SETTINGS
              </ListSubheader>
            ) : null
          }
          sx={{ textWrap: 'auto' }}
        >
          {settingsOptions.map(({ title, icon: Icon, path, preTask }: optionType, index) => (
            <ListItem
              className={`${activeItemTitle === title && 'active-list-item'}`}
              key={`${title}+${index}`}
              disablePadding
              sx={{ display: 'block' }}
            >
              <ListItemButton onClick={(e) => handleOptionClick(e, path, preTask, title)}>
                <ListItemIcon>{Icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List sx={{ textWrap: 'auto' }}>
          {bottomOptions.map(({ title, icon: Icon, path, preTask }: optionType, index) => (
            <ListItem key={`${title}+${index}`} disablePadding sx={{ display: 'block' }} className="logoutItem">
              <ListItemButton onClick={(e) => handleOptionClick(e, path, preTask, title)}>
                <ListItemIcon>{Icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
