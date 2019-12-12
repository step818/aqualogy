/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import firebase from '../../../Firebase';
import classes from './NavigationItems.module.css';
import { AuthContext } from '../../../Auth';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const navigationItems = () => {
  let loginStatus = null;
  const {currentUser} = useContext(AuthContext);

  if (currentUser) {
    console.log("user logged in - NavItems");
    loginStatus = <div>
                    <Button variant="warning" onClick={() => firebase.auth().signOut()}>Log Out</Button>
                  </div>
  } else {
    loginStatus = <div>
                    <NavigationItem link="/login">Login</NavigationItem>
                  </div>
  }

  return(
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>Home</NavigationItem>
    <NavigationItem link="/blog">Blog</NavigationItem>
    <NavigationItem link="/book">Contact</NavigationItem>
    <NavigationItem link="/about">About Me</NavigationItem>
    <NavigationItem link="/forum">Forum</NavigationItem>
    <NavigationItem link="/signup">Signup</NavigationItem>
    {loginStatus}
  </ul>
  )};

export default withRouter(navigationItems);