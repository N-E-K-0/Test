import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Email from '../../assets/icons/Email.png';
import Close from '../../assets/icons/Close.png';
import Arrow from '../../assets/icons/Forward Arrow.png';


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
  },
  email:{
    backgroundColor: '#E5E5E5',
  },
}));

const MailingList = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <img src={Close} alt="close" />
          <Typography component="h5" variant="h5">
            Join our mailing list
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Receive 15% off your order at checkout and save today!
          </Typography>
          <Grid item xs={12} className={classes.email}>
          <img src={Email} alt="email" />
          <TextField id="input-with-icon-grid" label="Email" />
          <button className={classes.button}><img src={Arrow} alt="arrow" /></button>
        </Grid>
        </CardContent>
    </Card>
  );
}

export default MailingList