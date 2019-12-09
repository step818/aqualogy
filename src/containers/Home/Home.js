import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Blog from '../Blog/Blog';
import bgPicture from '../../assets/images/homepage.jpeg';
// Temporarily add NewPost to home for testing purposes
import NewPost from '../Blog/NewPost';

class Home extends Component {

  render () {
    
    return(
      <div>
        <p>This is the home page!</p>
        <NewPost/>
        <Blog/>
        <Link to="/admin">Admin</Link>

      </div>
    );
  }
}

export default Home;