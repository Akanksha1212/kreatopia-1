import React, { useState } from 'react';
import {
  Button,
  Typography,
  IconButton,
  AppBar,
  Toolbar,
} from "@material-ui/core";

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Store from "../components/store";
import "./style.scss";
import FooterPage from '../components/footer';

export default (props) => {
    const [openPanel, setOpenPanel] = useState(false);
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6">KREATOPIA</Typography>
          <div className="cartIcon">
          <div onClick={() => setOpenPanel(true)}><ShoppingCartIcon/></div>
          </div>
        </Toolbar>
      </AppBar>
      <Store/>
      <FooterPage/>
    </div>
  );
};
