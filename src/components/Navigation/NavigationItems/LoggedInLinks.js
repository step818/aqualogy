/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItems.module.css';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions';

const LoggedInLinks = (props) => {
  const { auth } = props;
  // const { month } = props;

  const admin = auth.uid ===  "F0coC7iTj6Qo0ZX3pqt8npR5oTS2" ? <div>
  <li><NavigationItem link="/newpost">New Post</NavigationItem></li>
  <li><NavigationItem link="/notifications">Notifications</NavigationItem></li></div> : null

  let sign = null;
  if (props.profile.month == "02") {
    sign = "Aquarius";
  }

  return(
  <ul className={classes.NavigationItems}>
    {auth.isLoaded && admin}
    <li><NavLink to="/" onClick={props.signOut}>Log Out</NavLink></li>
    <li><NavLink to="/" className='btn btn-floating purple lighten-1'>{sign}</NavLink></li>
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