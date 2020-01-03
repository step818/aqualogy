import React from 'react';
import moment from 'moment';


const BlogSummary = ({blog}) => {
  return (
    <div className="z-depth-5">
      <div className="card indigo lighten-5">
        <div className="card-content black-text text-darken-5">
          <div>{blog.headerImg}</div>
          <span className="card-title" style={{ fontFamily: 'Courgette', fontWeight: '750', fontSize: '25px' }}>{blog.title}</span>
          <p>By {blog.authorFirstName} {blog.authorLastName} - {moment(blog.createdAt.toDate()).calendar()}</p>
          <p className="black-text">{blog.snippet}...</p>
          <p>Click to read more...</p>
        </div>
      </div>
    </div>
  );
}

export default BlogSummary;