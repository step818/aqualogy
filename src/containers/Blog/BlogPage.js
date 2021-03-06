import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import classes from './BlogPage.module.css';

import BlogList from './BlogList';
import { Jumbotron } from 'react-bootstrap';

import jumboBG from '../../assets/img/jumboBG.jpg';

class BlogPage extends Component {

  render () {
    const { blogs } = this.props;

    return(
      <div className={classes.layout}>
        <Jumbotron style={{ backgroundImage: `url(${jumboBG}`, backgroundSize: 'cover', fontFamily: 'Courgette', color: 'lavender' }}>
          <h1 className={classes.Header}>Blogs</h1>
        </Jumbotron>
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <BlogList blogs={blogs}/>
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
    blogs: state.firestore.ordered.blogs
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'blogs', orderBy: ['createdAt', 'desc'] }
  ])
)(BlogPage);