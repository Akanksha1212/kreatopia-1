import React, { useEffect, useState } from 'react';
import {
  Card,
  Container,
  LinearProgress 
} from '@material-ui/core';
import appAxios from '../config/appAxios';

export default (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    console.log('Reading props:', props)
    if (!props.location.link) {
      console.log('Reaching the server...')
      appAxios({
        method: 'GET',
        url: `/chapter/one/${props.match.params.ComicId}`,
      }).then((res) => {
        console.log('Chapter data:', res.data)
        setImageURL(res.data.image_url)
        setIsLoading(false)  
      }).catch((err) => {
        console.log('Error', err)
      })
    } else {
      setImageURL(props.location.link)
      setIsLoading(false)
    }
  }, []);

  if (isLoading) {
    return <LinearProgress />;
  }

  return (
    <div style={{minHeight: "100vh", backgroundColor: "#000"}}>
      <Container maxWidth="md">
        <Card style={{minHeight: "100vh"}}>
          <img src={imageURL} />
        </Card>
        </Container>
    </div>
  );
};
