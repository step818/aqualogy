import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';

const toolbar = () => (
  <nav className={classes.Toolbar}>
    <NavigationItems />
  </nav>
);

export default toolbar;