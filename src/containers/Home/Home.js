import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Blog from '../Blog/Blog';
import BlogList from '../Blog/BlogList';
import Notifications from './Notifications';

class Home extends Component {

  render () {
    
    return(
      <div>
        <div className="jumbotron">
          <h1>Aqualogy</h1>
        </div>
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <BlogList/>
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

export default Home;