import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBlog } from '../../store/actions/blogActions';
import { uploadImage, getData } from '../../store/actions/imageActions';
import { Redirect } from 'react-router-dom';

import FileUploader from "react-firebase-file-uploader";
import PreviewPicture from './PreviewPicture';

class NewPost extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      percent: 0,
      showProgress: null,
      image: null,
      title: '',
      content: ''
    }
  }

  //create ref
  fileInputRef = React.createRef();


  fileChange = (e) => {
      e.preventDefault();
      this.setState({ file: e.target.files[0]})
      let imageFile = e.target.files[0];

      if (imageFile) {
        const localImageUrl = URL.createObjectURL(imageFile);
        const imageObject = new window.Image();
        imageObject.onload = () => {
          imageFile.width = imageObject.naturalWidth;
          imageFile.height = imageObject.naturalHeight;
          URL.revokeObjectURL(imageFile);
        };
        imageObject.src = localImageUrl;
      }
    };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.showProgress !== prevState.showProgress) {
      return { showProgress: nextProps.showProgress };
    }
    if (nextProps.image !== prevState.image) {
      return { image: nextProps.image };
    }
    if (nextProps.percent !== prevState.percent) {
      return { percent: nextProps.percent };
    }
    if (nextProps.error !== prevState.error) {
      return { error: nextProps.error };
    } else {
      return null;
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  componentDidMount() {
    this.props.getData();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.file === null) {
      alert("No image selected!");
      return;
    }   
    //check if the image size is larger than 1MB
    if(this.state.file.size > 1048576) {
      alert("Image size must be less than 1MB!");
      return;
    }
    // check it the file is an image
    if(
      this.state.file.type === "image/jpeg" ||
      this.state.file.type === "image/png" ||
      this.state.file.type === "image/jpg"
    ) {
    this.props.uploadImage(this.state.file);
    } else {
      alert("Please provide a valid image. (JPG, JPEG, PNG)");
    }

    this.props.createBlog(this.state);
  }

  // handleUpload = (blogImage) => {
    // this.props.history.push('/');
  // }

  render() {
    const { image, percent, showProgress } = this.state;
    const { auth, input } = this.props;
// Protect routes from unauthorized users
    if (!auth.uid) {
      return( <Redirect to={"/"} /> );
    }

    if (image) {
      return (
        <div>
          hello
        </div>
      )
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
            <label htmlFor="file" className="col-form-label">Upload an image for the header</label>
            <div className="col-sm-9">
              <input className="form-control" type="file" id="file" ref={this.fileInputRef} onChange={e => this.fileChange(e)} required={true} {...input} />
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
    uploadImage: (blogImage) => dispatch(uploadImage(blogImage)),
    getData: () => dispatch(getData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);