import React from 'react';
import { Button, Typography } from '@material-ui/core';

export default (props) => {
  return (
    <div>
      <Typography color="secondary" variant="h1">
        KREATOPIA
      </Typography>
      <Button onClick={() => props.history.push('/test')}>
        Go to test page
      </Button>
    </div>
  );
};
