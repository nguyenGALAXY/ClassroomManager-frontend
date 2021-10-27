import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import {
  Box,
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  page: {
    background: '#f9f9f9',
    width: '100%',
    padding: theme.spacing(3)
  },
  root: {
    display: 'flex'
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  active: {
    background: '#f4f4f4'
  },
  title: {
    padding: theme.spacing(2)
  },
  appBar: {
    width: `100%`,
    marginLeft: drawerWidth
  },
  date: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar
}));

function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: '/create'
    }
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      {/* app bar */}
      {/* <AppBar 
        position="fixed" 
        className={classes.appBar}
        elevation={0}
        color="primary"
      >
        <Toolbar>
          <Typography>
            Welcome
          </Typography>
        </Toolbar>
      </AppBar> */}
      <AppBar
        color="secondary"
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            My Classroom
          </Typography>
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          {/* links/list section */}
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => history.push(item.path)}
                className={location.pathname === item.path ? classes.active : null}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div className={classes.toolbar} />
        {children}
      </Box>
    </Box>
  );
}
Layout.propType = {
  children: PropTypes.node
};
export default Layout;
