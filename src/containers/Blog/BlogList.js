import React from 'react';
import BlogSummary from './BlogSummary';

const BlogList = ({blogs}) => {
  return (
    <div className="project-list section">
      { blogs && blogs.map(blog => {
        return (
          <BlogSummary blog={blog} key={blog.id} />
        )
      })}
    </div>
  )
}

export default BlogList;