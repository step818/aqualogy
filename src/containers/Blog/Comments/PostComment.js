import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../../store/actions/blogActions';

class PostComment extends Component {
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Comment:" + this.props);
    this.props.createComment(this.state);
  }

  render() {
    
    const { auth } = this.props;
// Protect routes from unauthorized users
    // if (!auth.uid) {
    //   return( <Redirect to={"/"} /> );
    // }
    
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Comment</h5>
          <div className="input-field">
            <label htmlFor="title">Comment Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Comment Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Post Comment</button>
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
    createComment: (blog) => dispatch(createComment(blog))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComment);