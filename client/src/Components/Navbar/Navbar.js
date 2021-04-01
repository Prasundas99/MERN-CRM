import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from 'react-router-dom';


import { useStyles } from '../../styles/NavbarStyle';


const drawerWidth = 240;



export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        
        className={clsx(classes.appBar, {
         
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            CRM
          </Typography>
        </Toolbar>

        <Typography variant="body1" className={classes.moveRight}> Hello, Admin </Typography>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Typography variant='h5' align='center' >CRM</Typography>
        <Divider />
        {/*..........................................List items list...........................................*/}
          <List>
            <ListItem >
                <ListItemText>
                    <Typography align='center' variant='h6'> <Link to = "/ProductList" style={{ textDecoration: 'none' }}>Product List</Link></Typography>    
                </ListItemText>
            </ListItem>

            <ListItem >
                <ListItemText>
                    <Typography align='center' variant='h6'> <Link to = "/Allocation" style={{ textDecoration: 'none' }}>Customer Product <br /> Allocation </Link></Typography>    
                </ListItemText>
            </ListItem>
           </List>      
        <Divider />
        <List>
            <ListItem >
                <ListItemText>
                <Link to = "/Admin" style={{ textDecoration: 'none' }}> <Typography variant='h6' align='center'>Admin</Typography> </Link>
                </ListItemText>
            </ListItem>
           </List>  
      </Drawer>
      {/*..........................................List items list ends...........................................*/}
     
    </div>
  );
}
