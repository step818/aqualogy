import React, { Component } from 'react';
import Post from '../../components/Post/Post';

class Blog extends Component {
  state={
    posts: []
  }

  postSelectedHandler = (id) => {
    this.props.history.push({pathname: '/posts/' + id});
  }

  render() {
    let posts = this.state.posts.map(post => (
      <Post
        key={post.id}
        // picture={post.picture}
        title={post.title}
        snippet={post.snippet}
        date={post.date}
        timeToRead={post.timeToRead} 
        clicked={() => this.postSelectedHandler(post.id)} />
    ))
    return(
      <div>
        hi
        {posts}
      </div>
    );
  }
}


export default Blog;