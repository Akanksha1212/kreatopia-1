import React, { useState } from 'react';

import {
  Typography,
  IconButton,
  AppBar,
  Toolbar,
} from "@material-ui/core";

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Store from "../components/store";
import Navbar from "../components/Navbar";
import "./style.scss";
import FooterPage from '../components/footer';

export default (props) => {
  const [openPanel, setOpenPanel] = useState(false);

  return (
    <div style={{minHeight: "100vh"}}>
      <Navbar/>
      {/* <AppBar position="static">
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
      </AppBar> */}
      <Store/>
      <FooterPage/>
    </div>
  );
};
