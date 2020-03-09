import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBlog } from '../../store/actions/blogActions';
import { uploadImage, getData } from '../../store/actions/imageActions';
import { Redirect } from 'react-router-dom';
import classes from './NewPost.module.css';

class NewPost extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     error: null,
  //     percent: 0,
  //     showProgress: null,
  //     image: null,
  //     title: '',
  //     content: ''
  //   }
  // }


  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createBlog(this.state);
    this.props.history.push('/');
  }

  render() {
    // const { image, percent, showProgress } = this.state;
    const { auth, input } = this.props;
// Protect routes from unauthorized users
    if (!auth.uid) {
      return( <Redirect to={"/"} /> );
    }
    
    return (
      <div className={classes.formBounds}>
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

          {/*  *******The code for the img upload form input from -'ng-instructables'-           
          <img [src]="imageSrc" style="max-width:300px;max-height:300px"/>
  <input name="imageUrl" type="file" accept="image/*" (change)="handleInputChange($event)" /> */}

          {/* <div className="form-group-row">
            <label htmlFor="file" className="col-form-label">Upload an image for the header</label>
            <div className="col-sm-9">
              <input className="form-control" type="file" id="file" onChange={this.handleChange} required={true} />
            </div>
          </div> */}

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