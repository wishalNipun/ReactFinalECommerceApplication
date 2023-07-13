import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardContent } from '@mui/material';

export const CardComponet = () => {
  return (
    <Card
    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
  >
    <CardMedia
      component="div"
      sx={{
        // 16:9
        pt: '56.25%',
      }}
      image="https://source.unsplash.com/random?wallpapers"
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="h2">
        Heading
      </Typography>
      <Typography>
        This is a media card. You can use this section to describe the
        content.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">View</Button>
      <Button size="small">Edit</Button>
    </CardActions>
  </Card>
  )
}

