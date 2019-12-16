/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItems.module.css';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions';

const LoggedInLinks = (props) => {
  const { auth } = props;

  const admin = auth.uid ===  "o8eSpCc12XOWv0lICKwqj454tz33" ? 
  <NavigationItem link="/newpost">New Post</NavigationItem> : null
  
  return(
  <ul className={classes.NavigationItems}>
    {auth.isLoaded && admin}
    <NavLink to="/" onClick={props.signOut}>Log Out</NavLink>
    <li><NavLink to="/" className='btn btn-floating pink lighten-1'>ST</NavLink></li>
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