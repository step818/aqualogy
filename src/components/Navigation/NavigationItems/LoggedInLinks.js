/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItems.module.css';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions';

const LoggedInLinks = (props) => {
  const { auth } = props;
  const { profile } = props;

  const admin = auth.uid ===  "GqA8GX2euyRm5MRS76VUrgUVrQF2" ? <div>
  <li><NavigationItem link="/newpost">Create Post</NavigationItem></li>
  <li><NavigationItem link="/notifications">Notifications</NavigationItem></li></div> : null


  return(
  <ul className={classes.NavigationItems}>
    {auth.isLoaded && admin}
    <li><NavLink to="/" onClick={props.signOut}>Log Out</NavLink></li>
    <li><NavLink to="/" className='waves-effect waves-light btn-small purple darken-1'><i className="material-icons left">star</i>{profile.displayName}</NavLink></li>
  </ul>
  )};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInLinks);