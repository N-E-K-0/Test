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
  coloredButton:{
    backgroundColor:'#5F2EEA',
    padding:'10px 20px',
    borderRadius:'16px',
    color:'#FFFFFF'
  },
  transparentButton:{
    backgroundColor:'#FFFFFF',
    padding:'10px 20px',
    borderRadius:'16px',
    color:'#5F2EEA',
    border: '1px solid #5F2EEA '
  }
}));

const Button = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <button className={classes.coloredButton}>Sign Up</button>
        <button className={classes.transparentButton}>Log In</button>
      </CardContent>
    </Card>
  );
}

export default Button