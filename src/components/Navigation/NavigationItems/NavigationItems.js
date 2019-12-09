import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import firebase from '../../../Firebase';

const navigationItems = (props) => {
  // let loginStatus = this.props.isLoggedIn ? <NavigationItem onClick={() => firebase.auth().signOut()}>Logout</NavigationItem> : <NavigationItem link="/login">Login/Signup</NavigationItem>

  return(
  <ul>
    <NavigationItem link="/" exact>Home</NavigationItem>
    {/* {loginStatus} */}
  </ul>
  )};

export default navigationItems;