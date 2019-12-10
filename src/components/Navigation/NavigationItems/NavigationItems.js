/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import firebase from '../../../Firebase';
import classes from './NavigationItems.module.css';
import { AuthContext } from '../../../Auth';
import { withRouter } from 'react-router-dom';

const navigationItems = () => {
  // let loginStatus =  ? <NavigationItem onClick={() => firebase.auth().signOut()}>Logout</NavigationItem> : <NavigationItem link="/login">Login/Signup</NavigationItem>
  let loginStatus = null;
  const {currentUser} = useContext(AuthContext);

  if (currentUser) {
    loginStatus = <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
  }

  return(
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>Home</NavigationItem>
    <NavigationItem link="/login">Login</NavigationItem>
    <NavigationItem link="/signup">Signup</NavigationItem>
    {loginStatus}
  </ul>
  )};

export default withRouter(navigationItems);