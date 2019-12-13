/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import { NavLink } from 'react-router-dom';

import firebase from '../../../Firebase';
import classes from './NavigationItems.module.css';
import { AuthContext } from '../../../Auth';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const LoggedInLinks = () => {

  return(
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">Log Out</NavigationItem>
    <NavigationItem link="/newpost">New Post</NavigationItem>
    <li><NavLink to="/" className='btn btn-floating pink lighten-1'>ST</NavLink></li>
  </ul>
  )};

export default LoggedInLinks;