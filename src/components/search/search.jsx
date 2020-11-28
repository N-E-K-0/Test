import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ConfigureIcon from '../../assets/icons/Configure.png'
import SearchIcon from '../../assets/icons/Search.png'

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

const Search = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <input className={classes.transparentButton} placeholder="Ca">
          {/* <img src={SearchIcon} alt="search icon" /> */}
        </input>
        <button className={classes.transparentButton}><img src={ConfigureIcon} alt="configure icon" /></button>
      </CardContent>
    </Card>
  );
}

export default Search