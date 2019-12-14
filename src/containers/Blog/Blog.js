import React, { Component } from 'react';
import Post from '../../components/Post/Post';

class Blog extends Component {

  onPostsUpdate = (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      const { title, post } = doc.data();
      posts.push({
        key: doc.id,
        doc,
        title,
        post
      });
    });
    this.setState({
      posts
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onPostsUpdate);
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
        />
    ))
    return(
      <div>
        {posts}
      </div>
    );
  }
}


export default Blog;