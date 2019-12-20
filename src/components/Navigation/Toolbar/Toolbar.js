import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';
import LoggedInLinks from '../NavigationItems/LoggedInLinks';
import LoggedOutLinks from '../NavigationItems/LoggedOutLinks';
import { connect } from 'react-redux';

const toolbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <LoggedInLinks profile={profile} /> : <LoggedOutLinks />
  return (
    <header className={classes.Toolbar}>
      <nav className={classes.DesktopOnly}>
        <div className="row right">
          <NavigationItems/>
          {auth.isLoaded && links}
        </div>
      </nav>
    </header>
  )
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(toolbar);