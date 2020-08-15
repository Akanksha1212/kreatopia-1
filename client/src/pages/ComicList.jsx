import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import ResultList from '../components/ResultList.jsx';
import Pagination from '../components/Pagination.jsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Card,
  CardActions,
  CardContent,
} from '@material-ui/core';
import appAxios from '../config/appAxios';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default (props) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    // Fetch all comics
    appAxios({
      method: 'GET',
      url: '/comic',
    }).then((res) => {
      console.log('Comic data:', res)
      setPosts(res.data)
      setIsLoading(res.false)
    }).catch((err) => {
      console.log('Error:', err)
    })
  }, []);

  const bull = <span className={classes.bullet}>•</span>;

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{minHeight: "100vh"}}>
      <Navbar/>
      <Container maxWidth="md">
        <Card raised={true} style={{padding: "3em"}}>
        <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Creator of the Week
        </Typography>
        <Typography variant="h5" component="h2">
          Joko Anwar
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Filmmaker
        </Typography>
        <Typography variant="body2" component="p">
          Director of "Gundala" and "Satan Slaves"
          <br/>
          Check out our weekly blog posts!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card> 
          <Typography variant="h4" style={{padding: "1em"}}>Latest Updates</Typography>
          <ResultList isLoading={isLoading} posts={currentPosts}/>
          <Pagination totalPost={posts.length} postsPerPage={postsPerPage} paginate={paginate} />
        </Card>
      </Container>
    </div>
  );
};
