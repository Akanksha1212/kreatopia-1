import React from "react";
import Navbar from '../components/Navbar.jsx';
import {
  Button,
  Typography,
  IconButton,
  AppBar,
  Toolbar,
  makeStyles,
} from "@material-ui/core";
import SignIn from "../components/signIn";
import "./style.scss";


export default (props) => {
  return (
    <div>
      <Navbar />
      <div className="rowC">
        <img alt=".." src="./images/creativity.jpg" /> <SignIn />
      </div>
      <Typography color="secondary" variant="h1">
        KREATOPIA
      </Typography>
      <Button onClick={() => props.history.push("/test")}>
        Go to test page
      </Button>
      <Button onClick={() => props.history.push("/shop")}>
        Shop
      </Button>
  
    </div>
  );
};
