import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBlog } from '../../store/actions/blogActions';
import { Redirect } from 'react-router-dom';

class NewPost extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props);
    this.props.createBlog(this.state);
    this.props.history.push('/');
  }

  render() {
    const { auth } = this.props;
// Protect routes from unauthorized users
    if (!auth.uid) {
      return( <Redirect to={"/"} /> );
    }
    
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Post</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Blog Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Post</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBlog: (blog) => dispatch(createBlog(blog))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);