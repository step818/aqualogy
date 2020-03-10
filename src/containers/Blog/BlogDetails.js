import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';

// import BlogComments from './BlogComments';

const BlogDetails = (props) => {
  // console.log(props);
  const { blog } = props;
  // const id = props.match.params.id;
  if (blog) {
    return (
      <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          {/* <img src={blog.image} alt="blog post" />  */}
          <span className="card-title">{ blog.title }</span>
          <p>{ blog.content }</p>
        </div>
        <p>{blog.image}</p>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by { blog.authorFirstName } {blog.authorLastName }</div>
          <div>Posted {moment(blog.createdAt.toDate()).calendar()}</div>
          {/* <BlogComments /> */}
        </div>
      </div>
    </div>
    )
  } else {
    return(
      <div className="container center">
        <p>Loading blog...</p>
      </div>
      )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log('Blog details props: ', ownProps);
  // console.log('Blog Details: ',state);
  const id = ownProps.match.params.id;
  const blogs = state.firestore.data.blogs;
  const blog = blogs ? blogs[id] : null;
  return {
    blog : blog
  }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'blogs' }
    ])
  )(BlogDetails);