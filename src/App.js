import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//Components
import Login from './components/login/login'

import logo from './logo.svg';
import './App.css';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#E5E5E5',
  },
});


const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Exmaple Widgets</h1>
      <Grid container>
        <Grid item xs={3}>
          <Login /> 
        </Grid>
      </Grid>
       
    </div>
  );
}

export default App;
