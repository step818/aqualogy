import React from 'react';
import moment from 'moment';


const BlogSummary = ({blog}) => {
  return (
    <div className="z-depth-5">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text text-darken-3">
          <span className="card-title">{blog.title}</span>
          <p>By {blog.authorFirstName} {blog.authorLastName} - {moment(blog.createdAt.toDate()).calendar()}</p>
          <p className="white-text"></p>
          <p>Click to read more...</p>
        </div>
      </div>
    </div>
  );
}

export default BlogSummary;