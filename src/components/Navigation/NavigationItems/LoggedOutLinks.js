/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import firebase from '../../../Firebase';
import classes from './NavigationItems.module.css';
import { AuthContext } from '../../../Auth';


const LoggedOutLinks = () => {
  
  return(
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/login">Login</NavigationItem>
    <NavigationItem link="/signup">Signup</NavigationItem>
  </ul>
  )};

export default LoggedOutLinks;