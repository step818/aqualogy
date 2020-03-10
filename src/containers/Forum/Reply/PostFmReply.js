import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createForumReply } from '../../../store/actions/forumActions';
import { Redirect } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

class PostFmReply extends Component {

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reply:" + this.props);
    this.props.createForumReply(this.state);
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
          <h5 className="grey-text text-darken-3">Create New Forum Reply Post</h5>
          <div className="input-field">
            <label htmlFor="title">Reply Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Forum Reply Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Post Reply</button>
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
    createForumReply: (forum) => dispatch(createForumReply(forum))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFmReply);