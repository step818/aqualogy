import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Blog from '../Blog/Blog';
import BlogList from '../Blog/BlogList';
import Notifications from './Notifications';
import { connect } from 'react-redux';

class Home extends Component {

  render () {
    // console.log(this.props);
    const { blogs } = this.props;

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
              <Notifications />
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
    blogs: state.blog.blogs
  }
}

export default connect(mapStateToProps)(Home);