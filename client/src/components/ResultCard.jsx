import React from 'react';
import { Link } from 'react-router-dom';
import { CardActionArea , Typography } from '@material-ui/core';

export default ({ post }) => {

  return (
    <div>
      <Link to={`/comic/${post.id}`} style={{ color: "inherit", textDecoration: "inherit" }}>
        <div>
        <CardActionArea >
          <img src={post.thumbnail} style={{ margin: "0.5rem", width: "12rem", height: "12rem" }}/>
          <div style={{ display: "block"}}>
            <Typography variant="h5" component="h2">• {post.title}</Typography>
            <Typography color="textSecondary">{post.User.username}</Typography>
          </div>
        </CardActionArea>
        </div>
      </Link>
    </div>
  );
};
