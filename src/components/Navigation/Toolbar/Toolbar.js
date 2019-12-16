import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';
import LoggedInLinks from '../NavigationItems/LoggedInLinks';
import LoggedOutLinks from '../NavigationItems/LoggedOutLinks';
import { connect } from 'react-redux';

const toolbar = (props) => {
  const { auth } = props;
  const links = auth.uid ? <LoggedInLinks /> : <LoggedOutLinks />
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
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(toolbar);