import React from "react";
import Navbar from '../components/Navbar.jsx';
import {
  Button,
  Typography,
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
      <Navbar />
      <div className="rowC">
        <img alt=".." src="./images/creativity.jpg" /> <SignIn />
      </div>
      <Typography color="secondary" variant="h1">
        KREATOPIA
      </Typography>
      {/* <Button onClick={() => props.history.push("/test")}>
        Go to test page
      </Button> */}
      <section className="features">
      <div className="row2">
        <div className="card1">
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4a%2Fab%2Ffb%2F4aabfbd75d812a2fa3ea1d5c758ca0a0.jpg&f=1&nofb=1"
          title="Craft"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Art and Craft
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Love spending time painting and making amazing homemade decors? Here's what you can do
            with them now.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    <div className="card2">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.darkirisdesign.co.uk%2Fwp-content%2Fuploads%2F2012%2F04%2FFreelance-graphic-designer-Meadway-Promotional-Products.jpg&f=1&nofb=1"
          title="Merchandise"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Merchandise
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Are you a creator/youtuber looking for platform to sell your merchandise? We have got your back.
            Design/Sell on one single platform.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    <div className="card3">
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic2.minitokyo.net%2Fview%2F17%2F28%2F446417.jpg&f=1&nofb=1"
          title="Comics"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Comics
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Collection of 1000+ webcomics on different genres. Read, share and upload your own comics all on one platform.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>
      </section>
      <Footer/>
    </div>
  );
};
