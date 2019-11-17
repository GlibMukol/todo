import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {  Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    fontSize: '1.25rem',
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
    textDecoration: 'none',
    color: '#f0f2f9'
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link className={classes.link} to="/">
                ToDo
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link className={classes.link} color="inherit" to="/login">
                Login
              </Link>
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
