import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createForum } from '../../store/actions/forumActions';
import { Redirect } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

class PostForum extends Component {
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
    this.props.createForum(this.state);
    // window.location.reload()
    // const { router } = this.props;    
    // this.props.history.push('/');
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
          <h5 className="grey-text text-darken-3">Create New Forum Post</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Forum Content</label>
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
    createForum: (forum) => dispatch(createForum(forum))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForum);