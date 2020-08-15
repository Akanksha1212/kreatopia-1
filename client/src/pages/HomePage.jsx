import React from "react";
import {
  Button,
  Typography,
  IconButton,
  AppBar,
  Toolbar,
  makeStyles,
} from "@material-ui/core";
import SignIn from "../components/signIn";
import Footer from "../components/footer";
import "./style.scss";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default (props) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>

          <Typography variant="h4">KREATOPIA</Typography>
          <div className="shopButton">
            <Button onClick={() => props.history.push("/shop")}>
              <Typography variant="h6">SHOP</Typography>
            </Button>
          </div>
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
      <section className="features">
      <div className="row2">
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
      </section>
      <Footer/>
    </div>
  );
};
