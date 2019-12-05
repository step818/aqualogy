import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul>
    <NavigationItem link="/" exact>Home</NavigationItem>
    <NavigationItem link="/login">Login/Signup</NavigationItem>
  </ul>
);

export default navigationItems;