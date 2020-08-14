import React from "react";
import {
  Button,
  Typography,
  IconButton,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import SignIn from "../components/signIn";

import "./style.scss";

export default (props) => {
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
        </Toolbar>
      </AppBar>
      <div className="rowC">
        <img alt=".." src="./images/creativity.jpg" /> <SignIn />
      </div>
      <Typography color="secondary" variant="h1">
        KREATOPIA
      </Typography>
      <Button onClick={() => props.history.push("/test")}>
        Go to test page
      </Button>
    </div>
  );
};
