import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Email from '../../assets/icons/Email.png';
import Eye from '../../assets/icons/Eye.png';
import Close from '../../assets/icons/Close.png';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#FFFFFF',
  },
  email:{
    backgroundColor: '#E5E5E5',
  },
  button:{
    backgroundColor:'#5F2EEA',
    padding:'10px 20px',
    borderRadius:'16px',
    color:'#FFFFFF'
  }
});


const Login = () => {
  const classes = useStyles();
  return(
    <div>
      <Grid container spacing={1} alignItems="flex-end" className={classes.root}>
        <Grid item item xs={12}>
          <h3>Login</h3>
        </Grid>
        <Grid item xs={12} className={classes.email}>
          <img src={Email} alt="email" />
          <TextField id="input-with-icon-grid" label="Email" />
        </Grid>
        <Grid item xs={12}>
          <img src={Eye} alt="eye" />
          <TextField id="input-with-icon-grid" label="Password" />
          <img src={Close} alt="close" />
        </Grid>
        <Grid item xs={12}>
          <button className={classes.button}>Login</button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Login