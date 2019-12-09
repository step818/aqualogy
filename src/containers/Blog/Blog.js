import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import firebase from '../../Firebase';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('posts');
    this.unsubscribe = null;
    this.state = {
      posts: []
    };
  }

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
        hi
        {posts}
      </div>
    );
  }
}


export default Blog;