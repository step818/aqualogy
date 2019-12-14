/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';


const LoggedOutLinks = () => {
  
  return(
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/login">Login</NavigationItem>
    <NavigationItem link="/signup">Signup</NavigationItem>
  </ul>
  )};

export default LoggedOutLinks;