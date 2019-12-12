import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Blog from '../Blog/Blog';
// Temporarily add NewPost to home for testing purposes
import NewPost from '../Blog/NewPost';

class Home extends Component {

  render () {
    
    return(
      <div>
        <div class="jumbotron">
          <h1>Aqualogy</h1>
        </div>
        <p>This is the home page!</p>
        <Blog/>
        <Link to="/adminLogin">Admin</Link>
      </div>
    );
  }
}

export default Home;