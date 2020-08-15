import React from 'react';
import { Card, CircularProgress } from '@material-ui/core';
import ResultCard from './ResultCard.jsx';

export default ({ posts, isLoading }) => {
  if (isLoading) {
    return <CircularProgress></CircularProgress>;
  }

  return (
    <div style={{display: "flex", flexWrap:"wrap", justifyContent: "center"
  }}>
      {posts.map(post => (
        <Card key={post.id} 
          style={{
            width: "30%",
            minWidth: "200px",
            margin: "1%",
            padding: "0.5%",
            display: "flex",
            flexDirection: "column",
          }}>
          <ResultCard post={post}/>
        </Card>
      ))}
    </div>
  );
};
