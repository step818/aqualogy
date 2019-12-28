import React from 'react';
import moment from 'moment';


const BlogSummary = ({blog}) => {
  return (
    <div className="z-depth-5">
      <div className="card grey lighten-2">
        <div className="card-content black-text text-darken-3">
          <span className="card-title" style={{ fontFamily: 'Courgette', fontWeight: '900', fontSize: '40px' }}>{blog.title}</span>
          <p>By {blog.authorFirstName} {blog.authorLastName} - {moment(blog.createdAt.toDate()).calendar()}</p>
          <p className="black-text"></p>
          <p>Click to read more...</p>
        </div>
      </div>
    </div>
  );
}

export default BlogSummary;