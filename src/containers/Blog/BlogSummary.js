import React from 'react';

const BlogSummary = ({blog}) => {
  return (
    <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{blog.title}</span>
          <p className="grey-text">13th December, 2019</p>
        </div>
      </div>
  );
}

export default BlogSummary;