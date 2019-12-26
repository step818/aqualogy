/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItems.module.css';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions';

const LoggedInLinks = (props) => {
  const { auth } = props;

  const admin = auth.uid ===  "F0coC7iTj6Qo0ZX3pqt8npR5oTS2" ? 
  <NavigationItem link="/newpost">New Post</NavigationItem> : null
  
  return(
  <ul className={classes.NavigationItems}>
    {auth.isLoaded && admin}
    <NavLink to="/" onClick={props.signOut}>Log Out</NavLink>
  <li><NavLink to="/" className='btn btn-floating purple lighten-1'>{props.profile.initials}</NavLink></li>
  </ul>
  )};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInLinks);