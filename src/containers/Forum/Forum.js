import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import PostForum from './PostForum';
import ForumList from './ForumList';
import { Jumbotron } from 'react-bootstrap';

import jumboBG from '../../assets/img/jumboBG.jpg';

class Forum extends Component {

  render () {
    const { forums } = this.props;

    return(
      <div>
        <Jumbotron style={{ backgroundImage: `url(${jumboBG}`, backgroundSize: 'cover', fontFamily: 'Courgette', color: 'lavender' }}>
          <h1>Forums</h1>
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
  return {
    forums: state.firestore.ordered.forums
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'forums', orderBy: ['createdAt', 'desc'] }
  ])
)(Forum);