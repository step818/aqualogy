/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';


const LoggedOutLinks = () => {
  
  return(
  <ul className={classes.NavigationItems}>
    <li><NavigationItem link="/login">Login</NavigationItem></li>
    <li><NavigationItem link="/signup">Signup</NavigationItem></li>
  </ul>
  )};

export default LoggedOutLinks;