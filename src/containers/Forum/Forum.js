import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import classes from './Forum.module.css';

import PostForum from './PostForum';
import ForumList from './ForumList';
import { Jumbotron } from 'react-bootstrap';

import jumboBG from '../../assets/img/jumboBG.jpg';

class Forum extends Component {

  render () {
    const { forums } = this.props;
    const { auth } = this.props;

    if (!auth.uid) {
      return (
        <div style={{ height: '1000px'}}>
          <Jumbotron style={{ backgroundImage: `url(${jumboBG}`, backgroundSize: 'cover', fontFamily: 'Courgette', color: 'lavender' }}>
            <h1 className={classes.Header}>Forums</h1>
          </Jumbotron>
          <h1 className={classes.sorry}>Sorry, but you must sign in to do that.</h1>
        </div>
      )
    }

    return(
      <div>
        <Jumbotron style={{ backgroundImage: `url(${jumboBG}`, backgroundSize: 'cover', fontFamily: 'Courgette', color: 'lavender' }}>
          <h1 className={classes.Header}>Forums</h1>
        </Jumbotron>
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <PostForum />
              <ForumList forums={forums}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    forums: state.firestore.ordered.forums,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'forums', orderBy: ['createdAt', 'desc'] }
  ])
)(Forum);