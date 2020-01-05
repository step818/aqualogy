import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBlog } from '../../store/actions/blogActions';
import { uploadImage } from '../../store/actions/imageActions';
import { Redirect } from 'react-router-dom';

import FileUploader from "react-firebase-file-uploader";
import PreviewPicture from './PreviewPicture';

class NewPost extends Component {
  // constructor(state) {
  //   super(state);
  //   this.state = {
  //     picture: null,
  //     pictureUrl: null,
  //     title: '',
  //     content: ''
  //   }
  // }

  handleImageSelect = (e) => {
      let reader = new FileReader();
      let file = e.target.files[0];
      reader.onloadend = () => {
        this.setState({
          picture: file,
          pictureUrl: reader.result
        });
      };
      reader.readAsDataURL(file);
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // if(this.state.files[0]) {
    //   const image = e.target.files[0];
    // if(this.state.files[0]) {
    //   this.handleUpload(this.state.files[0]);
    // }   
    // }
    this.props.createBlog(this.state);
    this.props.history.push('/');
  }

  handleUpload = (blogImage) => {
    this.props.uploadImage(blogImage);
    
  }

  render() {
    const { auth, input } = this.props;
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
            <input type="text" id="title" onChange={this.handleChange} required={true} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Blog Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange} required={true} />
          </div>
          <div className="form-group-row">
            <label htmlFor="files" className="col-form-label">Upload an image for the header</label>
            <div className="col-sm-9">
              <input className="form-control" type="file" id="files" onChange={this.handleChange} required={true} {...input} />
            </div>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Post</button>
          </div>
        </form>
        {/* <PreviewPicture pictureUrl={this.state.pictureUrl} /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBlog: (blog) => dispatch(createBlog(blog)),
    uploadImage: (blogImage) => dispatch(uploadImage(blogImage)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);