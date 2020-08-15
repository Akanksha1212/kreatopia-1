import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  LinearProgress,
  Container,
  Card,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';
import ForwardIcon from '@material-ui/icons/Forward';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { Link } from 'react-router-dom';
import appAxios from '../config/appAxios';

const useStyles = makeStyles({
  root: {
    padding: "1.5em",
    minHeight: "30vh",
    marginBottom: "3em"
  },
});

export default (props) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [comicData, setComicData] = useState({});
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    // Fetch all chapters data of this comic
    appAxios({
      method: 'GET',
      url: `/chapter/${props.match.params.ComicId}`,
    }).then((res) => {
      setComicData(res.data.comic)
      setChapters(res.data.chapters)
      console.log('Comic data:', res.data)
      setIsLoading(false)  
    }).catch((err) => {
      console.log('Error', err)
    })
  }, []);

  if (isLoading) {
    return <LinearProgress />;
  }

  return (
    <div style={{minHeight: "100vh"}}>
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
      <div style={{height: "70vh"}}>
        <div style={{
          backgroundImage: `url(${comicData.thumbnail})`,
          backgroundSize: "cover",
          height: "100%",
          width: "100%",
        }}>
        </div>
      </div>
      <Container maxWidth="md">
        <Card className={classes.root} raised={true}>
        <Typography variant="h4">{comicData.title}</Typography>
        <Typography variant="subtitle1" paragraph={true}>Author: {comicData.User.username}</Typography>
        <Typography variant="subtitle2" paragraph={true} style={{ paddingLeft:"5rem", paddingRight:"5rem"}}>{comicData.description}</Typography>
        <div>
          <ShareIcon fontSize="large" />
          <FavoriteBorderIcon fontSize="large" />
          <NotificationsNoneIcon fontSize="large" />
        </div>
        </Card>
        <Card raised={true} style={{ marginBottom:"5em" }}>
          <List component="nav" aria-label="secondary mailbox folders">
            {chapters.map(each => (
            <Link
              to={{
                pathname: `/comic/${comicData.id}/${each.id}`, 
                link: `${each.image_url}`
              }}
              // to={`/comic/${comicData.id}/${each.id}`}
              key={each.id}
              style={{ color: "inherit", textDecoration: "inherit" }}>
              <ListItem button style={{ marginBottom:"0.5rem" }}>
                <ListItemIcon>
                  <ForwardIcon />
                </ListItemIcon>
                <ListItemText primary={`Chapter ${each.id}: ${each.title}`} />
              </ListItem>
            </Link>
            ))}
          </List>
        </Card>
        
      </Container>
      
    </div>
  );
};
