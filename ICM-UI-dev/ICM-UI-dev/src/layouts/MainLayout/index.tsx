import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Sidebar from '@components/Sidebar';
import Header from '@components/Header';
import './styles.scss';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

type MainLayoutPropsType = { children: JSX.Element | JSX.Element[] };

const MainLayout = ({ children }: MainLayoutPropsType) => {
  const [open, setOpen] = React.useState<boolean>(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className="mainLayout-container">
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <Box
        className="main-content-box"
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: '#fbfbfb',
          width: 'calc(100% - 240px)',
        }}
      >
        <DrawerHeader className="drawer-header-fixed" />
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
