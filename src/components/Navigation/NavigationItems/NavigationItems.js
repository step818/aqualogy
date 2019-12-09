import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import firebase from '../../../Firebase';

const navigationItems = () => {
  // let loginStatus =  ? <NavigationItem onClick={() => firebase.auth().signOut()}>Logout</NavigationItem> : <NavigationItem link="/login">Login/Signup</NavigationItem>

  return(
  <ul>
    <NavigationItem link="/" exact>Home</NavigationItem>
    <NavigationItem link="/login">Login</NavigationItem>
    <NavigationItem link="/signup">Signup</NavigationItem>
    <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
  </ul>
  )};

export default navigationItems;