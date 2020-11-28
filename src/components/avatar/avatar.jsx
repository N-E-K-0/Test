import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Male1 from '../../assets/images/Male1.png'
import Male2 from '../../assets/images/Male2.png'
import Female1 from '../../assets/images/Female1.png'
import Female2 from '../../assets/images/Female2.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extraSmallCircle: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
  smallSquare: {
    width: theme.spacing(3),
    height: theme.spacing(4),
  },
  mediumSquare: {
    width: theme.spacing(4),
    height: theme.spacing(5),
  },
  largeSquare: {
    width: theme.spacing(5.5),
    height: theme.spacing(6),
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Avatar alt="Remy Sharp" src={Female1} className={classes.extraSmallCircle} />
        <Avatar alt="Remy Sharp" src={Male1} className={classes.smallSquare}/>
        <Avatar alt="Remy Sharp" src={Female2} className={classes.mediumSquare} />
        <Avatar alt="Remy Sharp" src={Male2} className={classes.largeSquare} />
      </CardContent>
    </Card>
  );
}
