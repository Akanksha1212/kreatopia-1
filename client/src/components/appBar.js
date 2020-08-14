import React from 'react';
import { Button, Typography, IconButton, AppBar,Toolbar } from '@material-ui/core';


export default (props) => {
  return (
    <div>
      <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu">
     
    </IconButton>
    <Typography variant="h6" >
      KREATOPIA
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
</div>
  );
};

