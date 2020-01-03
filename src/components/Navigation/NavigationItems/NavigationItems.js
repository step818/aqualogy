/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = () => {

  return(
  <ul className={classes.NavigationItems}>
    <li><NavigationItem link="/" exact>Home</NavigationItem></li>
    <li><NavigationItem link="/blog">Blog</NavigationItem></li>
    <li><NavigationItem link="/book">Schedule Sessions</NavigationItem></li>
    <li><NavigationItem link="/about">About Me</NavigationItem></li>
    <li><NavigationItem link="/forum">Forum</NavigationItem></li>
  </ul>
  )};

export default navigationItems;