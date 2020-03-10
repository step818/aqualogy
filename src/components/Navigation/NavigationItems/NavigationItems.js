/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { connect } from 'react-redux';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => {
  const { auth } = props;
  //  When a non-user clicks 'Schedule or 'Forum, pop up alerts them to sign up
  let errorMessage = <div><p>You must sign in to do that.</p></div>

  return(
  <ul className={classes.NavigationItems}>
    <li><NavigationItem link="/" exact>Home</NavigationItem></li>
    <li><NavigationItem link="/about">About Me</NavigationItem></li>
    <li><NavigationItem link="/blog">Blog</NavigationItem></li>
    <li><NavigationItem link="/book">Schedule Sessions</NavigationItem></li>
    <li><NavigationItem link="/forum">Forum</NavigationItem></li>
  </ul>
  )};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(navigationItems);