import React, { Component } from 'react';
import firebase from '../../firestore';
import { Button } from 'react-bootstrap';

class NewPost extends Component {
  state = {
      title: "",
      post: ""
    }
  

  updateInput = e => {
    this.setState({
      [e.target.value]: e.target.value
    });
  }

  postBlog = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection("posts").add({
      title: this.state.title,
      post: this.state.post
    });
    this.setState({
      title: "",
      post: ""
    });
  }

  render() {
    return(
      <form onSubmit={this.postBlog}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={this.updateInput}
          value={this.state.title}
        />
        <textarea
          type="text"
          name="post"
          placeholder="What're ya thinking?"
          onChange={this.updateInput}
          value={this.state.post}
        />
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default NewPost;