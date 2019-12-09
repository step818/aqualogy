import React, { Component } from 'react';
import NewPost from '../Blog/NewPost';

class AdminOnly extends Component {

  render() {
    return(
      <div>
        <NewPost/>
      </div>
    );
  }
}

export default AdminOnly;