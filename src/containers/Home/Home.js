import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogList from '../Blog/BlogList';
import Notifications from './Notifications';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Home extends Component {

  render () {
    // console.log(this.props);
    const { blogs, notifications } = this.props;

    return(
      <div>
        <div className="jumbotron">
          <h1>Aqualogy</h1>
        </div>
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <BlogList blogs={blogs}/>
            </div>
            <div className="col s12 m5 offset-m1">
              <Notifications notifications={notifications} />
            </div>
          </div>
        </div>
        <Link to="/adminLogin">Admin</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.firestore.ordered.blogs,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'blogs', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ])
)(Home);