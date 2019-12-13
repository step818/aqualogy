import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';
import LoggedInLinks from '../NavigationItems/LoggedInLinks';
import LoggedOutLinks from '../NavigationItems/LoggedOutLinks';


const toolbar = () => (
  <header className={classes.Toolbar}>
    <nav className={classes.DesktopOnly}>
      <div className="row right">
        <NavigationItems/>
        <LoggedOutLinks />
        <LoggedInLinks />
      </div>
    </nav>
  </header>
  
);

export default toolbar;