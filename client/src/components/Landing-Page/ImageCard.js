import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: "rgba(0,0,0,0.5)",
    margin: '20px',
  },
  media: {
    height: 440,
  },
  title: {
      fontFamily: 'Quicksand',
      fontWeight: 'bold',
      fontSize: '30px',
      color: '#fff',
  },
  titleInfo: {
      color: '#fff',
      fontFamily: 'Quicksand',
      fontSize: '18px',
  },
});

export default function ImageCard({ place }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          height="140"
          image={place.imageUrl}
          title="Our Destinations"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" 
          component="h1" 
          className={classes.title}>
            {place.title}
          </Typography>
          <Typography variant="body2" 
          color="textSecondary" 
          component="p"
          className={classes.titleInfo}>
            {place.description}
          </Typography>
        </CardContent>
      </CardActionArea>
     <CardActions>

        <Button size="large" color="secondary" href="#">
         See Buying Options
        </Button>
      </CardActions>
    </Card>
  );
}