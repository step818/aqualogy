import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBlog } from '../../store/actions/blogActions';
import { Redirect } from 'react-router-dom';
import classes from './NewPost.module.css';

class NewPost extends Component {

  handleChange = (e) => {
    console.log(e.target);
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleImageChange = (e) => {
    console.log(e.target.files[0]);
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createBlog(this.state);
    this.props.history.push('/');
  }

  render() {
    const { auth, input } = this.props;
// Protect routes from unauthorized users
    if (!auth.uid) {
      return( <Redirect to={"/"} /> );
    }
    
    return (
      <div className={classes.layout}>
        <div className={classes.formBounds}>
          <form onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Create New Post</h5>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={this.handleChange} required={true} />
            </div>
            <div>
              <label htmlFor="content">Write away...</label>
              <textarea id="content" className="materialize-textarea" onChange={this.handleChange} required={true} />
            </div>
            <div>
              <label htmlFor="extra">This is extra</label>
              <input type="text" id="extra" onChange={this.handleChange} />
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <input id="image" name="image" type="file" onChange={this.handleChange}/>
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
    createBlog: (blog) => dispatch(createBlog(blog))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);