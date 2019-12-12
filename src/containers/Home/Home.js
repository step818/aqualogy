import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Blog from '../Blog/Blog';

class Home extends Component {

  render () {
    
    return(
      <div>
        <div className="jumbotron">
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