import React, { Component } from 'react';
import firebase from '../../Firebase';
import { Button } from 'react-bootstrap';

class NewPost extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('posts');
    this.state = {
      title: "",
      post: ""
    };
  }
  
  

  updateInput = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  postBlog = (e) => {
    e.preventDefault();
    const { title, post } = this.state;
    this.ref.add({
      title,
      post
    }).then((docRef) => {
      this.setState({
        title:'',
        post:''
      });
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { title, post } = this.state;
    return(
      <div>
        <h2>Create New Post</h2>
        <form onSubmit={this.postBlog}>
          
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.updateInput}
            value={title}
          />
          <textarea
            type="text"
            name="post"
            placeholder="What're ya thinking?"
            onChange={this.updateInput}
            value={post}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

export default NewPost;