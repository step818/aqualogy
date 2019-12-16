/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = () => {

  return(
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>Home</NavigationItem>
    <NavigationItem link="/blog">Blog</NavigationItem>
    <NavigationItem link="/book">Contact</NavigationItem>
    <NavigationItem link="/about">About Me</NavigationItem>
    <NavigationItem link="/forum">Forum</NavigationItem>
  </ul>
  )};

export default navigationItems;