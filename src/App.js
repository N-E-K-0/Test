import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//Components
import Login from './components/login/login'
import Sale from './components/sale/sale'
import List from './components/mailingList/mailingList'
import Button from './components/button/button'
import Card from './components/card/card'
import Search from './components/search/search'
import Avatar from './components/avatar/avatar'

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
        <Grid item xs={5}>
          <Sale /> 
        </Grid>
        <Grid item xs={5}>
          <List /> 
        </Grid>
        <Grid item xs={5}>
          <Button /> 
        </Grid>
        <Grid item xs={5}>
          <Card /> 
        </Grid>
        <Grid item xs={5}>
          <Search /> 
        </Grid>
        <Grid item xs={5}>
          <Avatar /> 
        </Grid>
      </Grid>
       
    </div>
  );
}

export default App;
