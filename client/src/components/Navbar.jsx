import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, IconButton, AppBar, Toolbar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/userSlice';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttons: {
    margin: "1em",
    textDecoration: "none",
    color: "inherit",
  }
}));


export default (props) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.user.authenticated);
  const user = useSelector((state) => state.user);

  function clickLogout() {
    dispatch(logout())
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <Link to="/">
            <img
              alt=""
              src={Logo}
              height="50"
              className="d-inline-block align-top"
              style={{ margin: "-10%" }}
            />
          </Link> */}
          <Link to="/" className={classes.buttons}>
            <IconButton  className={classes.logo} color="inherit" >
              KREATOPIA
            </IconButton>
          </Link>
          <Typography  variant="h6" className={classes.title}>
          </Typography>
          <div>
            <Link to="/shop" className={classes.buttons}>
              <Button className={classes.buttons} color="inherit" >Merch</Button>
            </Link>
            <Link to="/comic" className={classes.buttons}>
              <Button className={classes.buttons} color="inherit" >Comics</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

