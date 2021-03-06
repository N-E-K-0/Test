import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LeafImage from '../../assets/images/Photos.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '1rem'
  },
  cover: {
    width: 151,
  },
  button:{
    backgroundColor:'#5F2EEA',
    padding:'10px 20px',
    borderRadius:'16px',
    color:'#FFFFFF'
  }
}));

const Sale = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Summer Sale
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            25% Off Now through sunday for all in-store purchases.
          </Typography>
          <button className={classes.button}>Shop Now</button>
        </CardContent>
      <CardMedia
        className={classes.cover}
        image={LeafImage}
        title="Leaf"
      />
    </Card>
  );
}

export default Sale